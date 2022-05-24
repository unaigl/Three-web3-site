gsap.registerPlugin(ScrollTrigger);

///
/// FUNCIONAMIENTO
///

// En el "start" y "end", el 1er valor (start-end) es respecto al "String | Element | Array[Element]" especificado, y el 2do valor (Scroller-start Scroller-end) es respecto al viewport

///
/// ANIMACION AUTOMATIZADA y ejecutada al hacer scroll
///

// movemos el elemento con la className ".c", utilizando "toggleActions", el movimiento y la duracion.
gsap.to('.c', {
	scrollTrigger: {
		trigger: '.c',
		start: 'top center',
		endTrigger: '.c',
		// end: "bottom center",
		// end: "+=300"
		end: () => '+=' + window.innerHeight / 5,
		// end: () => "+=" + window.document.querySelector(".c").offsetHeight,
		markers: true,
		toggleActions: 'play pause reverse pause',
	},
	x: 400,
	rotation: 360,
	duration: 5,
});
// Si quitamos "toggleActions", simplemente se ejecuta el movimiento en la duracion deseada (cuando el start del objeto y el viewport coincidan).

///
/// ANIMACION EN BASE AL SCROLL (respetando los "start" y "end")
///

//

gsap.registerPlugin(ScrollTrigger);

gsap.to('.c', {
	scrollTrigger: {
		trigger: '.c',
		start: '-100 center',
		endTrigger: '.c',
		end: () => '+=' + window.innerHeight / 3,
		markers: true,
		scrub: 2,
	},
	x: 400,
	rotation: 720,
});
