<template>
  <div class="container">
    <div class="container_right">
      <div class="scrolling_menu">
        <nav>
          <div class="container-nav">
            <label for="mobile"
              >Recherche <font-awesome-icon icon="fa-solid fa-chevron-down"
            /></label>

            <input type="checkbox" id="mobile" role="button" />
            <ul>
              <li class="scrolling">
                <a href="#"
                  >Départements &ensp;<font-awesome-icon
                    icon="fa-solid fa-chevron-down"
                /></a>
                <ul class="menu">
                  <li><a href="#">01-Ain</a></li>
                  <li><a href="#">02-Aisne</a></li>
                  <li><a href="#">03-Allier</a></li>
                  <li><a href="#">04-Alpes de Hautes-Provence</a></li>
                </ul>
              </li>
              <li class="scrolling">
                <a href="#"
                  >Villes &ensp;<font-awesome-icon
                    icon="fa-solid fa-chevron-down"
                /></a>
                <ul class="menu">
                  <li><a href="#">Bourg-en-Bresse</a></li>
                  <li><a href="#">Laon</a></li>
                  <li><a href="#">Moulins</a></li>
                  <li><a href="#">Digne-les-Bains</a></li>
                </ul>
              </li>
              <li class="scrolling">
                <a href="#"
                  >Catégories &ensp;<font-awesome-icon
                    icon="fa-solid fa-chevron-down"
                /></a>
                <ul class="menu">
                  <li><a href="#">Service</a></li>
                  <li><a href="#">Matériels</a></li>
                </ul>
              </li>
              <div class="btn">
                <button class="btn-nav" href="#">
                  Recherche
                  <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                </button>
              </div>
            </ul>
          </div>
        </nav>
      </div>

      <div class="listing_ads">
        <div class="ads">
          <img
            href="#"
            src="https://picsum.photos/200"
            class="logo__image"
            alt=""
          />
          <p href="#" class="logo__text">annonce 1</p>
        </div>

        <div class="ads">
          <img
            href="#"
            src="https://picsum.photos/200"
            class="logo__image"
            alt=""
          />
          <p href="#" class="logo__text">annonce 2</p>
        </div>

        <div class="ads">
          <img
            href="#"
            src="https://picsum.photos/200"
            class="logo__image"
            alt=""
          />
          <p href="#" class="logo__text">annonce 3</p>
        </div>

        <div class="ads">
          <img
            href="#"
            src="https://picsum.photos/200"
            class="logo__image"
            alt=""
          />
          <p href="#" class="logo__text">annonce 4</p>
        </div>

        <div class="ads">
          <img
            href="#"
            src="https://picsum.photos/200"
            class="logo__image"
            alt=""
          />
          <p href="#" class="logo__text">annonce 5</p>
        </div>

        <div class="ads">
          <img
            href="#"
            src="https://picsum.photos/200"
            class="logo__image"
            alt=""
          />
          <p href="#" class="logo__text">annonce 6</p>
        </div>

        <div class="ads">
          <img
            href="#"
            src="https://picsum.photos/200"
            class="logo__image"
            alt=""
          />
          <p href="#" class="logo__text">annonce 7</p>
        </div>

        <div class="ads">
          <img
            href="#"
            src="https://picsum.photos/200"
            class="logo__image"
            alt=""
          />
          <p href="#" class="logo__text">annonce 8</p>
        </div>

        <div class="ads">
          <img
            href="#"
            src="https://picsum.photos/200"
            class="logo__image"
            alt=""
          />
          <p href="#" class="logo__text">annonce 9</p>
        </div>

        <div class="ads">
          <img
            href="#"
            src="https://picsum.photos/200"
            class="logo__image"
            alt=""
          />
          <p href="#" class="logo__text">annonce 10</p>
        </div>

        <div class="ads">
          <img
            href="#"
            src="https://picsum.photos/200"
            class="logo__image"
            alt=""
          />
          <p href="#" class="logo__text">annonce 11</p>
        </div>

        <div class="ads">
          <img
            href="#"
            src="https://picsum.photos/200"
            class="logo__image"
            alt=""
          />
          <p href="#" class="logo__text">annonce 12</p>
        </div>
      </div>
    </div>

    <div class="maps">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15620.631495143949!2d5.220893382718534!3d46.2032211805023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f3522d15689311%3A0xc2e1d69735f38afb!2s01000%20Bourg-en-Bresse!5e0!3m2!1sfr!2sfr!4v1660743160817!5m2!1sfr!2sfr"
        width="750"
        height="1050"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
// Import des variables du site
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/media_queries.scss";

// Import de la police du site
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.container {
  background-color: $tertiaryColor;
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
}

// ----------------------------------- Navigation menu tablet et phone----------------------------------------

nav {
  width: 100%;
  margin: 0 auto;
  background-color: white;
  position: sticky;
  top: 0px;
}
nav input[type="checkbox"] {
  display: none;
}
nav label {
  display: inline-block;
  width: 100%;
  padding: 10px 0px;
  text-align: center;
  background-color: $backgroundColor;
  color: white;
  font-weight: bold;
  font-size: 1.5em;
}
nav ul {
  display: none;
  list-style-type: none;
  background-color: $tertiaryColor;
  padding-bottom: 10px;
}
nav input[type="checkbox"]:checked + ul {
  display: flex;
  flex-flow: column wrap;
}
nav ul li {
  flex: 1 1 auto;
  text-align: center;
}
nav > div > ul > li > a {
  color: white;
  font-weight: bold;
  background-color: $primaryColor;
}
nav a {
  display: block;
  text-decoration: none;
  color: black;
  padding: 10px 0px;
}
.menu {
  display: flex;
  flex-flow: column wrap;
  z-index: 1000;
}

.menu li:hover {
  flex: 1 1 auto;
  text-align: center;
}
.menu a:hover {
  padding: 10px;
  background-color: $secondaryColor;
}

// ----------------------------------- Navigation Desktop----------------------------------------

.scrolling_menu {
  margin: 70px 30px;
}

@media screen and (min-width: 980px) {
  .conteneur-nav {
    position: static;
  }
  nav label,
  nav input {
    display: none;
  }
  nav input[type="checkbox"]:checked + ul,
  nav ul {
    display: flex;
    flex-flow: row wrap;
  }
  nav ul li {
    position: relative;
  }
  nav > div > ul > li > a {
    color: white; //////////
    font-weight: bold;
    font-size: 20px;
  }

  nav a {
    border-bottom: 2px solid transparent;
    border-radius: 50px;

    .fa-chevron-down {
      margin-left: 10px;
    }
  }

  nav a:hover {
    border-bottom: 2px solid $primaryColor;
  }
  .menu {
    display: none;
    box-shadow: 0px 1px 2px #ccc;
    background-color: white; //////////
    position: absolute;
    width: 100%;
    padding-top: 10px;
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;
    border-bottom-left-radius: 1em;
    border-bottom-right-radius: 1em;
  }
  nav > div > ul li:hover .menu {
    display: flex;
    flex-flow: column wrap;
  }
  .menu a {
    border-bottom: none;
    background-color: white; //////////////
  }
  .menu a:hover {
    border-bottom: none;
    background-color: $secondaryColor;
  }

  button {
    width: 200px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    margin-left: 10px;
    height: 2.5em;
    text-align: center;

    border-radius: 50px;
    box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);
    border: none;
    outline: none;
    background-image: linear-gradient(
      to right,
      #0ba360,
      #3cba92,
      #30dd8a,
      #2bb673
    );
  }
}

.conteneur-contenu {
  margin: 50px 20px;
  height: 1500px;
}

.container_right {
  width: 100%;
}

// ----------------------------------- Maps ------------------------------------

.maps {
  border: solid 5px grey;
  margin: 10px;
}

// ----------------------------------- Ads ----------------------------------------

.listing_ads {
  margin: 100px 15px;
  display: grid;
  grid-template-columns: repeat(3, 300px);
  grid-template-rows: repeat(4, 300px);
  grid-column-gap: 100px;
  grid-row-gap: 50px;
  justify-content: center;

  padding-top: 20px;
  background-color: $secondaryColor;
  height: 700px;
  overflow: scroll;
  border-radius: 20px;
  border: solid 2px grey;
}

.ads {
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  border: solid 3px grey;

  p {
    background-color: $tertiaryColor;
    padding: 10px;
  }
}

// ----------------------------------- Media queries ---------------------------------------

// Tablet

@media (min-width: $mediaSmartphone) and (max-width: $mediaTablet) {
  .container {
    display: flex;
    flex-direction: column-reverse;
  }

  .listing_ads {
    margin: 100px 15px;
    display: grid;
    grid-template-columns: repeat(2, 300px);
    grid-template-rows: repeat(2, 300px);
    grid-column-gap: 100px;
    grid-row-gap: 50px;
    justify-content: center;
    overflow: auto;
  }

  button {
    border-radius: 50px;
    width: 200px;
    height: 30px;
    margin-top: 20px;
    font-size: 20px;
    font-weight: bold;
    background-image: linear-gradient(
      to right,
      #0ba360,
      #3cba92,
      #30dd8a,
      #2bb673
    );
    border: none;
    outline: none;
    cursor: pointer;
  }

  nav > div > ul > li > a {
    .fa-chevron-down {
      display: none;
    }
  }
  nav > div > ul {
    border: solid 1px black;
  }

  .container-nav {
    .fa-chevron-down {
      margin-left: 10px;
    }
  }
}

// Smartphone

@media (max-width: $mediaSmartphone) {
  .container {
    display: flex;
    flex-direction: column-reverse;
  }

  .maps {
    display: none;
  }

  .listing_ads {
    margin: 100px 15px;
    display: grid;
    grid-template-columns: repeat(1, 300px);
    grid-template-rows: repeat(1, 300px);
    grid-column-gap: 100px;
    grid-row-gap: 50px;
    justify-content: center;
    overflow: overlay;
  }

  button {
    background-color: red;
    border-radius: 50px;
    width: 200px;
    height: 30px;
    margin-top: 20px;
    font-size: 20px;
    font-weight: bold;
    background-image: linear-gradient(
      to right,
      #0ba360,
      #3cba92,
      #30dd8a,
      #2bb673
    );
    border: none;
    outline: none;
    cursor: pointer;
  }

  nav > div > ul > li > a {
    .fa-chevron-down {
      display: none;
    }
  }
}
</style>
