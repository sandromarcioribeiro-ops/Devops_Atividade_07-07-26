const formulario = document.querySelector("form");

const nome = document.getElementById("nome");
const matricula = document.getElementById("matricula");
const turma = document.getElementById("turma");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const dataNascimento = document.getElementById("data-nascimento");
const endereco = document.getElementById("endereco");
const observacoes = document.getElementById("observacoes");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  if (nome.value.trim() === "") {
    alert("Por favor, preencha o nome completo do aluno.");
    nome.focus();
    return;
  }

  if (matricula.value.trim() === "") {
    alert("Por favor, preencha a matrícula do aluno.");
    matricula.focus();
    return;
  }

  if (turma.value.trim() === "") {
    alert("Por favor, preencha a turma do aluno.");
    turma.focus();
    return;
  }

  if (email.value.trim() !== "" && !validarEmail(email.value)) {
    alert("Por favor, digite um e-mail válido.");
    email.focus();
    return;
  }

  if (dataNascimento.value !== "") {
    const nascimento = new Date(dataNascimento.value);
    const hoje = new Date();

    if (nascimento > hoje) {
      alert("A data de nascimento não pode ser uma data futura.");
      dataNascimento.focus();
      return;
    }
  }

  const aluno = {
    nome: nome.value.trim(),
    matricula: matricula.value.trim(),
    turma: turma.value.trim(),
    email: email.value.trim(),
    telefone: telefone.value.trim(),
    dataNascimento: dataNascimento.value,
    endereco: endereco.value.trim(),
    observacoes: observacoes.value.trim()
  };

  console.log("Dados do aluno:", aluno);
  alert("Aluno cadastrado com sucesso!");
  formulario.reset();
});

formulario.addEventListener("reset", function (evento) {
  const confirmar = confirm("Deseja realmente limpar todos os campos?");

  if (!confirmar) {
    evento.preventDefault();
  }
});

function validarEmail(email) {
  const padraoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return padraoEmail.test(email);
}