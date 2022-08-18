<template>
  <div class="container">
    <div class="container_right">
      <div class="scrolling_menu">
        <nav>
          <ul>
            <div class="department">
              <li class="scrolling">
                <a href="#"
                  >Départements <i class="fa-solid fa-angle-down"></i
                ></a>
                <ul class="menu">
                  <li href="#"><a>01-Ain</a></li>
                  <li href="#"><a>02-Aisne</a></li>
                  <li href="#"><a>03-Allier</a></li>
                  <li href="#"><a>04-Alpes de Hautes-Provence</a></li>
                </ul>
              </li>
            </div>

            <div class="city">
              <li class="scrolling">
                <a href="#">Villes <i class="fa-solid fa-angle-down"></i></a>
                <ul class="menu">
                  <li href="#"><a>Bourg-en-Bresse</a></li>
                  <li href="#"><a>Laon</a></li>
                  <li href="#"><a>Moulins</a></li>
                  <li href="#"><a>Digne-les-Bains</a></li>
                </ul>
              </li>
            </div>

            <div class="category">
              <li class="scrolling">
                <a href="#"
                  >Catégories <i class="fa-solid fa-angle-down"></i
                ></a>
                <ul class="menu">
                  <li href="#"><a>Services</a></li>
                  <li href="#"><a>Matériels</a></li>
                </ul>
              </li>
            </div>
            <button href="#">Rechercher</button>
          </ul>
        </nav>
      </div>

      <div class="listing_ads">
        <div class="ads">
          <img href="#" src="https://picsum.photos/200" class="logo__image" alt="" />
          <a href="#" class="logo__text">annonce 1</a>
        </div>

        <div class="ads">
          <img href="#" src="https://picsum.photos/200" class="logo__image" alt="" />
          <a href="#" class="logo__text">annonce 2</a>
        </div>

        <div class="ads">
          <img href="#" src="https://picsum.photos/200" class="logo__image" alt="" />
          <a href="#" class="logo__text">annonce 3</a>
        </div>

        <div class="ads">
          <img href="#" src="https://picsum.photos/200" class="logo__image" alt="" />
          <a href="#" class="logo__text">annonce 4</a>
        </div>
      </div>
    </div>

    <div class="maps">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15620.631495143949!2d5.220893382718534!3d46.2032211805023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f3522d15689311%3A0xc2e1d69735f38afb!2s01000%20Bourg-en-Bresse!5e0!3m2!1sfr!2sfr!4v1660743160817!5m2!1sfr!2sfr"
        width="750"
        height="830"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>

<script>



</script>

<style lang="scss" scoped>
// Import des variables du site
@import "@/assets/scss/variables.scss";

// Import de la police du site
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.container {
  background-color:$backgroundcolor;
  display: flex;
  flex-direction: row-reverse;
  justify-content:flex-end
  
}

.container_right{

  width:100%;


}

// ----------------------------------- Maps ------------------------------------

.maps {
  margin: 10px;
  
  
}

// ----------------------------------- Navigation menu ----------------------------------------



nav {
  background-color:$backgroundcolor;
  width: 100%;
  margin: 0 auto;
  
}

nav ul {
  list-style-type: none;
}

nav ul li {
  float: left;
  width: 25%;
  text-align: center;
}

nav ul::after {
  content: "";
  display: table;
  clear: both;
}

nav a {
  display: block;
  text-decoration: none;
  color: black;
  border-bottom: 2px solid;
  padding: 10px 0px;
}

nav a:hover {
  color: black;
  border-bottom: 2px solid $tertiarycolor;
}

.menu {
  display: none;
  box-shadow: 0px 1px 2px #ccc;
  background-color: white;
}

nav > ul li:hover .menu {
  display: block;
}

.menu li {
  float: none;
  width: 100%;
  text-align: center;
}

.menu a {
  padding: 10px;
  border-bottom: none;
}

.menu a:hover {
  border-bottom: none;
  background-color: $tertiarycolor;
}

button {
  position: relative;
  top: -10px;
  background-color: $tertiarycolor;
  color: $fontcolor;
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-size: 0.8rem;
  cursor: pointer;
  margin: 10px;
}

// ----------------------------------- Ads ----------------------------------------

.listing_ads {
  display: grid;
  grid-template-columns: repeat(3, 300px);
  grid-template-rows: repeat(2, 300px);
  grid-column-gap: 100px;
  grid-row-gap: 50px;
  justify-content: center;
}


.ads{

  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;

}
</style>
