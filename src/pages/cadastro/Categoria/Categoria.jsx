import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField/FormField';
import ButtonEffect from '../../../components/ButtonEffect/ButtonEffect';

const CadastroCategoria = () => {
  const initialValues = {
    name: '',
    description: '',
    color: '',
  };

  const [categories, setCategories] = useState([]);
  const [formValues, setFormValues] = useState(initialValues);

  function setValue(key, value) {
    setFormValues({ ...formValues, [key]: value });
  }

  function handleChange(event) {
    // console.log(event.target.getAttribute('name'));
    const { name, value } = event.target;
    setValue(name, value);
  }

  useEffect(() => {
    const URL_SERVER = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categories'
      : 'https://imersao-react-axethings.herokuapp.com/categories';

    fetch(URL_SERVER)
      .then(async (resp) => {
        const response = await resp.json();
        setCategories([
          ...response,
        ]);
      });
  }, []);

  return (
    <div style={{ color: 'var(--primary)' }}>
      <h1>
        Cadastro de Categoria:
        {formValues.name}
      </h1>
      <form onSubmit={(event) => {
        event.preventDefault();
        setCategories([...categories, formValues]);
        setFormValues(initialValues);
      }}
      >

        <FormField
          label="Nome"
          type="text"
          // fieldType="input"
          name="name"
          value={formValues.name}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          // fieldType="textarea"
          name="description"
          value={formValues.description}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          // fieldType="input"
          name="color"
          value={formValues.color}
          onChange={handleChange}
        />

        {/* <button>Cadastrar</button> */}
        <ButtonEffect color="primary" bgcolor="dark">
          <span>Cadastrar</span>
        </ButtonEffect>
      </form>

      <ul>
        {categories.map((category, index) => (
          <li key={`${category.name}${String(index)}`}>
            {category.name}
            --
            {category.description}
            --
            {category.color}
          </li>
        ))}
      </ul>

      {categories.length === 0 && (
        <div>Carregando...</div>
      )}

      <Link to="/">
        Ir para home
      </Link>

    </div>
  );
};

export default CadastroCategoria;
