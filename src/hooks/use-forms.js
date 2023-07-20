import { useState } from "react";

const useForm = (initialValues, validationRules) => {
  const [values, setValues] = useState(initialValues);
  const touchInitializer = {};
  for (const fieldName in initialValues) {
    touchInitializer[fieldName] = false;
  }
  const [touches, setTouches] = useState(touchInitializer);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { id, value } = event.target;
    console.log(event.target);
    console.log(id);
    console.log(value);
    setValues((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = {};

    Object.keys(validationRules).forEach((fieldName) => {
      console.log(fieldName);
      const rules = validationRules[fieldName];
      validationErrors[fieldName] = [];
      rules.forEach((rule) => {
        const isValid = rule.validator(values[fieldName]);
        if (!isValid) {
          validationErrors[fieldName].push(rule.message);
        }
      });
    });
    setErrors(validationErrors);
  };

  const blurHandler = (event) => {
    const {name, value} = event.target;
    setTouches(prev => ({...prev, [name]: true}))
  }

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
