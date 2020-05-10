// For hover on iOS
document.addEventListener("click", x=>0)

// Nav bar styling change on scroll
$(window).on("scroll", function() {
    if($(window).scrollTop() > 10) {
        $(".projects-header, .blog-header, .resume-header").addClass("active");
    } else {
        $(".projects-header, .blog-header, .resume-header").removeClass("active");
    }
});

// Whole-page menu on mobile
$(function() {
	$('.hamburger').click(function() {
		$('.menu').fadeIn('fast');
	});

	$('.exit-responsive').click(function() {
		$('.menu').fadeOut('fast')
	});
});

// Gradient background animation
const granimInstance = new Granim({
    element: '#canvas-basic',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#ddc784', '#e4b32e'],
                ['#e4b32e', '#ddc784']
            ],
            transitionSpeed: 2500
        }
    }
});

// Title type animation
new TypeIt(".type", {
    strings: `<h1>Hi, I'm <span>Claudia.</span></h1><h2>I'm a web developer.</h2>`,
    speed: 70,
    waitUntilVisible: true
}).go();