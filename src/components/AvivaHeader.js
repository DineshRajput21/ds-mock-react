import React from 'react';
import PropTypes from 'prop-types';
import './avivaheader.css';
import { AppBar, Toolbar } from '@material-ui/core';
import avivaLogo from '../assets/images/logo.svg'


export const AvivaHeader = ({ primary, backgroundColor, size, label, ...props }) => {
  return (
    
    <AppBar className="aviva-header">
        <Toolbar className="aviva-header-image">
        <img src={avivaLogo} alt="logo" />
        </Toolbar>
      </AppBar>
      
  );
};

