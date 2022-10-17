var navegacion = `

        <img src="./Imagenes/Almao_versionG-removebg-preview.png" alt="logo" width="150px" height="150px">
            
        <nav class="nav">
        <button class="nav_toggle">
            <i class="fa-solid fa-bars"></i>
        </button>
        <ul class="nav_menu">
            <li class="nav_item">
                <a href="index.html" class="nav_link">Home</a>
            </li>
            <li class="nav_item">
                <a href="yoga.html" class="nav_link">Yoga</a>
            </li>
            <li class="nav_item">
                <a href="astrologia.html" class="nav_link">Astrología</a>
            </li>
            <li class="nav_item">
                <a href="nosotras.html" class="nav_link">Nosotras</a>
            </li>
            <li class="nav_item">
                <a href="contacto.html" class="nav_link">Contacto</a>
            </li>
        </ul>
    </nav>

`

document.getElementById("idheader").innerHTML = navegacion;

var piePagina = `

        <a class="redes" href="" target="_blank"><i class="fa-brands fa-twitter"></i></a>
        <a class="redes" href="" target="_blank"><i class="fa-brands fa-facebook"></i></a>
        <a class="redes" href="" target="_blank"><i class="fa-brands fa-instagram"></i></a>
        <a class="redes" href="" target="_blank"><i class="fa-brands fa-pinterest"></i></a>
        

        <p id ="tritech"> 2022 Tritech - Todos los derechos reservados </p>

`
document.getElementById("idfooter").innerHTML = piePagina;
