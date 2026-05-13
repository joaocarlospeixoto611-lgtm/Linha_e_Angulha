/*
const FormLogin = document.getElementById('form-login');
const FormCadastro = document.getElementById('form-cadastro');

if (FormLogin) {
    FormLogin.addEventListener('submit', function (event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        if (!email.includes('@')) {
            alert('Por favor, insira um email válido.');
            return;
        }
            else {
                alert('Email válido. Verificando senha...');
            }
                else {
                    alert('Email ou senha incorretos. Tente novamente.');
                }
        const senha = document.getElementById('senha').value;
        if (senha.length < 8) {
            alert('A senha deve conter pelo menos 8 caracteres.');
            return;
        }
            else {
                alert('Login bem-sucedido!');
                window.location.href = 'index.html';
            }
                else {
                    alert('Email ou senha incorretos. Tente novamente.');
                }
        

    });
}

if (FormCadastro) {
    FormCadastro.addEventListener('submit', function (event) {
        event.preventDefault();
        const primeiroNome = document.getElementById('primeiro-nome').value;
        const sobrenome = document.getElementById('sobrenome').value;
        const email = document.getElementById('email-cadastro').value;
        const senha = document.getElementById('senha-cadastro').value;
    }   );
}
 const usuarios = {
    nome: document.getElementById('nome').value,
    sobrenome: document.getElementById('sobrenome').value,
    email: document.getElementById('email-cadastro').value,
    senha: document.getElementById('senha-cadastro').value
    ddd: document.getElementById('ddd').value,
    telefone: document.getElementById('telefone').value
    areaendereco: document.getElementById('area-endereco').value,
     cep: document.getElementById('cep').value,
     logradouro: document.getElementById('logradouro').value,
     numero: document.getElementById('numero').value,
     complemento: document.getElementById('complemento').value,
     cidade: document.getElementById('cidade').value,
     cep: document.getElementById('cep').value
     areadadosdados: document.getElementById('area-dados').value,
     cpf: document.getElementById('cpf').value,
     dataNascimento: document.getElementById('data-nascimento').value
     genero: document.getElementById('genero').value
 }

 localStorage.setItem('usuariosCadastro', JSON.stringify(usuarios));
 alert('Cadastro realizado com sucesso!');
 window.location.href = 'login.html';

 // parte do login
 const emailLogin = document.getElementById('email').value;
 const senhaLogin = document.getElementById('senha').value;
    const usuariosCadastrados = JSON.parse(localStorage.getItem('usuariosCadastro'));
    if (usuariosCadastrados && emailLogin === usuariosCadastrados.email && senhaLogin === usuariosCadastrados.senha) {
        alert('Login bem-sucedido!');
        window.location.href = 'index.html';
    } else {
        alert('Email ou senha incorretos. Tente novamente.');
    }
const nomeUsuario = prompt("Digite seu nome de usuário:");
if (nomeUsuario) {
    alert("Bem-vindo, " + nomeUsuario + "! Você está aprendendo JavaScript.");
}   
else {
    alert("Por favor, digite um nome de usuário válido.");
}
const senhaUsuario = prompt("Digite sua senha:");
if (senhaUsuario) {
    alert("Senha recebida. Você está aprendendo JavaScript.");
}
else {
    alert("Por favor, digite uma senha válida.");
}
const idadeUsuario = prompt("Digite sua idade:");
if (idadeUsuario) {
    alert("Idade recebida. Você está aprendendo JavaScript.");
}
else {
    alert("Por favor, digite uma idade válida.");
}   
const emailUsuario = prompt("Digite seu email:");
if (emailUsuario) {
    alert("Email recebido. Você está aprendendo JavaScript.");
}
else {
    alert("Por favor, digite um email válido.");
}
const cidadeUsuario = prompt("Digite sua cidade:");
if (cidadeUsuario) {
    alert("Cidade recebida. Você está aprendendo JavaScript.");
}
else {
    alert("Por favor, digite uma cidade válida.");
}

const estadoUsuario = prompt("Digite seu estado:");
if (estadoUsuario) {
    alert("Estado recebido. Você está aprendendo JavaScript.");
}
else {
    alert("Por favor, digite um estado válido.");
}
const paisUsuario = prompt("Digite seu país:");
if (paisUsuario) {
    alert("País recebido. Você está aprendendo JavaScript.");
}
else {
    alert("Por favor, digite um país válido.");
}
const profissaoUsuario = prompt("Digite sua profissão:");
if (profissaoUsuario) {
    alert("Profissão recebida. Você está aprendendo JavaScript.");  
}
else {
    alert("Por favor, digite uma profissão válida.");   
}
*/