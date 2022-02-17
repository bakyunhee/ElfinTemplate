import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InputText } from './Input-text';

export default{
  title :'FORM/InputText',
  component: InputText
}as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = (args) => <InputText {...args}/>;

export const Primary = Template.bind({});

Primary.args = {
  value : 'Text'
};

