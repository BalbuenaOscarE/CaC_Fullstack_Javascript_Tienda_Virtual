const menu_expand = document.getElementById("menu_expand");

const menu_contract = document.getElementById("menu_contract");

const navbar_ul = document.getElementById("navbar_ul");

const item_1 = document.getElementById("item_1");

const item_2 = document.getElementById("item_2");

const item_3 = document.getElementById("item_3");

const item_4 = document.getElementById("item_4");



function disable_navbar(){

    navbar_ul.style.flexDirection = "column";
        
    item_1.style.display = "initial";
    
    item_1.style.width = "100%";
    
    item_2.style.display = "initial";
    
    item_2.style.width = "100%";
    
    item_3.style.display = "initial";
        
    item_3.style.width = "100%";
    
    item_4.style.display = "initial";
        
    item_4.style.width = "100%";

}

function enable_navbar(){

    navbar_ul.style.display = "flex";
        
    navbar_ul.style.flexDirection = "row";
        
    item_1.style.display = "none";
    
    item_1.style.width = "fit-content";
    
    item_2.style.display = "none";
    
    item_2.style.width = "fit-content";
    
    item_3.style.display = "none";
        
    item_3.style.width = "fit-content";
    
    item_4.style.display = "none";
        
    item_4.style.width = "fit-content";

}

function expand(){


    menu_contract.style.display = "initial";

    menu_expand.style.display = "none";

}

function contract(){

    menu_contract.style.display = "none";

    menu_expand.style.display = "initial";

}


menu_expand.addEventListener("click", ()=>{

    disable_navbar();

    expand();

})

menu_contract.addEventListener("click", ()=>{

    enable_navbar();

    contract();

})
