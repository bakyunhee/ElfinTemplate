import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'BUTTON/Button',
  component: Button
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.orsg/docs/react/writing-stories/args
Default.args = {
  disabled: false,
  label: 'Default',
  variant : 'default',
  width : 4.25
};

export const White = Template.bind({});
White.args = {
  disabled : false,
  label: 'White',
  variant : 'white',
  width : 4.25
};

export const Blue = Template.bind({});
 Blue.args = {
  disabled : false,
  label : 'Blue',
  variant : 'blue',
  width : 4.25
}

export const SkyBlue = Template.bind({});
SkyBlue.args = {
  disabled : false,
  label : 'SkyBlue',
  variant : 'skyblue',
  width : 4.25
}
