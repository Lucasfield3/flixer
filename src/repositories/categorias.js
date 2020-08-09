import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function getAllWithVideos() {
  // eslint-disable-next-line max-len
  return fetch(`${URL_CATEGORIES}?_embed=videos`)// procure a "URL", entao, espere pela resposta(que sao as categorias q estao na URL) do servidor.json() e mande essa resposta para a categoria
    .then(async (resServ) => {
      if (resServ.ok) {
        const resposta = await resServ.json();

        return resposta;
      }

      throw new Error('Não foi possivel acessar os dados bb');
    });
}

export default {
  getAllWithVideos,
};
