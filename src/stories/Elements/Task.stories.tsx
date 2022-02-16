import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Task } from './Task';

export default {
  title : 'Elements/Task',
  component : Task,
}as ComponentMeta<typeof Task>

const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task : {
    id: '1',
    title : 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args={
  task : {
    ...Default.args.task,
    state : 'TASK_PINNED'
  }
}

export const Archive = Template.bind({});
Archive.args = {
  task : {
    ...Default.args.task,
    state : 'TASK_ARCHIVED'
  }
}

