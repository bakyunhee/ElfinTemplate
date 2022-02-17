import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { InputNumber } from './Input-number'

export default{
  title: 'FORM/InputNumber',
  component : InputNumber
}as ComponentMeta<typeof InputNumber>;

const Template: ComponentStory<typeof InputNumber> = (args) => <InputNumber {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  value : 0
}
