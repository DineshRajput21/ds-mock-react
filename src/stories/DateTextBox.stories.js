import React from 'react';
import { AvivaHeader } from '../components/AvivaHeader';
import { BannerNotification } from '../components/BannerNotification';
import DateTextBox from '../components/DateTextBox';


export default {
  title: 'Example/DateTextBox',
  component: DateTextBox,
 
};

const Template = (args) => <DateTextBox {...args} />;

export const DateTextBoxComponent = Template.bind({});
DateTextBox.args = {
  label: 'Date of Birth'
};

