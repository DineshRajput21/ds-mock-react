import React from 'react';
import { AvivaHeader } from '../components/AvivaHeader';
import ExpandableInfo from '../components/ExpandableInfo';


export default {
  title: 'Example/Expandable Info',
  component: ExpandableInfo,
 
};

const Template = (args) => <ExpandableInfo {...args} />;

export const ExpandleInfoList = Template.bind({});
ExpandableInfo.args = {
  
};

