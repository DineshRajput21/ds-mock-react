import React from 'react';
import { AvivaHeader } from '../components/AvivaHeader';
import { BannerNotification } from '../components/BannerNotification';


export default {
  title: 'Example/BannerNotification',
  component: BannerNotification,
 
};

const Template = (args) => <BannerNotification {...args} />;

export const DismissableBannerNotification = Template.bind({});
BannerNotification.args = {
  primary: true,
  closeEnabled:true,
  label: 'Banner Notification'
};

