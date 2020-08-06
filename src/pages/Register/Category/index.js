/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import { hasCategories } from './constants';
import categoriesActions from '../../../api/actions/CategoriesActions';
import Loading from '../../../components/Loading';

function CategoryRegistration() {
  const initialValues = {
    title: '',
    description: '',
    color: '#000000',
  };

  const { handleChange, values, clearForm } = useForm(initialValues);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    categoriesActions.getAll().then((categoryData) => {
      setCategories(categoryData);
    });
  }, []);

  return (
    <>
      <PageDefault>
        <h1>
          Cadastro de categorias
        </h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setCategories([...categories, values]);
            clearForm();
          }}
        >
          <FormField
            label="Nome da Categoria"
            type="text"
            name="title"
            value={values.title}
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
          <Button>Cadastrar</Button>
        </form>
        {Boolean(hasCategories(categories)) && <Loading />}
        <ul>
          {categories.map((category) => (
            <li key={`${category.title}`}>{category.title}</li>
          ))}
        </ul>
        <Link to="/">Ir para home</Link>
      </PageDefault>
    </>
  );
}

export default CategoryRegistration;
