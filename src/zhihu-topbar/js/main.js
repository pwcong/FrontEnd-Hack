
var colorHex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 
    'a', 'b', 'c', 'd', 'e', 'f'];

function getRandomColor(){

    var color = "#";

    for(var i = 0; i < 6; i++){
        color += colorHex[Math.round(Math.random() * (colorHex.length -1))];
    }

    return color;

}

function initSection(){


    var article = document.getElementsByClassName("article")[0];

    for(var i = 0; i < 20; i++){

        var section = document.createElement("section");
        section.className = "section";

        section.innerHTML = "section " + i;
        section.style.backgroundColor = getRandomColor();

        article.appendChild(section);

    }

}

function initHeaderSearchBar(){

    var headerSearchBar = document.getElementsByClassName("header-searchbar")[0];
    var headerSearchBarInput = document.getElementById("header-searchbar-input");

    headerSearchBarInput.onfocus = function(e){
        headerSearchBar.className = "header-searchbar header-searchbar-active";
    }

    headerSearchBarInput.onblur = function(e){
        headerSearchBar.className = "header-searchbar";

    }
    

}

function initHeader(){

    var header = document.getElementsByClassName("header")[0];
    
    window.onscroll = function(e){

        if(document.body.scrollTop > 200){
            header.className = "header header-page";
        }else{
            header.className = "header";
        }
        

    }

}


function initView(){

    initHeader();
    initHeaderSearchBar();
    initSection();


}

function init(){
    initView();
}

init();
