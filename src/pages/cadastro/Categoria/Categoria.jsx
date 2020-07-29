import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField/FormField';


const CadastroCategoria = () => {
  const initialValues = {
    name: '',
    description: '',
    color: '',
  }

  const [categories, setCategories] = useState([])
  const [formValues, setFormValues] = useState(initialValues)

  function setValue(key, value) {
    setFormValues({...formValues, [key]: value})
  }

  function handleChange(event) {
    // console.log(event.target.getAttribute('name'));
    const { name, value } = event.target
    setValue(name, value)
  }

  return (
    <div style={{color: "var(--primary)"}}>
      <h1>Cadastro de Categoria: {formValues.name}</h1>
      <form onSubmit={(event) => {
          event.preventDefault()
          setCategories([...categories, formValues])
          setFormValues(initialValues)
        }}
      >

      <FormField
        label="Nome"
        type="text"
        fieldType="input"
        name="name"
        value={formValues.name}
        onChange={handleChange}
      />


      <FormField
        label="Descrição"
        type="text"
        fieldType="textarea"
        name="description"
        value={formValues.description}
        onChange={handleChange}
      />

        
      <FormField
        label="Cor"
        type="color"
        fieldType="input"
        name="color"
        value={formValues.color}
        onChange={handleChange}
      />


        <button>Cadastrar</button>
      </form>

      <ul>
        {categories.map((category, index) => {
          return (
            <li key={`${category.name}${index}`}>
              {category.name}--{category.description}--{category.color}
            </li>
          )
        })}
      </ul>

      <Link to="/" >
        Ir para home
      </Link>

    </div>
  )
}

export default CadastroCategoria;