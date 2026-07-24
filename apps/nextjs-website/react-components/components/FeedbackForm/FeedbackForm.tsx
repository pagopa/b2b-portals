import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  SxProps,
  TextField,
  Typography,
} from '@mui/material';
import { FeedbackFormProps } from '@react-components/types';
import { useState } from 'react';
import { CheckIcon, CloseIcon, ErrorIcon } from './FeedbackForm.helpers';
import { usePathname } from 'next/navigation';
import {
  FeedbackFormResponseType,
  FeedbackFormType,
} from '@react-components/types/FeedbackForm/FeedbackForm.types';

export default function FeedbackForm({
  sectionID,
  labels,
  locale,
  feedbackToken,
  strapiApiBaseUrl,
}: FeedbackFormProps) {
  const pathname = usePathname();
  const slug = pathname === '/' ? 'homepage' : pathname?.substring(1);
  const textareaMaxLength = 200;
  const [formData, setFormData] = useState<FeedbackFormType>({
    useful: '',
    notUsefulReason: '',
    slug,
  });
  const [documentId, setDocumentId] = useState<string | null>();
  const [sending, setSending] = useState(false);

  const [formState, setFormState] = useState<
    'success' | 'ready' | 'error' | 'modal'
  >('ready');

  const handleFieldValue = (
    ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = ev.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const roundBoxStyle: SxProps = {
    backgroundColor: '#ffffff',
    p: { xs: 3, md: 6 },
    borderRadius: 10,
    display: 'inline-flex',
    alignItems: 'center',
    maxWidth: { xs: 342, md: 'initial' },
    border: '1px solid #C5C7C9',
  };

  const buttonStyle: SxProps = {
    backgroundColor: '#0066CC',
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#0052A3 !important',
      color: '#FFFFFF !important',
    },
    '&:disabled': {
      opacity: 0.65,
      color: '#FFFFFF',
    },
  };

  const handleSendFeedback = async () => {
    setSending(true);
    try {
      const res = await fetch(
        `${strapiApiBaseUrl}/api/feedbacks?locale=${locale}`,
        {
          mode: 'cors',
          method: 'post',
          headers: {
            Authorization: `Bearer ${feedbackToken}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            data: {
              useful: formData.useful === '1',
              slug: formData.slug,
            },
          }),
        },
      );
      if (res.status === 201) {
        const response: FeedbackFormResponseType = await res.json();
        setDocumentId(response.data.documentId);
        setFormState(formData.useful === '0' ? 'modal' : 'success');
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    } finally {
      setSending(false);
    }
  };

  const handleSendDetailedFeedback = async () => {
    if (!documentId) {
      setFormState('error');
      return;
    }
    if (formData.notUsefulReason || formData.suggestions) {
      setSending(true);
      try {
        const res = await fetch(
          `${strapiApiBaseUrl}/api/feedbacks/${documentId}?locale=${locale}`,
          {
            mode: 'cors',
            method: 'put',
            headers: {
              Authorization: `Bearer ${feedbackToken}`,
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              data: {
                ...(formData.notUsefulReason && {
                  notUsefulReason: formData.notUsefulReason,
                }),
                ...(formData.suggestions && {
                  suggestions: formData.suggestions,
                }),
              },
            }),
          },
        );
        if (res.status !== 200 && res.status !== 204) {
          setFormState('error');
        } else {
          setFormState('success');
        }
      } catch {
        setFormState('error');
      } finally {
        resetForm();
      }
    } else {
      handleCloseModal();
    }
  };
  const resetForm = () => {
    setSending(false);
    setDocumentId(null);
    setFormData({
      useful: '',
      notUsefulReason: '',
      suggestions: '',
      slug,
    });
  };

  const handleCloseModal = () => {
    setFormState('success');
    resetForm();
  };

  return (
    <>
      <Box
        component='section'
        {...(sectionID && { id: sectionID })}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          py: 12.5,
          backgroundColor: '#E6F0FA',
          px: 3,
        }}
      >
        {formState === 'error' && (
          <Box sx={{ ...roundBoxStyle, maxWidth: 'initial' }}>
            <ErrorIcon />
            <Typography sx={{ ml: 1, whiteSpace: 'pre-line' }} variant='body2'>
              {labels.error}
            </Typography>
          </Box>
        )}
        {formState === 'ready' && (
          <FormControl sx={{ maxWidth: { xs: 342, md: 'initial' } }}>
            <Box sx={roundBoxStyle}>
              <Typography
                component='h2'
                variant='h6'
                sx={{ fontSize: { xs: '16px', md: '18px' } }}
              >
                {labels.title}
                <Box
                  sx={{
                    'label span': { fontSize: { xs: '16px', md: '18px' } },
                  }}
                >
                  <RadioGroup
                    name='useful'
                    row
                    sx={{ py: 2, label: { fontWeight: 600 } }}
                    onChange={handleFieldValue}
                    value={formData.useful}
                  >
                    <FormControlLabel
                      disableTypography
                      value={'1'}
                      control={<Radio />}
                      label={labels.yes}
                    />
                    <FormControlLabel
                      disableTypography
                      value={'0'}
                      control={<Radio />}
                      label={labels.no}
                    />
                  </RadioGroup>
                  <Button
                    disabled={formData.useful === '' || sending}
                    onClick={() => handleSendFeedback()}
                    sx={buttonStyle}
                  >
                    {sending ? labels.sending : labels.send}
                  </Button>
                </Box>
              </Typography>
            </Box>
          </FormControl>
        )}
        {formState === 'success' && (
          <Box sx={{ ...roundBoxStyle, maxWidth: 'initial' }}>
            <Typography
              variant='body2'
              sx={{
                display: 'flex',
                alignItems: 'center',
                fontWeight: 600,
              }}
            >
              <CheckIcon />
              <span style={{ marginLeft: 24 }}>{labels.feedbackSent}</span>
            </Typography>
          </Box>
        )}
      </Box>
      <Dialog
        open={formState === 'modal'}
        onClose={(_e, reason) => {
          if (reason === 'backdropClick') {
            return;
          }
          handleCloseModal();
        }}
        fullWidth
        scroll='body'
        PaperProps={{
          sx: (theme) => ({
            maxWidth: 756,
            [theme.breakpoints.down('md')]: {
              m: 0,
              width: '100%',
              maxWidth: '100% !important',
              borderRadius: 0,
            },
          }),
        }}
      >
        <DialogTitle
          component='p'
          variant='h4'
          sx={{ p: { xs: '80px 24px 0 24px', md: '60px 60px 0 60px' } }}
        >
          {labels.thanksForYourOpinion}
          <IconButton
            onClick={handleCloseModal}
            sx={{ position: 'absolute', top: 16, right: 16 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ px: { xs: 3, md: 7.5 } }}>
          <DialogContentText sx={{ fontSize: 24, mb: 6 }}>
            {labels.helpUs}
          </DialogContentText>
          <FormControl>
            <Typography sx={{ fontSize: 24, fontWeight: 600 }}>
              {labels.whyNot}
            </Typography>
            <RadioGroup
              name='notUsefulReason'
              sx={{ py: 2, label: { fontWeight: 600 } }}
              onChange={handleFieldValue}
              value={formData.notUsefulReason}
            >
              <FormControlLabel
                disableTypography
                control={<Radio />}
                value={labels.questionDidNotFoundInfo}
                label={labels.questionDidNotFoundInfo}
              />
              <FormControlLabel
                disableTypography
                control={<Radio />}
                value={labels.questionNotExhaustiveInfo}
                label={labels.questionNotExhaustiveInfo}
              />
              <FormControlLabel
                disableTypography
                control={<Radio />}
                value={labels.questionOther}
                label={labels.questionOther}
              />
            </RadioGroup>
            <Typography sx={{ fontSize: 24, fontWeight: 600, mt: 2 }}>
              {labels.howWeDoBetter}
            </Typography>
            <Typography mt={1} mb={2}>
              {labels.anonymousQuestion}
            </Typography>
            <TextField
              fullWidth
              multiline
              value={formData.suggestions}
              name='suggestions'
              placeholder={labels.textPlaceholder}
              onChange={handleFieldValue}
              inputProps={{ maxLength: textareaMaxLength }}
              helperText={labels.maximumCharacters(
                textareaMaxLength - (formData.suggestions ?? '').length,
              )}
              minRows={5}
              sx={{ textarea: { resize: 'vertical' } }}
              FormHelperTextProps={{
                sx: {
                  textAlign: 'right',
                  fontSize: 14,
                  mr: 0,
                  fontWeight: 400,
                },
              }}
            />
          </FormControl>
        </DialogContent>
        <DialogActions sx={{ px: 7, mb: 2 }}>
          <Button
            sx={buttonStyle}
            disabled={formData.notUsefulReason === '' || sending}
            onClick={() => handleSendDetailedFeedback()}
          >
            {sending ? labels.sending : labels.sendDetails}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
