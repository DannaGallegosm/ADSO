let menu = document.querySelector ("#tipos de animales")
let navegacion = document.querySelector (".navegacion")

menu.addEventListener("click", function(){
    navegacion.classmenu.toggle("active");
})

window.onscroll=()=> {
       navegacion.classmenu.remove("active")
}
