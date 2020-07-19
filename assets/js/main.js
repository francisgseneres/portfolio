$(window).on('load', function() {
	$(window).on('scroll', function(e) {
		var scrolltotop = $(window).scrollTop();
		if (scrolltotop > 100) {
			$('.navbar').addClass('navfix-animate');
		} else {
			$('.navbar').removeClass('navfix-animate');
		}
	});
});

const navSlide = () => {
	const navToggle = document.querySelector('.navbar-toggle');
	const navMobile = document.querySelector('.nav-mobile');
	const navLinks = document.querySelectorAll('.nav-mobile li');

	navToggle.addEventListener('click', () => {
		navMobile.classList.toggle('nav-active');
	
		navLinks.forEach((link, index) => {
			if(link.style.animation) {
				link.style.animation = '';
			} else {
				link.style.animation = `navAnimate .5s ease forwards ${index / 7 + .3}s`;
			}
		});
		navToggle.classList.toggle('open');
	});
}
navSlide();

AOS.init({
	duration: 2000		
});