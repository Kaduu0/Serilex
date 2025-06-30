const form = document.getElementById('formContato');
const btnLimpar = document.getElementById('btnLimpar');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = form.nome.value;
    const email = form.email.value;
    const mensagem = form.mensagem.value;

    console.log("Nome:", nome);
    console.log("Email:", email);
    console.log("Mensagem:", mensagem);

    alert('Mensagem enviada com sucesso!');
    form.reset();
});

btnLimpar.addEventListener('click', function () {
    form.reset();
});