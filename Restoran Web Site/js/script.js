/* searche ulaşma */
const searchForm = document.querySelector(".search-form");
/* cart ıtems containere ulaşma */
const cartItem = document.querySelector(".cart-items-container");
/* menu ye tıklantığında navbara ulaşma */
const navbar = document.querySelector(".navbar");

/* search buttona ulaşma */
const searchBtn = document.querySelector("#search-btn");
/* cart buttona ulaşma */
const cartBtn = document.querySelector("#cart-btn");
/* navbara ulaşma butonu */
const menuBtn = document.querySelector("#menu-btn");



/* search için */
searchBtn.addEventListener("click",function(){       /* search butonuna tıkladığımda açılsın active olsun */
    searchForm.classList.toggle("active")
    document.addEventListener("click",function(e){
        if(                                             /* boşluğuda tıkladığımızda active olan search kapansın*/
            !e.composedPath().includes(searchBtn) &&   !e.composedPath().includes(searchForm)
        ){
            searchForm.classList.remove("active");

        }   
            
    });


});


/* cart için  */

cartBtn.addEventListener("click",function(){      
    cartItem.classList.toggle("active")
    document.addEventListener("click",function(e){
        if(                                             
            !e.composedPath().includes(cartBtn) &&   !e.composedPath().includes(cartItem)
        ){
            cartItem.classList.remove("active");

        }   
            
    });


});

/* navbar açılması için */

menuBtn.addEventListener("click",function(){      
    navbar.classList.toggle("active")
    document.addEventListener("click",function(e){
        if(                                             
            !e.composedPath().includes(menuBtn) &&   !e.composedPath().includes(navbar)
        ){
            navbar.classList.remove("active");

        }   
            
    });


});


