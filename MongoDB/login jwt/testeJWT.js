const jwt = require("jsonwebtoken");
// O Json Web Token tem como utilidade gerar um token com informações passadas a ele, dessa forma o usuario não precisa ficar enviando o usuario e senha para cada simples requisição. No backend também utilizamos o jwt para verificar se o token é valido.

const user = {
    id: "15",
    name: "jão",
    username: "jao@gmail.com",
    password: "142536",
};
const secret = "sfnoçslfvbósnidfonsçdfgodtg";

function generateToken() {
    const token = jwt.sign({ ID: user.id, UserName: user.username }, secret, {
        expiresIn: 90,
    });
    // Dentro do 'sign' passamos os dados que estaram no token e o "segredo" que ira gerar no código. O segredo pode ser qualquer string.
    // O 'expiresIn' faz com que o token espire de acordo com o tempo setado. O parametro é em segundos, 90 = 1min 30s

    console.log(token);
}

function validateToken() {
    const VerToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6IjE1IiwiVXNlck5hbWUiOiJqYW9AZ21haWwuY29tIiwiaWF0IjoxNjYyMzgxNDg2LCJleHAiOjE2NjIzODE1NzZ9.iVaNr1AL7-h8sYo7LiCI2zcENKqzRvaCDRfylf69ow4";

    const validData = jwt.verify(VerToken, secret);

    console.log(validData);
}

// generateToken();
// validateToken();
