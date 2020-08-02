import React, { useState } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";
import FormField from "../../../components/FormField";

function CategoryRegistration() {
  const initialValues = {
    name: "",
    description: "",
    color: "#000000",
  };

  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(initialValues);

  console.log(values);
  console.log(categories);

  // Função que vai setar o value
  const setValue = (index, value) => {
    setValues({
      ...values,
      [index]: value,
    });
  };

  function handleChange(event) {
    setValue(event.target.getAttribute("name"), event.target.value);
  }

  return (
    <>
      <PageDefault>
        <h1>Cadastro de categorias {values.name} </h1>
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

          {/* <div>
          <label>
            Descrição:
            <textarea
              type="text"
              value={values.descricao}
              name="descricao"
              onChange={handleChange}
            />
          </label>
        </div> */}

          <FormField
            label="cor"
            type="color"
            name="color"
            value={values.color}
            onChange={handleChange}
          />

          <button>Cadastrar</button>
        </form>

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
