import React from 'react';

export const useForm = initialValues => {
  const [values, setValues] = React.useState(initialValues);

  return [
    values,
    e => {
      setValues({
        ...values,
        [e.target.name]: e.target.value
      });
    },
    () => setValues(initialValues)
  ];
};


export const validateInput = values => {
  const errors = {}

  for (const [key, value] of Object.entries(values)) {
    // Check if every field is provided
    if(!value) {
      errors[key] = `${key} - ველი აუცილებელია`
    }
  }

  // Return validation results
  if(Object.keys(errors).length > 0) {
    return errors
  }

  
    // Check if passwords match
    if(values.passwordRepeat && values.password !== values.passwordRepeat) {
      errors['passwordRepeat'] = `პაროლები არ ემთხვევა ერთმანეთს`
      return errors
    }


  return errors
}