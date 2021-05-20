import React from 'react';
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginTop:'20px',
    width: '100%',
  },
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {

    borderRadius: '50%',
    width: 30,
    height: 30,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#fff',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    // 'input:hover ~ &': {
    //   backgroundColor: '#ebf1f5',
    // },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    width: 18,
    height: 18,
    border: '6px solid #fff',
    backgroundColor: '#fff',
    // backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 18,
      height: 18,
      // backgroundImage: 'radial-gradient(#4f9f31,#4f9f31 28%,transparent 32%)',
      backgroundImage: 'radial-gradient(#4f9f31,#4f9f31 80%,transparent 100%)',
      borderRadius: '50%',
      content: '""',

    },
    'input:hover ~ &': {
      // backgroundColor: '#106ba3',
    },
  },
  buttonRoot: {
    border: '1px solid #aaa',
    // padding: '9px!important',
    borderRadius: '4px',
    cursor: 'pointer',
    background: '#f9f9f9!important',
    margin:'0 0 15px',
  },
  buttonRootSelected: {
    border: '1px solid #aaa',
    borderRadius: '4px',
    cursor: 'pointer',
    background: '#4f9f31 !important',
    margin:'0 0 15px',

  },
  formControlLabel: {
    color: '#444!important',
    fontSize: '18px !important',
    fontFamily: 'Source Sans Pro,san-serif !important',
  },
  formControlLabelSelected: {
    color: '#fff',
    fontWeight: 900,
    fontSize: '18px !important',
    fontFamily: 'Source Sans Pro,san-serif !important',
    lineHeight: '1.5',
    letterSpacing: '0 !important',
  },

}));

// Inspired by blueprintjs
function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

function AvivaRadioButton({ options, ...props }) {
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = React.useState(-1);

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
    console.log(event.target.value);
    // setHelperText(' ');
  };

  return (
    <FormControl className={classes.formControl} component="fieldset">
      <RadioGroup defaultValue="female" aria-label="gender" name="customized-radios" onChange={handleRadioChange}>
        {options.map(function (name, index) {
          var node = <FormControlLabel key={index} className={selectedValue == index ? classes.buttonRootSelected : classes.buttonRoot} value={index} control={<StyledRadio />} label={<Typography className={selectedValue == index ? classes.formControlLabelSelected : classes.formControlLabel}>{name}</Typography>} />;
          return node;
        })}
      </RadioGroup>
    </FormControl>
  );
}


AvivaRadioButton.propTypes = {
  options: PropTypes.array.isRequired,
}

AvivaRadioButton.defaultProps = {
  options: [
    "I want Aviva to assign a Representative. No action required.",
    "I have a preferred Representative in mind.",
    "I don’t need a Representative."
  ]
}

export default AvivaRadioButton;


