import { useEffect, useRef, useState } from 'react';
import { Grid, Link, Stack, Typography } from '@mui/material';
import ContainerRC from '../common/ContainerRC';
import {
  isJSX,
  useIsVisible,
} from '@react-components/types/common/Common.types';
import {
  VideoProps,
  VideoTextProps,
} from '@react-components/types/Video/Video.types';
import { BackgroundColor, TextColor } from '../common/Common.helpers';

const Video = (props: VideoProps) => {
  const {
    title,
    subtitle,
    src,
    autoplay = false,
    loop = false,
    full = false,
    reverse = false,
    theme = 'dark',
    fallback = 'Ops! Qualcosa è andato storto... Riprova in un secondo momento.',
    playButtonLabel = 'Guarda il video',
  } = props;
  const videoRef = useRef<HTMLVideoElement>(null);
  const isVisible = useIsVisible(videoRef);
  const [error, setError] = useState(false);

  const textColor = TextColor(theme);
  const backgroundColor = BackgroundColor(theme);

  useEffect(() => {
    if (!isVisible) return;
    const startVideoWhenVisible = async () => {
      if (autoplay && isVisible) await play();
    };
    startVideoWhenVisible().catch(console.error);
  }, [isVisible]);

  const play = async (e?: React.MouseEvent) => {
    try {
      e?.preventDefault();
      await videoRef.current?.play();
    } catch (error) {
      console.warn(error);
    }
  };

  // Determine the type based on the structure of src
  const type =
    typeof src === 'string'
      ? src.split('.').pop() ?? 'mp4'
      : src?.mime.split('/').pop() ?? 'mp4';

  const render = () => {
    if (error) {
      return isJSX(fallback) ? (
        fallback
      ) : (
        <Typography variant='h6' color='background.paper' textAlign='center'>
          {fallback}
        </Typography>
      );
    }
    return (
      <video
        onContextMenu={(e) => {
          e.preventDefault();
        }}
        controlsList='nodownload'
        playsInline
        ref={videoRef}
        controls
        muted
        loop={loop}
        style={{
          aspectRatio: 1.777,
          borderRadius: '25px',
          overflow: 'hidden',
          width: '100%',
        }}
      >
        <source
          src={typeof src === 'object' ? src.url : src}
          type={`video/${type}`}
          onError={() => {
            setError(true);
          }}
        />
      </video>
    );
  };

  return (
    <ContainerRC
      spacing={{ xs: 3, md: 16 }}
      py={7}
      alignItems='center'
      direction={reverse ? 'row-reverse' : 'row'}
      background={backgroundColor}
    >
      <Grid item xs={12} md={full ? 12 : 6}>
        {render()}
      </Grid>
      {!full && (
        <Grid item md={6}>
          <VideoText title={title} subtitle={subtitle} theme={theme} />
          <Stack direction='row' alignItems='center'>
            <Link
              component='button'
              onClick={play}
              sx={{
                fontWeight: 700,
                fontSize: '16px',
                textDecoration: 'none',
                color: textColor,
              }}
            >
              {playButtonLabel}
            </Link>
          </Stack>
        </Grid>
      )}
    </ContainerRC>
  );
};

const VideoText = ({ title, subtitle, theme = 'dark' }: VideoTextProps) => {
  const textColor = TextColor(theme);
  return (
    <>
      {title && (
        <Typography variant='h5' mb={4} color={textColor}>
          {title}
        </Typography>
      )}
      {subtitle && (
        <Typography
          paragraph
          sx={{ fontSize: '16px' }}
          mb={3}
          color={textColor}
        >
          {subtitle}
        </Typography>
      )}
    </>
  );
};

export default Video;
