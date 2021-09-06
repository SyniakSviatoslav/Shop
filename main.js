// document.addEventListener( 'DOMContentLoaded', function () {
//     new Splide( '.splide' ).mount();
// } );

document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '.splide', {
		perPage    : 3,
		breakpoints: {
			600: {
				perPage: 1,
			}
		}
	} ).mount();
} );