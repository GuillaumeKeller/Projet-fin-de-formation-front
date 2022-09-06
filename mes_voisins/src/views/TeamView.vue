<template>
  <section>
        <div class="our-team">
          <div class="picture">
            <img class="img" src="@/assets/img/avatar-Farrah-Ferag.png" />
          </div>
          <div class="team-content">
            <h3 class="name">Farrah Ferag</h3>
            <h4 class="title">Product Owner</h4>
          </div>
          <ul class="social">
            <li><a href="#" aria-hidden="true"><font-awesome-icon icon="fa-brands fa-linkedin" /></a></li>
            <li><a href="#" aria-hidden="true"><font-awesome-icon icon="fa-brands fa-square-github" /></a></li>
            <li><a href="#" aria-hidden="true"><font-awesome-icon icon="fa-solid fa-envelope" /></a></li>
            <li><a href="#" aria-hidden="true"><font-awesome-icon icon="fa-brands fa-square-twitter" /></a></li>
          </ul>
        </div>
        <div class="our-team">
          <div class="picture">
            <img class="img" src="@/assets/img/joffrey_profile_picture.png" />
          </div>
          <div class="team-content">
            <h3 class="name">Joffrey Meistermann</h3>
            <h4 class="title">Scrum et Git Master</h4>
          </div>
          <ul class="social">
            <li><a href="https://www.linkedin.com/in/joffrey-meistermann/" aria-hidden="true"><font-awesome-icon icon="fa-brands fa-linkedin" /></a></li>
            <li><a href="https://github.com/JoffreyMS" aria-hidden="true"><font-awesome-icon icon="fa-brands fa-square-github" /></a></li>
            <li><a href="mailto:joffrey.meistermann@gmail.com" aria-hidden="true"><font-awesome-icon icon="fa-solid fa-envelope" /></a></li>
            <li><a href="https://twitter.com/Joffrey_Fr" aria-hidden="true"><font-awesome-icon icon="fa-brands fa-square-twitter" /></a></li>
          </ul>
        </div>
        <div class="our-team">
          <div class="picture">
            <img class="img" src="@/assets/img/guillaume_K.png" />
          </div>
          <div class="team-content">
            <h3 class="name">Guillaume Keller</h3>
            <h4 class="title">Lead Dev Front</h4>
          </div>
          <ul class="social">
            <li><a href="#" aria-hidden="true"><font-awesome-icon icon="fa-brands fa-linkedin" /></a></li>
            <li><a href="#" aria-hidden="true"><font-awesome-icon icon="fa-brands fa-square-github" /></a></li>
            <li><a href="#" aria-hidden="true"><font-awesome-icon icon="fa-solid fa-envelope" /></a></li>
            <li><a href="#" aria-hidden="true"><font-awesome-icon icon="fa-brands fa-square-twitter" /></a></li>
          </ul>
        </div>
        <div class="our-team">
          <div class="picture">
            <img class="img" src="@/assets/img/Simon.png" />
          </div>
          <div class="team-content">
            <h3 class="name">Simon Leboulanger</h3>
            <h4 class="title">Lead Dev Back</h4>
          </div>
          <ul class="social">
            <li><a href="#" aria-hidden="true"><font-awesome-icon icon="fa-brands fa-linkedin" /></a></li>
            <li><a href="#" aria-hidden="true"><font-awesome-icon icon="fa-brands fa-square-github" /></a></li>
            <li><a href="#" aria-hidden="true"><font-awesome-icon icon="fa-solid fa-envelope" /></a></li>
            <li><a href="#" aria-hidden="true"><font-awesome-icon icon="fa-brands fa-square-twitter" /></a></li>
          </ul>
        </div>
  </section>
</template>

<style scoped lang="scss">

@import '@/assets/scss/variables.scss';
@import '@/assets/scss/media_queries.scss';


  section {
    font-family: "Roboto", sans-serif;
    height: 100vh;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    
  }
  .our-team {
    padding: 100px 80px 100px;
    margin-bottom: 30px;
    background-color: $tertiaryColor;
    text-align: center;
    overflow: hidden;
    position: relative;
    margin-right: 4em;
  }

  .our-team .picture {
    display: inline-block;
    height: 150px;
    width: 150px;
    margin-bottom: 50px;
    z-index: 1;
    position: relative;
  }

  .our-team .picture::before {
    content: "";
    width: 100%;
    height: 0;
    border-radius: 50%;
    background-color: #0ba360;
    position: absolute;
    bottom: 165%;
    right: 0;
    left: 0;
    opacity: 0.9;
    transform: scale(3.6);
    transition: all 0.4s linear 0s;
  }

  .our-team:hover .picture::before {
    height: 100%;
  }

  .our-team .picture::after {
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #0ba360;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  .our-team .picture img {
    width: 100%;
    height: 99.9%;
    border-radius: 50%;
    transform: scale(1);
    transition: all 0.9s ease 0s;
  }

  .our-team:hover .picture img {
    box-shadow: 0 0 0 14px #f7f5ec;
    transform: scale(0.7);
  }

  .our-team .name {
    font-size: 20px;
    font-weight: 700;
    margin: 0 0 7px;
    text-transform: uppercase;
    color: #0ba360;
  }
  .our-team .title {
    display: block;
    font-size: 1.1em;
    color: #4e5052;
    text-transform: capitalize;
  }

  .our-team .social {
    width: 100%;
    padding: 0;
    margin: 0;
    background-color: #0ba360;
    position: absolute;
    bottom: -100px;
    left: 0;
    transition: all 0.5s ease 0s;
  }

  .our-team:hover .social {
    bottom: 0;
  }

  .our-team .social li {
    display: inline-block;
  }

  .our-team .social li a {
    display: block;
    padding: 0.6em;
    font-size: 1.5em;
    color: $tertiaryColor;
    transition: all 0.3s ease 0s;
    text-decoration: none;
  }

  .our-team .social li a:hover {
    color: #0ba360;
    background-color: $tertiaryColor;
  }
</style>
