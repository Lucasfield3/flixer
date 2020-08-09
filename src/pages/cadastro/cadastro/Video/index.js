import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../../componentes/PageDefault';
import useForm from '../../../../hooks/useForm';
import FormField from '../../../../componentes/FormField';
import Button from '../../../../componentes/Button';
import videosRepository from '../../../../repositories/videos';

function CadastroVideo() {
  const history = useHistory();
  const { handleChange, values } = useForm({
    titulo: 'Video Padrao',
    url: 'https://www.youtube.com/watch?v=81PE4xjEAUA',
    categoria: 'Comédia',
  });
  return (
    <PageDefault>
      <h1>Cadastro videos</h1>

      <form onSubmit={(e) => {
        e.preventDefault();
        // alert('Opa foi!!');
        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: 1,
        })
          .then(() => {
            console.log('Cadastradooo!');
            history.push('/');
          });
      }}
      >
        <FormField
          label="Título do Video"
          name="titulo"
          value={values.titulo}
          onchange={handleChange}
        />
        <FormField
          label="URL"
          name="url"
          value={values.url}
          onchange={handleChange}
        />
        <FormField
          label="Categoria"
          name="url"
          value={values.categoria}
          onchange={handleChange}
        />
        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
