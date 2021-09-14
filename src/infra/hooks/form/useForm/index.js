import React from 'react';

function formatErrors(yupErrorsInner = []) {
  return yupErrorsInner.reduce((errorObjectAcc, currentError) => {
    const fieldName = currentError.path;
    const errorMessage = currentError.message;
    return {
      ...errorObjectAcc,
      [fieldName]: errorMessage,
    };
  }, {});
}

export default function useForm({
  initialValues,
  onSubmit,
  validateSchema,
}) {
  const [values, setValues] = React.useState(initialValues);
  const [isFormSubmitted, setIsFormSubmitted] = React.useState(false);
  const [isFormDisabled, setIsFormDisabled] = React.useState(true);
  const [errors, setErrors] = React.useState(initialValues);
  const [touchedFields, setTouchedFields] = React.useState({});

  async function validate(currentValues) {
    try {
      await validateSchema(currentValues);
      setIsFormDisabled(false);
      setErrors({});
    } catch (err) {
      const formattedErrors = formatErrors(err.inner);
      setErrors(formattedErrors);
      setIsFormDisabled(true);
    }
  }

  const getFieldName = (e) => e.target.getAttribute('name');

  function handleSubmit(e) {
    e.preventDefault();
    setIsFormSubmitted(true);
    onSubmit(values);
  }

  function handleChange(e) {
    setIsFormSubmitted(false);
    const fieldName = getFieldName(e);
    const { value } = e.target;
    setValues((currentValues) => ({
      ...currentValues,
      [fieldName]: value,
    }));
  }

  function handleBlur(e) {
    const fieldName = getFieldName(e);
    setTouchedFields({
      ...touchedFields,
      [fieldName]: true,
    });
  }

  function handleReset(resetValues) {
    setIsFormSubmitted(false);
    setValues(resetValues);
    const resetTouched = Object.keys(resetValues).reduce((acc, item) => ({
      ...acc,
      [item]: false,
    }), {});
    setTouchedFields(resetTouched);
  }

  React.useEffect(() => {
    validate(values);
  }, [values]);

  return {
    values,
    handleSubmit,
    handleChange,
    isFormDisabled,
    setIsFormDisabled,
    isFormSubmitted,
    errors,
    touchedFields,
    handleBlur,
    handleReset,
  };
}
