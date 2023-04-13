const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const sobrenomeInput = document.querySelector("#sobrenome");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");

// console.log(form, nameInput, sobrenomeInput, emailInput, passwordInput, jobSelect, messageTextarea);

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // VERIFICA SE O NOME ESTÁ VAZIO
    if (nameInput.value === "") {
        alert("Por favor, preencha o seu nome.")
        return;
    }

    // VERIFICA SE O SOBRENOME ESTÁ VAZIO
    if (sobrenomeInput.value === "") {
        alert("Por favor, preencha o seu sobrenome.")
        return;
    }

    // VERIFICA SE O E-MAIL ESTÁ VAZIO
    if (emailInput.value === "") {
        alert("Por favor, preencha o seu e-mail.")
        return;
    }

    // VERIFICA SE O E-MAIL ESTÁ NO PADRÃO
    function isEmailValid(email) {
        // CRIA UMA REGEX PARA VALIDAR E-MAIL
        const emailRegex = new RegExp(
            /^[a-zA-Z0-9._-]+@[[a-zA-Z0-9._-]+\.[a-z]{2,}$/
        );

        if (emailRegex.test(email)) {
            return true;
        }

        return false;
    }

    if (!isEmailValid(emailInput.value)) {
        alert("Por favor, preencha o seu e-mail corretamente.")
        return;
    }

    // VERIFICA SE A SENHA ESTÁ VAZIA
    if (passwordInput.value === "") {
        alert("Por favor, preencha a sua senha.")
        return;
    }

    // VERIFICA SE A SENHA ESTÁ NO PADRÃO
    function validatePassword(password, minDigits) {
        if (password.length >= minDigits) {
            // SENHA VÁLIDA
            return true;
        }

        // SENHA INVÁLIDA
        return false;
    }

    if (!validatePassword(passwordInput.value, 8)) {
        alert("A senha precisa ter no mínimo 8 caracteres.")
        return;
    }

    // VERIFICA SE A SITUAÇÃO ESTÁ VAZIA
    if (jobSelect.value === "") {
        alert("Por favor, selecione a sua situação.")
        return;
    }

    // SÓ MOSTRA A OPÇÃO DE PROFISSÃO SE A SITUAÇÃO FOR "SIM"
    // VERIFICA SE A OPÇÃO DE PROFISSÃO ESTÁ VAZIA

    // VERIFICA SE A MENSAGEM ESTÁ VAZIA
    if (messageTextarea.value === "") {
        alert("Por favor, preencha a mensagem.")
        return;
    }

    // SE TODOS OS CAMPOS ESTIVEREM CORRETAMENTE PREENCHIDOS, ENVIE O FORM
    form.submit();
});