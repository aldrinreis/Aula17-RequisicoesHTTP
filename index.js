/* INICIAR SERVIDOR HTTP
  json-server --watch db.json
*/

const axios = require("./api.js");

function carregarEstados1() {
  axios.api.get("/estados/SC").then((response) => {
    console.log(response.data);
  });
}
//carregarEstados1();

async function carregarEstados() {
  try {
    var response = await axios.api.get("/estados/SC");
    console.log(response.data);
  } catch (erro) {
    console.log("Ocorreu um erro ao buscar o estado");
  }
}

async function alterarEstado() {
  try {
    var response = await axios.api.put("/estados/SC", {
      nome: "Santa Catarina",
    });
    console.log(response.data);
  } catch (erro) {
    console.log("Ocorreu um erro ao alterar o estado");
  }
}

async function incluirEstado() {
  try {
    var response = await axios.api.post("/estados", {
      id: "DF",
      nome: "Distrito Federal",
    });
    console.log(response.data);
  } catch (erro) {
    console.log("ocorreu um erro ao incluir o estado");
  }
}

async function deletarEstado() {
  try {
    var response = await axios.api.delete("/estados/DF");
    console.log("Estado deletado com sucesso");
  } catch (erro) {
    console.log("ocorreu um erro ao excluir o estado");
  }
}

//alterarEstado();
//carregarEstados();
//incluirEstado();
deletarEstado();
