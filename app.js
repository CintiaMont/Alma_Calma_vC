var navegacion = `

<img src="imagenes/alma_calmav2.jpg-removebg-preview.png" alt="logo" width="102px" height="102px">
            
            <h2>Alma Calma</h2>
            
            <a class="boton" href="">Home</a>
            <a class="boton" href="yoga.html">Yoga</a>
            <a class = "boton" href="">Astrología</a>
            <a class="boton" href="nosotras.html">Nosotras</a>
            <a class="boton" href="contacto.html">Contacto</a>

`
//corresponde que vaya un target blank si no hacemos ningún link fuera de la página?
//la devenja de esto es que aparecen todos los botones en las páginas, salvo que generemos alguna lógica 

document.getElementById("idheader").innerHTML = navegacion;

var piePagina = `

<a class="redes" href="https://twitter.com/" target="_blank"><i class="fa-brands fa-twitter"></i></a>
        <a class="redes" href="https://www.facebook.com/login/" target="_blank"><i class="fa-brands fa-facebook"></i></a>
        <i class="fa-brands fa-instagram"></i>
        <a class="redes" href="https://ar.pinterest.com/" target="_blank"><i class="fa-brands fa-pinterest"></i></a>

        <p id ="tritech"> 2022 Tritech - Todos los derechos reservados </p>

`
document.getElementById("idfooter").innerHTML = piePagina;