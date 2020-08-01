import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField/FormField';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categories';

import './Video.css';
import ButtonEffect from '../../../components/ButtonEffect/ButtonEffect';

function CadastroVideo() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const categoryTitles = categories.map(({ title }) => title);
  const { handleChange, clearForm, formValues } = useForm({
    title: 'Vídeo padrão',
    url: 'https://www.youtube.com/watch?v=ZY3-MFxVdEw',
    category: 'Front End',
  });

  useEffect(() => {
    categoriesRepository
      .getAll()
      .then((response) => {
        setCategories(response);
      });
  }, []);

  return (
    <div className="BoxForm">
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        // eslint-disable-next-line max-len
        const categoryChoosed = categories.find((category) => (category.title === formValues.category));

        videosRepository.create({
          title: formValues.title,
          url: formValues.url,
          categoryId: categoryChoosed.id,
        })
          .then(() => {
            clearForm();
            console.log('Video cadastrado');
            history.push('/');
          });
      }}
      >

        <FormField
          label="Título do Vídeo"
          type="text"
          name="title"
          value={formValues.title}
          onChange={handleChange}
        />

        <FormField
          label="Endereço Web (URL)"
          type="text"
          name="url"
          value={formValues.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          type="text"
          name="category"
          value={formValues.category}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <ButtonEffect color="primary" bgcolor="dark">
          <span>Cadastrar</span>
        </ButtonEffect>

      </form>

      <Link to="/cadastro/categoria">
        Cadastro de Categoria
      </Link>

    </div>
  );
}

export default CadastroVideo;
