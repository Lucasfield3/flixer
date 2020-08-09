import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../../componentes/PageDefault';
import FormField from '../../../../componentes/FormField';
import Button from '../../../../componentes/Button';
import useForm from '../../../../hooks/useForm';

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://lucas-flixer.herokuapp.com/categorias';
    // eslint-disable-next-line max-len
    fetch(URL)// procure a "URL", entao, espere pela resposta(que sao as categorias q estao na URL) do servidor.json() e mande essa resposta para a categoria
      .then(async (resServ) => {
        const res = await resServ.json();
        setCategorias([
          ...res,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro Categorias:
        {values.titulo}
        {' '}

      </h1>
      <form onSubmit={function HandleSubmit(e) {
        e.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);
        clearForm();
      }}
      >
        <FormField
          label="Nome da categoria"
          value={values.titulo}
          type="text"
          name="titulo"
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          value={values.descricao}
          type="textarea"
          name="descricao"
          onChange={handleChange}
        />
        <FormField
          label="Cor"
          value={values.cor}
          type="color"
          name="cor"
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>
      {categorias.length === 0 && (
      <div>
        Loading...
      </div>
      )}

      <ul>
        {/* eslint-disable-next-line array-callback-return */}
        {categorias.map((categoria) => {
          // eslint-disable-next-line no-unused-expressions
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>;
        })}
      </ul>
      <Link to="/">
        Ir para a Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;

/*    setTimeout(() => {
      setCategorias([
        ...categorias,
        {
          id: 1,
          nome: 'Front End',
          descricao: 'Uma categoria inicial',
          cor: '#cbd1ff',
        },
        {
          id: 2,
          nome: 'Back End',
          descricao: 'Uma categoria inicial2',
          cor: '#cbd1ff',
        },
      ]);
    }, 4 * 1000); */
