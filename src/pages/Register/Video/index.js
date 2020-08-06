/* eslint-disable linebreak-style */
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import useForm from "../../../hooks/useForm";
import FormField from "../../../components/FormField";
import Button from "../../../components/Button";
import videosActions from "../../../api/actions/Videos.Actions";
import categoriesActions from "../../../api/actions/CategoriesActions";

function VideoRegistration() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const categoryTitles = categories.map(({ title }) => title);
  const { handleChange, values } = useForm({
    name: "",
    url: "",
    category: "",
  });

  useEffect(() => {
    categoriesActions
      .getAll()
      .then((categoriesFromServer) => setCategories(categoriesFromServer));
  }, []);

  return (
    <PageDefault>
      <h1>Página de Cadastro de video</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const choosenCategory = categories.find(
            (category) => category.title === values.category
          );

          videosActions
            .createVideo({
              name: values.name,
              url: values.url,
              categoryId: choosenCategory.id,
            })

            .then(() => {
              history.push("/");
            });
        }}
      >
        <FormField
          label="Título do Vídeo"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="category"
          value={values.category}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button type="submit">Cadastrar</Button>
      </form>

      <Link to="/cadastro/categoria">Cadastro Categoria</Link>
    </PageDefault>
  );
}

export default VideoRegistration;
