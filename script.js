// =================================
// 1.LÓGICA DA PÁGINA INICIAL (FAQ)
// =================================
const faqQuestions = document.querySelectorAll('.faq-question')

// Verifica se existem perguntas na página
//  antes de tentar adicionar o evento
//Se o "length" for maior que 0, significa que estamos na index.html
if (faqQuestions.length > 0) {
    faqQuestions.forEach(question => {
        question.addEventListener('click',() =>{
            const faqItem = question.parentElement;
            faqItem.classList.toggle('active');
        })
    })
}
// =================================
// 2.LÓGICA DA PÁGINA DE CADASTRO(Formulario)
// =================================
const formCadastro = document.getElementById('form-cadastro')

//Verifica se o formulário existe (ou seja, se estamos na cadastro.html)
if (formCadastro){
    formCadastro.addEventListener('submit',(evento) =>{
        //PREVINE O COMPORTAMENTO PADRÃO: evita que a página recarrege ao enviar
        //evento.preventDefault();
        //CAPTURA os Valores que o usuário digitou nos inputs
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;

        //Validação simples para garantir que nada está vazio
        if (nome !== "" && email !== "" && telefone !== ""){

            //EXIBE UM ALERTA SIMULANDO SUCESSO (Aqui ensinamos template strings com crase ``)
            alert(`cadastro realizado com sucesso"\n\nBem-vindo(a),${nome}!\nEnviamos as instruções para: ${email}`);
            //Limpa os campos do formulário após o "envio"
            formCadastro.reset()
        } else{
            alert('Por favor, preencha todos os campos!');
        }
    });
}