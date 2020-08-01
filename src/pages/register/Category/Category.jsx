import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField/FormField';
import ButtonEffect from '../../../components/ButtonEffect/ButtonEffect';
import useForm from '../../../hooks/useForm';
import categoriesRepository from '../../../repositories/categories';

const CadastroCategoria = () => {
  const initialValues = {
    title: '',
    description: '',
    color: '',
  };

  const [categories, setCategories] = useState([]);

  const { formValues, handleChange, clearForm } = useForm(initialValues);

  useEffect(() => {
    categoriesRepository
      .getAll()
      .then((response) => {
        setCategories(response);
      });
  }, []);

  return (
    <div className="BoxForm">
      <h1>
        {`Cadastro de Categoria: ${formValues.title}`}
      </h1>
      <form onSubmit={(event) => {
        event.preventDefault();
        setCategories([...categories, formValues]);

        categoriesRepository.create({
          title: formValues.title,
          description: formValues.description,
          color: formValues.color,
        });
        clearForm();
      }}
      >

        <FormField
          label="Título"
          type="text"
          name="title"
          value={formValues.title}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={formValues.description}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
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
