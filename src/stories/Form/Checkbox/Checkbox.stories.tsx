import React, { useState } from "react";
import { ComponentStory , ComponentMeta } from "@storybook/react";

import { Checkbox } from './Checkbox'

export default{
  title : 'FORM/Checkbox',
  component: Checkbox
}as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args}></Checkbox>;

export const Primary = Template.bind({});
Primary.args = {
  checked : false
}
