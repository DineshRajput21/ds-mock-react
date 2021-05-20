import React from 'react';
import { AvivaHeader } from '../components/AvivaHeader';
import SegmentControl from '../components/SegmentControl';


export default {
  title: 'Example/SegmentControl Selection',
  component: SegmentControl,
 
};

const Template = (args) => <SegmentControl {...args} />;

export const SegmentControlSelection = Template.bind({});
SegmentControl.args = {
  
};

