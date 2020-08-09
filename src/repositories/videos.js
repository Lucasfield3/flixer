import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function create(objetoDoVideo) {
  // eslint-disable-next-line max-len
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoDoVideo),
  // eslint-disable-next-line max-len
  })// procure a "URL", entao, espere pela resposta(que sao as categorias q estao na URL) do servidor.json() e mande essa resposta para a categoria
    .then(async (resServ) => {
      if (resServ.ok) {
        const resposta = await resServ.json();

        return resposta;
      }

      throw new Error('Não foi possivel acessar os dados bb');
    });
}

export default {
  create,
};
