document.addEventListener("DOMContentLoaded", function(){

    el_autohide = document.querySelector('.autohide');
    
    // add padding-top to bady (if necessary)
    // navbar_height = document.querySelector('.navbar').offsetHeight;
  
    if(el_autohide){
      var last_scroll_top = 0;
      window.addEventListener('scroll', function() {
            let scroll_top = window.scrollY;
            var vscroll = document.body.scrollTop;

           if(scroll_top < last_scroll_top) {
                el_autohide.classList.remove('scrolled-down');
                el_autohide.classList.remove('navbar-transparent');
                el_autohide.classList.add('scrolled-up');
                if (scroll_top == vscroll) {
                    el_autohide.classList.add('navbar-transparent');
                    el_autohide.classList.add('scrolled-down');
                }
            }
            else {
                el_autohide.classList.remove('scrolled-up');
                el_autohide.classList.add('navbar-transparent');
                el_autohide.classList.add('scrolled-down');
            }
            last_scroll_top = scroll_top;


            
            
      }); 
      // window.addEventListener
    }
    // if
  
  }); 

  // call function from custum_css.css


