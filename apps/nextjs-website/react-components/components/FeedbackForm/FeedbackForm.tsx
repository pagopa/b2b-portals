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
  tenant,
  token,
}: FeedbackFormProps) {
  const pathname = usePathname();
  const slug = pathname === '/' ? 'homepage' : pathname;
  const textareaMaxLength = 200;
  const [formData, setFormData] = useState<FeedbackFormType>({
    useful: '',
    notUsefulReason: '',
    slug,
  });

  const [feedbackSent, setFeedbackSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [error, setError] = useState(false);

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
    display: 'inline-block',
    width: { xs: '100%', md: 'initial' },
    border: '1px solid #C5C7C9',
  };

  const buttonStyle: SxProps = {
    backgroundColor: '#0066CC',
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#0066CC',
    },
    '&:disabled': {
      backgroundColor: '#D9DADB',
      color: '#5C6F82',
    },
  };

  const handleSendFeedback = async () => {
    setSending(true);
    try {
      const res = await fetch(
        `https://${tenant}.b2bportals.pagopa.it/api/feedbacks?locale=${locale}`,
        {
          mode: 'cors',
          method: 'post',
          headers: {
            Authorization: `Bearer ${token}`,
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
        setFormData((prev) => ({
          ...prev,
          documentId: response.data.documentId,
        }));
        setSending(false);
        setFeedbackSent(true);
        if (formData.useful === '0') {
          setOpenModal(true);
        }
      } else {
        setError(true);
      }
    } catch (_e) {
      setError(true);
    }
  };

  const handleSendDetailedFeedback = async () => {
    setSending(true);
    try {
      await fetch(
        `https://${tenant}.b2bportals.pagopa.it/api/feedbacks/${formData.documentId}?locale=${locale}`,
        {
          mode: 'cors',
          method: 'put',
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            data: {
              ...formData,
              useful: false,
            },
          }),
        },
      );
      setOpenModal(false);
      setSending(false);
    } catch (_e) {
      setError(true);
    }
  };

  const handleCloseModal = () => setOpenModal(false);

  return (
    <>
      <Box
        component='section'
        {...(sectionID && { id: sectionID })}
        sx={{
          display: { xs: 'block', md: 'flex' },
          justifyContent: 'center',
          py: 12.5,
          backgroundColor: '#E6F0FA',
          px: 3,
        }}
      >
        {error && (
          <Box sx={{ ...roundBoxStyle, display: 'flex', alignItems: 'center' }}>
            <ErrorIcon />
            <Typography sx={{ ml: 1 }} variant='body2'>
              {labels.error}
            </Typography>
          </Box>
        )}
        {!error && (
          <>
            {!feedbackSent && (
              <FormControl sx={{ width: { xs: '100%', md: 'initial' } }}>
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
            {feedbackSent && (
              <Box sx={roundBoxStyle}>
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
          </>
        )}
      </Box>
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        fullWidth
        scroll='body'
        PaperProps={{
          sx: (theme) => ({
            [theme.breakpoints.only('xs')]: {
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
