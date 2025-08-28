import TextAndImage from "@react-components/components/TextAndImage/TextAndImage";
import { TextAndImageProps } from "@react-components/types/TextAndImage/TextAndImage.types";
import { Meta, StoryFn } from "@storybook/react";

// Define the default export with metadata about your component
const meta: Meta<typeof TextAndImage> = {
  title: 'Components/TextAndImage/Default',
  component: TextAndImage,
};
export default meta;

// Define a 'Template' function that sets how args map to rendering
const TextAndImageTemplate: StoryFn<TextAndImageProps> = (args) => (
  <TextAndImage {...args} />
);

export const TextAndImageFull: StoryFn<typeof TextAndImage> = TextAndImageTemplate.bind({});
TextAndImageFull.args = {
    body: 'Corpo del testo del componente',
    image: {
        src: 'https://d2mk0pc4ejgxx6.cloudfront.net/dtd_blue_nofill_text_right_f0266cd322.svg',
        title: 'Titolo visibile on hover',
        href: '#',
    }
}

export const TextAndImageMin: StoryFn<typeof TextAndImage> = TextAndImageTemplate.bind({});
TextAndImageMin.args = {
    image: {
        src: 'https://d2mk0pc4ejgxx6.cloudfront.net/dtd_blue_nofill_text_right_f0266cd322.svg',
    }
}
