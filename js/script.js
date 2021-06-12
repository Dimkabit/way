const btn = document.getElementById('btn');

btn.onclick = (e) => {
	e.preventDefault();
	const text = document.querySelector('.offer-text');
	text.classList.add('red');
	const img = document.querySelector('.image-header');
	img.style.display = 'none';
}

/*Animate with scroll */
$(function () {
	$(window).scroll(function() {
		$('.second').each(function(){
			 var imagePos = $(this).offset().top;

			 var topOfWindow = $(window).scrollTop();
			 if (imagePos < topOfWindow+650) {
				  $(this).addClass("fadeInUp");
			 }
		});
  });
  
	$(window).scroll(function() {
	    $('.third').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInRight");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.first').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInLeft");
	        }
	    });
	});

	$(window).scroll(function() {
		$('.flapin').each(function(){
			 var imagePos = $(this).offset().top;

			 var topOfWindow = $(window).scrollTop();
			 if (imagePos < topOfWindow+1000) {
				  $(this).addClass("fadeInRightBig");
			 }
		});
  });

})

