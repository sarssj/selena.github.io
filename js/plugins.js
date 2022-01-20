// For preloader

    $(window).load(function()
     {  
    $('.overlay .spinner').fadeOut(3000,function()
     {
        $(this).parent().fadeOut(1500,function()
        {
            $(this).remove();
        });
    });
   });

// For Navbar

 var  nav = document.getElementById('nav');   
      window.onscroll = function(){
        if (window.pageYOffset >500) {
            nav.style.background = "black";
            nav.style.boxShadow = "0px 4px 2px rgba(0, 0, 0, 0.7)";
        }
        else{
            nav.style.background = "transparent";
            nav.style.boxShadow = "none";
        }
      }
    
// Jquery scroll fadeout 

$(window).scroll(function() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop < 130) {
            $('div.women_texts.active').removeClass('active').stop(true, true).fadeIn();
      }
      else {
            $('div.women_texts').addClass('active').stop(true, true).fadeOut();
      }
});



// portfolio isotope


jQuery(document).ready(function($){
    $(".projects").isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows',
    });
    
    $('ul.filters li').click(function(){ 
        
      $("ul.filters li").removeClass("active");
      $(this).addClass("active");        

        var selector = $(this).attr('data-filter'); 
        $(".projects").isotope({ 
            filter: selector, 
            animationOptions: { 
                duration: 750, 
                easing: 'linear', 
                queue: false, 
            } 
        }); 
      return false; 
    }); 
    
});





















