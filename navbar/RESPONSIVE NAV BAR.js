window.onload= function(){
    let btnContacto = document.getElementById("contact");
        btnContacto.addEventListener("click",contactUs);
        function contactUs(){
        alert("the website's currently in construction...we're sorry");
    }

    let boton = document.getElementById("btn");
    boton.addEventListener("click", addClass);

    function addClass(){
        let show = document.getElementById("cambio");
        show.classList.toggle("menuDespegable");
    }
}    