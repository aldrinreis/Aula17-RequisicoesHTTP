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

alterarEstado();
carregarEstados();
