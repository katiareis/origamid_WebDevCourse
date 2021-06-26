// Slide para os quotes - Portfólio
if (window.SimpleSlide) {

	new SimpleSlide({
		slide: "quote", // nome do atributo data-slide="principal"
        auto: true, // o slide deve passar automaticamente
		time: 5000 // tempo de transição dos slides em milissegundos = 5s
	});

	new SimpleSlide({
		slide: "portfolio",
		time: 5000,
		nav: true
	});

}
// Animação de entrada - Geral
if (window.SimpleAnime) {
	new SimpleAnime();
}

// Envio de formulário
if(window.SimpleForm) {
	new SimpleForm({
	  form: ".form_php", // seletor do formulário
	  button: "#enviar", // seletor do botão
	  erro: "<div id='form-erro'><h2>Erro no envio!</h2><p>Um erro ocorreu, tente para o email contato@bikcraft.com.</p></div>", // mensagem de erro
	  sucesso: "<div id='form-sucesso'><h2>Formulário enviado com sucesso</h2><p>Em breve eu entro em contato com você.</p></div>", // mensagem de sucesso
	});
}