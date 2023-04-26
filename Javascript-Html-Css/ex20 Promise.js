let alunos = ["jão", "Luncida", "Predo", "Lusca"];

function adicionaAluno(al) {
  let proms = new Promise(function (resolve, reject) {
    // O Promise é uma forma de CallBack, porem possui mais opções para trabalhar, e de certa forma substitui os callbacks.
    setTimeout(() => {
      alunos.push(al);
      let erro = false;
      if (!erro) {
        resolve();
      } else {
        reject({ msg: "deu erro" });
      }
    }, 1000);
  });
  return proms;
}
function cataloga() {
  console.log(alunos);
}

adicionaAluno("Marco")
  .then(cataloga)
  .catch((erro) => {
    console.log(erro.msg);
  });
