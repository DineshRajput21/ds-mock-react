import React from 'react';
import {  withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const ColorButton = withStyles((theme) => ({
  root: {
    fontFamily: 'source_sans_pro_vf,-apple-system, system-ui,sans-serif !important',
    textTransform: 'none',
    fontSize:'16px',
    fontWeight:'bold !important',
    borderRadius: '5px',
   
    height:'55px',
    width:'100%',
    backgroundColor: '#ffd900 !important',
    color: '#004fb6',
    '&:hover': {
        backgroundColor: '#004fb6 !important',
        color: '#ffffff !important',
    },
  },
  disabled:{
    backgroundColor:'#cccccc !important',
    fontWeight:'bold !important',
  },
  
}))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  colorPrimary:{
    margin: ' 40px 0em 0.5em 0em',
    backgroundColor: '#ffd900 ',
    color: '#004fb6 ',
  },
  colorSecondary:{
    backgroundColor :'#fff !important',
    border: '1px solid #ccc',
    margin: '0.5em 0em 40px 0em',
  }
}));



export default function AvivaButton({label,setDisabled,color,onButtonClick,...props}) {
  const classes = useStyles();
  const handleClick = (event) => {
    if (onButtonClick) onButtonClick(event);
  };

  const colorClass = color === "primary" ? [classes.margin,classes.colorPrimary].join(' ') : [classes.margin,classes.colorSecondary].join(' ') 
  return (
    
      <ColorButton  disabled={setDisabled} onClick={handleClick}  color="primary" disableRipple className={colorClass}>
        {label}
      </ColorButton>
      
    
  );
}

AvivaButton.propTypes = {
    label: PropTypes.string,
    setDisabled:PropTypes.bool,
    onButtonClick: PropTypes.func,
    color:PropTypes.oneOf(['primary', 'secondary']), //primary is yellow,secondary is white
}
AvivaButton.defaultProps = {
    label: "Important Note",
    color:'primary',
}