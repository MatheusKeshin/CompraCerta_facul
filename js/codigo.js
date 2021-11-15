//INICIO Validações da pagina cadastro
function valcad() {
    var campoNome = document.getElementById("idNomecad").value;
    var Cpf = document.getElementById("idCpf").value;
    var EmailCad = document.getElementById("idEmailCad").value;
    var senhaCad = document.getElementById("idSenhacad").value;
    var confirmacao = document.getElementById("confirmacao").value;
    var Tel = document.getElementById("idTel").value;
    var Ctext = document.getElementById("idEnd").value;
    
    //alert(numerosCPF(Cpf));
    
    if (Cpf.length != 14){
        alert('CPF vazio ou incompleto');
        idCpf.style.backgroundColor="#ff6459";   
    }
    else if (testaCPF(numerosCPF(Cpf)) == false){
        alert('CPF inválido!');}
        
    else {
        
        if (campoNome  == null || campoNome  == undefined || campoNome == ""){//testa campo nome
            alert('Campo Nome Completo está Vazio ou incompleto!');
            idNomecad.style.backgroundColor="#ff6459";
        }
       
        else if(EmailCad  == null || EmailCad  == undefined || EmailCad == ""){//testa campo email
            alert('Campo Email está Vazio!');
            idEmailCad.style.backgroundColor="#ff6459";
        }
        else if(senhaCad == null || senhaCad == undefined || senhaCad == "") {
            alert('Campo Senha está vazio!');
            idSenhacad.style.backgroundColor="#ff6459";   
        }
        else if(confirmacao == null || confirmacao == undefined || confirmacao == "") {
            alert('Campo Senha está vazio!');
            idSenhacad.style.backgroundColor="#ff6459";   
        }else    if(senhaCad!=confirmacao){
            alert("As senhas não conferem, por favor digite-as novamente.");
            return false;
        }
        else if(Tel  == null || Tel  == undefined || Tel == ""){//testa campo tell
            alert('Campo Telefone está Vazio!');
            idTel.style.backgroundColor="#ff6459";
        }
        else if(Ctext  == null || Ctext  == undefined || Ctext == ""){ //testa campo de endereço
            alert('Campo Endereço está Vazio!');
            idEnd.style.backgroundColor="#ff6459";
       }else{
            alert('Seu Cadastro foi efetuado, BEM VINDO '+campoNome+'😉')//mensagem de cadastro feito com sucesso!
        }
    }
}
//FIM Validações da pagina cadastro

//INICIO Validações da pagina login
function login() {
    var campologin = document.getElementById("idLogin").value;
    var campoSenha = document.getElementById("idSenha").value;
    
    if (campologin == null || campologin == undefined || campologin == ""){
        alert('Campo Email está Vazio!');
        idLogin.style.backgroundColor="#ff6459";
        return false;
    }else if(campoSenha == null || campoSenha == undefined || campoSenha == ""){
          alert('Campo Senha está Vazio!');
          idSenha.style.backgroundColor="#ff6459";
    }else{ alert('Bem vindo '+campologin+' 😉, Estavamos com saudades!')

    }
    
}
//INICIO Validações da pagina login


function add() {
    alert('Item adicionado ao carrinho!!');
}



function mascara(i){
   
   var v = i.value;
   
   if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
      i.value = v.substring(0, v.length-1);
      return;
   }
   
   i.setAttribute("maxlength", "14");
   if (v.length == 3 || v.length == 7) i.value += ".";
   if (v.length == 11) i.value += "-";

}


function numerosCPF(strCPF) {
    var numeros = strCPF.substring(0,3) + strCPF.substring(4,7) + strCPF.substring(8,11) + strCPF.substring(12,14);
    return numeros;
}

function testaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
  if (strCPF == "00000000000" || strCPF == "11111111111" || strCPF == "22222222222" || strCPF == "33333333333" ||
      strCPF == "44444444444" || strCPF == "55555555555" || strCPF == "66666666666" || strCPF == "77777777777" ||
      strCPF == "88888888888" || strCPF == "99999999999")
    return false;

  for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}
function confedit() {
    alert('Dados Editados e salvos com sucesso!')
}

function saida() {
    confirm('Você tem certeza de que quer sair?')
}

//botão de visibilidade aceitar fica invisivel e finalizar aparece
function butaceitar() {
    document.getElementById("butarefa").style.display = "none";
}

function ccompra(){
    confirm('o valor da compra será descontado no seu cartão, tem certeza que deseja confirmar a compra?')
    document.getElementById("conf").style.display = "none";
}