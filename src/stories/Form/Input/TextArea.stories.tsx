import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextArea } from './TextArea';

export default{
  title: 'FORM/TextArea',
  component: TextArea
}as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args}></TextArea>;

export const Primary = Template.bind({});
Primary.args = {
  value : "TextArea"
}
