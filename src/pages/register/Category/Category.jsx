import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField/FormField';
import ButtonEffect from '../../../components/ButtonEffect/ButtonEffect';
import useForm from '../../../hooks/useForm';

const CadastroCategoria = () => {
  const initialValues = {
    title: '',
    description: '',
    color: '',
  };

  const [categories, setCategories] = useState([]);

  const { formValues, handleChange, clearForm } = useForm(initialValues);

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
        {formValues.title}
      </h1>
      <form onSubmit={(event) => {
        event.preventDefault();
        setCategories([...categories, formValues]);
        clearForm();
      }}
      >

        <FormField
          label="Título"
          type="text"
          // fieldType="input"
          name="title"
          value={formValues.title}
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
          <li key={`${category.title}${String(index)}`}>
            {category.title}
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