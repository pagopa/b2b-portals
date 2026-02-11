'use client';
import { IFrame as IFrameRC } from '@react-components/components';
import { IFrameSectionProps } from '@/lib/fetch/types/PageSection';
import { IFrameProps } from '@react-components/types';

const makeIFrameProps = ({
  src,
  sectionID,
  title,
}: IFrameSectionProps): IFrameProps => ({
  src,
  ...(sectionID && { sectionID }),
  title,
});

const IFrameSection = (props: IFrameSectionProps) => (
  <IFrameRC {...makeIFrameProps(props)} />
);

export default IFrameSection;
