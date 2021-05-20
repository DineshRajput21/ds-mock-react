import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './avivaheader.css';
import './utils.css'
import { Container,  SvgIcon, Collapse } from '@material-ui/core';
import infoIcon from '../assets/images/info.svg'
import './bannernotification.css'
import CloseIcon from '@material-ui/icons/Close';
/**
 * Primary UI component for user interaction
 */
export const BannerNotification = ({ primary, backgroundColor, size, fontSize, closeEnabled,label, ...props }) => {

  const [isHidden, setIsHidden] = useState(false);
  const closeBannerHandler = () => {
    setIsHidden(isHidden => !isHidden)
  } 
  const showCloseIcon = closeEnabled ? 'banner-icon' : 'banner-icon-remove';
  const fontsize = `font-${fontSize}`
  return (
    <Collapse in={!isHidden}>
      <Container maxWidth={size} className="banner-container" style={{ backgroundColor: backgroundColor }}>
        <div id="banner-icon">
          <img alt="info" src={infoIcon} height={40} width={40} />
        </div>
        <div className={['banner-description', fontsize].join(' ')}>
        {label.map(function (name, index) {
            return  <p key={index} className={['banner-description', fontsize].join(' ')}>{name}</p> ;
        })}
        </div>
        <SvgIcon className={showCloseIcon} component={CloseIcon} onClick={closeBannerHandler}></SvgIcon>
      </Container>
    </Collapse>
  );
};



BannerNotification.propTypes = {
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs', false]),
  label: PropTypes.array.isRequired,
  onClick: PropTypes.func,
  closeEnabled: PropTypes.bool,
  fontSize: PropTypes.string,
};

BannerNotification.defaultProps = {
  backgroundColor: '#ecf8ff',
  primary: false,
  size: 'md',
  onClick: undefined,
  label: 'This is a notification message',
  closeEnabled:true,
  fontSize:'16'
};
