/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import { URL } from '../../../api';

function CategoryRegistration() {
  const initialValues = {
    name: '',
    description: '',
    color: '#000000',
  };

  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(initialValues);

  // Função que vai setar o value
  const setValue = (index, value) => {
    setValues({
      ...values,
      [index]: value,
    });
  };

  function handleChange(event) {
    setValue(event.target.getAttribute('name'), event.target.value);
  }

  useEffect(() => {
    const URL_CATEGORIES = `${URL}/categories`;
    fetch(URL_CATEGORIES).then(async (response) => {
      const data = await response.json();
      setCategories([...data]);
    });
  }, []);

  return (
    <>
      <PageDefault>
        <h1>
          Cadastro de categorias
          {values.name}
        </h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setCategories([...categories, values]);
            setValues(initialValues);
          }}
        >
          <FormField
            label="Nome da Categoria"
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          />

          <FormField
            label="Descrição"
            type="textarea"
            name="description"
            value={values.description}
            onChange={handleChange}
          />

          <FormField
            label="cor"
            type="color"
            name="color"
            value={values.color}
            onChange={handleChange}
          />
        </form>
        <Button>Cadastrar</Button>

        <ul>
          {categories.map((category, index) => (
            <li key={`${category}${index}`}>{category.name}</li>
          ))}
        </ul>

        <Link to="/">Ir para home</Link>
      </PageDefault>
    </>
  );
}

export default CategoryRegistration;
