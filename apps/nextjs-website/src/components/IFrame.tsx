'use client';
import { IFrame as IFrameRC } from '@react-components/components';
import { IFrameSectionProps } from '@/lib/fetch/types/PageSection';
import { IFrameProps } from '@react-components/types';

const makeIFrameProps = ({
  src,
  sectionID,
}: IFrameSectionProps): IFrameProps => ({
  src,
  ...(sectionID && { sectionID }),
});

const IFrameSection = (props: IFrameSectionProps) => (
  <IFrameRC {...makeIFrameProps(props)} />
);

export default IFrameSection;
