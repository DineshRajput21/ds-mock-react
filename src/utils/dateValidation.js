export default function dateValidate(values) {
    // console.log("values",values)
    let error = 'Please enter a valid date';
    const invalid_age='Only applicable for age above 30 years';
    if (!values.day) {
     return error;
    } 
    else if ((!/^\d+$/.test(values.day) || !/^\d+$/.test(values.month) || !/^\d+$/.test(values.year))) {
     return error;
    }
    if (!values.month) {
     return error
    }
    if (values.year.length <4 ) {
        return error;
      }
      return '';
  };