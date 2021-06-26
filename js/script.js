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