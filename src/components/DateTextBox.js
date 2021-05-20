import './datetextbox.css'
import './utils.css'
import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormGroup } from '@material-ui/core';
import dateValidate from '../utils/dateValidation';
import ReactDOM from "react-dom";
import { Alert } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import errorIcon from '../assets/images/error-red.svg'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },

    },
    message: {
        color: '#bd2624 !important',
        fontSize: '16px',
        fontWeight: '600',
        fontFamily: 'Source Sans Pro,san-serif!important',
        backgroundColor:'white !important',

    }
}));

function DateTextBox({ label,onDateValueChange, ...props }) {

    const [values, setValues] = useState({});
    const [error, setError] = useState('');
    const [enabled,setEnabled]= useState(false);
    useEffect(() => {
        handleValidation(values)
    }, [values]);

    const handleChange = (event) => {
        setEnabled(true);
        setValues(values => ({ ...values, [event.target.name]: event.target.value }));
        setFocus(event)
    };
    const setFocus = (e) => {
        if (e.target.value.length === e.target.maxLength) {
            if (e.target.nextSibling === null) return;
            ReactDOM.findDOMNode(e.target.nextSibling).focus();
        }
        if (e.target.value.length === 0) {
            if (e.target.previousSibling === null) return;
            ReactDOM.findDOMNode(e.target.previousSibling).focus();
        }
    }
    const handleValidation = (datas) => {
        var error = dateValidate(datas);
        setError(error)

        //send the callback only if the date is valid else send null
        onDateValueChange && error === '' ? onDateValueChange(generateDate(datas)) : onDateValueChange(null)
    };
    const generateDate = (datas) => {
        return datas['day']+"-"+datas['month']+"-"+datas['year'];
    }
    const classes = useStyles();

    let alertComponent;
    if(enabled && error !== '') {

        alertComponent = <Alert className={[classes.message].join(' ')} icon={<img src={errorIcon} alt="logo" />} color="error">{error}</Alert>
    } else {
        alertComponent = <></>
    }
    return (
        <FormGroup >
            <p className="datebox-label font-20">{label}</p>
            <div className={classes.root}>
                {alertComponent}
            </div>
            <div className="datebox-layout">
                <input className="textbox-date" type="tel" id="date" name="day" placeholder="DD" min="1" maxLength="2" onChange={handleChange} value={values.day || ""} />
                <input className="textbox-date" type="tel" id="month" name="month" placeholder="MM" min="1" maxLength="2" onChange={handleChange} value={values.month || ""} />
                <input className="textbox-date" type="tel" id="year" name="year" placeholder="YYYY" min="1" maxLength="4" onChange={handleChange} value={values.year || ""} />
            </div>
        </FormGroup >

    );
}

DateTextBox.propTypes = {
    label : PropTypes.string,
    onDateValueChange: PropTypes.func,
}
DateTextBox.defaultProps = {
    label: 'Date of birth',
    onDateValueChange:undefined,
}

export default DateTextBox;