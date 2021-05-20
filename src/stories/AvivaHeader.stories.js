import React from 'react';
import { AvivaHeader } from '../components/AvivaHeader';


export default {
  title: 'Example/AvivaHeader',
  component: AvivaHeader
};

const Template = (args) => <AvivaHeader {...args} />;

export const Primary = Template.bind({});
AvivaHeader.args = {
  primary: true,
  label: 'AvivaHeader',
};

