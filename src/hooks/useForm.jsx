import { useState } from 'react';

function useForm(initialValues) {
  const [formValues, setFormValues] = useState(initialValues);

  function setValue(key, value) {
    setFormValues({ ...formValues, [key]: value });
  }

  function handleChange(event) {
    // console.log(event.target.getAttribute('name'));
    const { name, value } = event.target;
    setValue(name, value);
  }

  function clearForm() {
    setFormValues(initialValues);
  }

  return {
    formValues,
    handleChange,
    clearForm,
  };
}



export default useForm;