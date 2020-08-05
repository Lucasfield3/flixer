import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../../componentes/PageDefault';
import FormField from '../../../../componentes/FormField';
import Button from '../../../../componentes/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [values, setValues] = useState(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }
  function handleChange(e) {
    setValue(
      e.target.getAttribute('name'),
      e.target.value,
    );
  }
  useEffect(() => {
    const URL = 'https://lucas-flixer.herokuapp.com/categorias';
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
        {values.nome}
        {' '}

      </h1>
      <form onSubmit={function HandleSubmit(e) {
        e.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        setValues(valoresIniciais);
      }}
      >
        <FormField
          label="Nome da categoria"
          value={values.nome}
          type="text"
          name="nome"
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
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
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
