// Criar função de login para interagir com a página 

const usuário = document.querySelector('#usuario')
const senha = document.querySelector('#senha')

function login(){
  if(usuário.value == 'admin' && senha.value == 'admin'){
    alert('Login realizado com sucesso!')
  }else{
    alert('Usuário ou senha incorretos!')
  }
}
