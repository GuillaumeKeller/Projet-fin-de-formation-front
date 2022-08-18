<template>
  <div class="home">
    <div class="intro">
      <img src="../assets/img/mesvoisins_logo.png" alt="" />
      <p>
        <strong>Mes voisins</strong> est un site de mise en relation entre voisins proches. Par exemple d'un meme quartier, d'une meme ville, etc. C'est une plateforme
        d'entraide destinée à échanger des biens ou des services entre les membres de la communauté. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut ab animi
        libero, eum fugit magni fugiat minima, velit vitae incidunt sint obcaecati alias fuga distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
        ab exercitationem repellat laboriosam delectus accusamus quia deserunt repudiandae voluptas, sint reiciendis, ducimus libero quis doloremque?
      </p>
    </div>
    <section>
    <div class="container">
      <h2>Nos dernières annonces</h2>
        <div class="carousel">
            <input type="radio" name="slides" checked="checked" id="slide-1">
            <input type="radio" name="slides" id="slide-2">
            <input type="radio" name="slides" id="slide-3">
            <input type="radio" name="slides" id="slide-4">
            <input type="radio" name="slides" id="slide-5">
            <input type="radio" name="slides" id="slide-6">
            <ul class="carousel__slides">
                <li class="carousel__slide">
                    <figure>
                        <div>
                            <img src="https://picsum.photos/id/1041/800/450" alt="">
                        </div>
                        <figcaption>
                            <span class="ad__info">Auteur:</span>
                            <span class="ad__info">Type :</span>
                            <span class="ad__info">Catégorie :</span>
                            <span class="ad__info">Date :</span>                            
                            <p class="ad__description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </figcaption>
                    </figure>
                </li>
                <li class="carousel__slide">
                    <figure>
                        <div>
                            <img src="https://picsum.photos/id/1043/800/450" alt="">
                        </div>
                        <figcaption>
                            <span class="ad__info">Auteur:</span>
                            <span class="ad__info">Type :</span>
                            <span class="ad__info">Catégorie :</span>
                            <span class="ad__info">Date :</span>                            
                            <p class="ad__description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </figcaption>
                    </figure>
                </li>
                <li class="carousel__slide">
                    <figure>
                        <div>
                            <img src="https://picsum.photos/id/1044/800/450" alt="">
                        </div>
                        <figcaption>
                            <span class="ad__info">Auteur:</span>
                            <span class="ad__info">Type :</span>
                            <span class="ad__info">Catégorie :</span>
                            <span class="ad__info">Date :</span>                            
                            <p class="ad__description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </figcaption>
                    </figure>
                </li>
                <li class="carousel__slide">
                    <figure>
                        <div>
                            <img src="https://picsum.photos/id/1045/800/450" alt="">
                        </div>
                        <figcaption>
                            <span class="ad__info">Auteur:</span>
                            <span class="ad__info">Type :</span>
                            <span class="ad__info">Catégorie :</span>
                            <span class="ad__info">Date :</span>                            
                            <p class="ad__description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </figcaption>
                    </figure>
                </li>
                <li class="carousel__slide">
                    <figure>
                        <div>
                            <img src="https://picsum.photos/id/1049/800/450" alt="">
                        </div>
                        <figcaption>
                            <span class="ad__info">Auteur:</span>
                            <span class="ad__info">Type :</span>
                            <span class="ad__info">Catégorie :</span>
                            <span class="ad__info">Date :</span>                            
                            <p class="ad__description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </figcaption>
                    </figure>
                </li>
                <li class="carousel__slide">
                    <figure>
                        <div>
                            <img src="https://picsum.photos/id/1052/800/450" alt="">
                        </div>
                        <figcaption>
                            <span class="ad__info">Auteur:</span>
                            <span class="ad__info">Type :</span>
                            <span class="ad__info">Catégorie :</span>
                            <span class="ad__info">Date :</span>                            
                            <p class="ad__description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </figcaption>
                    </figure>
                </li>
            </ul>    
            <ul class="carousel__thumbnails">
                <li>
                    <label for="slide-1"><img src="https://picsum.photos/id/1041/150/150" alt=""></label>
                </li>
                <li>
                    <label for="slide-2"><img src="https://picsum.photos/id/1043/150/150" alt=""></label>
                </li>
                <li>
                    <label for="slide-3"><img src="https://picsum.photos/id/1044/150/150" alt=""></label>
                </li>
                <li>
                    <label for="slide-4"><img src="https://picsum.photos/id/1045/150/150" alt=""></label>
                </li>
                <li>
                    <label for="slide-5"><img src="https://picsum.photos/id/1049/150/150" alt=""></label>
                </li>
                <li>
                    <label for="slide-6"><img src="https://picsum.photos/id/1052/150/150" alt=""></label>
                </li>
            </ul>
        </div>
    </div>
</section>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/variables.scss";
  @import "@/assets/scss/media_queries.scss";

  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: $backgroundcolor;

    .container {
      h2 {
        color: $primarycolor;
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
        text-shadow: 0.1em 0.1em 0.1em $fontcolor;
        text-decoration: underline;
      }      
    }

    .intro {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
    .intro img {
      width: 15em;
      height: auto;
      margin-left: 1em;
      margin-right: 1em;
    }
    .intro p {
      text-align: center;
      font-size: 1.2em;
      margin-top: 20px;
    }
  }

  // Carousel

  @mixin aspect-ratio($width, $height) {
  position: relative;
    
  &:before {
    display: block;
    content: "";
    width: 100%;
    padding-top: ($height / $width) * 100%;
  }
    
  > img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
  }
}

// Styling

section {
    background: $backgroundcolor;
    padding: 50px 0;
}

.container {
    max-width: 1044px;
    margin: 0 auto;
    padding: 1.2em;
}

.carousel {
    display: block;
    text-align: left;
    position: relative;
    margin-bottom: 22px;
    
    > input {
        clip: rect(1px, 1px, 1px, 1px);
        clip-path: inset(50%);
        height: 1px;
        width: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        
        &:nth-of-type(6):checked ~ .carousel__slides .carousel__slide:first-of-type { margin-left: -500%; }
        &:nth-of-type(5):checked ~ .carousel__slides .carousel__slide:first-of-type { margin-left: -400%; }
        &:nth-of-type(4):checked ~ .carousel__slides .carousel__slide:first-of-type { margin-left: -300%; }
        &:nth-of-type(3):checked ~ .carousel__slides .carousel__slide:first-of-type { margin-left: -200%; }
        &:nth-of-type(2):checked ~ .carousel__slides .carousel__slide:first-of-type { margin-left: -100%; }
        &:nth-of-type(1):checked ~ .carousel__slides .carousel__slide:first-of-type { margin-left: 0%; }
        
        &:nth-of-type(1):checked ~ .carousel__thumbnails li:nth-of-type(1) { box-shadow: 0px 0px 0px 5px $maincolor; }
        &:nth-of-type(2):checked ~ .carousel__thumbnails li:nth-of-type(2) { box-shadow: 0px 0px 0px 5px $maincolor; }
        &:nth-of-type(3):checked ~ .carousel__thumbnails li:nth-of-type(3) { box-shadow: 0px 0px 0px 5px $maincolor; }
        &:nth-of-type(4):checked ~ .carousel__thumbnails li:nth-of-type(4) { box-shadow: 0px 0px 0px 5px $maincolor; }
        &:nth-of-type(5):checked ~ .carousel__thumbnails li:nth-of-type(5) { box-shadow: 0px 0px 0px 5px $maincolor; }
        &:nth-of-type(6):checked ~ .carousel__thumbnails li:nth-of-type(6) { box-shadow: 0px 0px 0px 5px $maincolor; }
    }
}

.carousel__slides {
    position: relative;
    z-index: 1;
    padding: 0;
    margin: 0;
    overflow: hidden;
    white-space: nowrap;
    box-sizing: border-box;
    display: flex;
}

.carousel__slide {
    position: relative;
    display: block;
    flex: 1 0 100%;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition: all 300ms ease-out;
    box-sizing: border-box;
    white-space: normal;
    
    figure {
        display: flex;
        margin: 0;
    }
    
    div {
        @include aspect-ratio(3, 2);
        width: 100%;
    }
    
    img {
        display: block;
        flex: 1 1 auto;
        object-fit: cover;
    }
    
    figcaption {
        align-self: flex-start;
        padding: 20px 20px 0 20px;
        flex: 0 0 auto;
        width: 25%;
        min-width: 150px;
    }
    
    .ad__info {
        margin-top: 0.3rem;
        color: $fontcolor;
        display: block;        
    }

    .ad__description {
        margin-top: 0.3rem;
        color: $fontcolor;
        display: block;        
    }
    
    &.scrollable {
        overflow-y: scroll;
    }
}

.carousel__thumbnails {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    
    margin: 0 -10px;
    
    .carousel__slides + & {
        margin-top: 20px;
    }
    
    li {        
        flex: 1 1 auto;
        max-width: calc((100% / 6) - 20px);  
        margin: 0 10px;
        transition: all 300ms ease-in-out;
    }
    
    label {
        display: block;
        @include aspect-ratio(1,1);
        
                  
        &:hover,
        &:focus {
            cursor: pointer;
            
            img {
                box-shadow: 0px 0px 0px 1px $secondarycolor;
                transition: all 300ms ease-in-out;
            }
        }
    }
    
    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>
