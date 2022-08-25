<template>
  <section>
    <h1>Créer une annonce</h1>

    <form>
      <div class="form-group">
        <label for="message"></label>
        <textarea
          id="message1"
          name="message"
          placeholder="Titre de l'annonce"
          required
        ></textarea>
      </div>

      <div class="form-group">
        <label class="desc"></label>
        <label for="message"></label>
        <textarea
          id="message2"
          name="message"
          placeholder="Description de l'annonce"
          required
        ></textarea>
      </div>
    </form>
    <nav>
      <ul>
        <li class="deroulant_1">
          <a href="#"
            >Types <font-awesome-icon icon="fa-solid fa-angle-down"
          /></a>
          <ul class="sous">
            <li><a href="#">Graphisme</a></li>
            <li><a href="#">Web & App</a></li>
            <li><a href="#">Marketing</a></li>
          </ul>
        </li>
        <li class="deroulant_2">
          <a href="#"
            >Catégories <font-awesome-icon icon="fa-solid fa-angle-down"
          /></a>
          <ul class="sous">
            <li><a href="#">SpaceX</a></li>
            <li><a href="#">Codeur.com</a></li>
          </ul>
        </li>
      </ul>
    </nav>
    <div class="loading_picture">
      <label for="picture">Choisir une image : </label>
      <input
        type="file"
        id="picture"
        name="picture"
        accept="image/png, image/jpeg"
      />
    </div>

    <div class="cgu">
      <input type="checkbox" name="checkbox" id="checkbox" /><label
        >J'accepte que mes coordonnées soient transmises pour me
        contacter</label
      >
    </div>
    <button type="submit" class="form-button">Publier</button>
  </section>
</template>

<scipte>
</scipte>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/media_queries.scss";

section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  background: $tertiaryColor;
  color: $primaryColor;

  h1 {
    font-size: 2.5em;
    color: $primaryColor;
    font-weight: bold;
    text-transform: uppercase;
    background: linear-gradient(
        to top,
        #30dd8a,
        #30dd8a 0.5em,
        transparent 0.5em
      )
      no-repeat;
  }
  form {
    margin: 40px 0 20px 0;
    width: 100%;
    #message1 {
      width: 80%;
      margin-bottom: 20px;
    }
    #message2 {
      height: 150px;
      width: 80%;
    }
  }

  nav {
    width: 100%;
    background: $tertiaryColor;
    margin-top: 30px;

    ul {
      &::after {
        content: "";
        display: table;
        clear: both;
      }
    }
    .deroulant_1 {
      border: solid 2px black;
      border-radius: 10px;
      margin-right: 10px;
      margin-left: 25%;
    }
    .deroulant_2 {
      border: solid 2px black;
      border-radius: 10px;
      margin-left: 10px;
    }
    li {
      float: left;
      width: 100%;
      width: 23%;
      text-align: center;
      position: relative;
    }

    a {
      display: block;
      text-decoration: none;
      color: black;
      border-bottom: 2px solid transparent;
      padding: 10px 0px;

      &:hover {
        color: grey;
      }
    }
  }
  nav > ul li:hover .sous {
    display: block;
  }

  .sous {
    display: none;
    box-shadow: 0px 1px 2px #ccc;
    background-color: white;
    position: absolute;
    width: 100%;
    z-index: 1000;

    li {
      float: none;
      width: 100%;
      text-align: left;
    }
    a {
      padding: 10px;
      border-bottom: none;
      &:hover {
        border-bottom: none;
        border-bottom: 2px solid grey;
      }
    }
  }

  .loading_picture {
    padding: 100px 0 100px 0;
    label {
      font-size: 20px;
    }
    input {
      font-size: 15px;
    }
  }
  button {
    width: 12.5em;
    font-size: 1em;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
    margin: 0.9375em;
    height: 3em;
    text-align: center;
    border: none;
    background-size: 300% 100%;

    border-radius: 50px;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }

  button:hover {
    background-position: 100% 0;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }

  button:focus {
    outline: none;
  }

  .form-button {
    background-image: linear-gradient(
      to right,
      #0ba360,
      #3cba92,
      #30dd8a,
      #2bb673
    );
    box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);
  }

  .cgu {
    display: flex;
    align-items: center;
    margin-top: 1em;
    margin-bottom: 1em;
    font-size: 1.1em;
    font-weight: bold;
    color: $primaryColor;
    text-align: center;
  }
}
// Tablet 
@media (min-width: $mediaSmartphone) and (max-width: $mediaTablet) {
  section{

    width: 100%;
  }
}
// Smartphone
@media (max-width: $mediaSmartphone) {
  section {
    width: 100%;

    h1 {
      font-size: 2em;
    }
    ul{
      position: relative;
      right: 20px;
    }
    
    .deroulant_2 {
      width: 30%;
    }
  }
}
</style>
