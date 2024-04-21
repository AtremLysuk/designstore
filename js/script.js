

const body  = document.body;
const burgerContainer = document.getElementById('burgerContainer') ;
const burgerButton = document.getElementById('burgerBtn');
const burgerButtonClose = document.getElementById('burgerButtonClose');

// BURGER MENU ==========

burgerButton.addEventListener('click', function(){
        burgerContainer.classList.toggle("rigthside-menu--close");  
})

burgerButtonClose.addEventListener('click', function (){
    burgerContainer.classList.toggle("rigthside-menu--close"); 

})

document.addEventListener('keydown', function(e){
    if (e.key == "Escape") {
        burgerContainer.classList.add("rigthside-menu--close");
    }
    
})
// ==================Burger2=========================

const burgerBtn2 = document.getElementById('burgerBtn2');
const menus = document.querySelectorAll('[data-menu]')

burgerBtn2.addEventListener('click', function () {
    menus.forEach((menu) =>{
        menu.classList.toggle('menu--open');
        if(!menu.classList.contains("menu--open")){
            return;
        } else {
            document.addEventListener('keydown', function(e){
                if (e.key == "Escape") {
                    menu.classList.remove("menu--open");
                }
            });

        };
    });
});




