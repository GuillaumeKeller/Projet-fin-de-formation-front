<template>
  <section>
    <div class="profile-card">
      <div class="img">
        <img src="@/assets/img/joffrey_profile_picture.png" />
      </div>
      <div class="caption">
        <h3>Joffrey Meistermann</h3>
        <p>Scrum Master et Git Master</p>
        <div class="social-links">
          <a href="#"><font-awesome-icon icon="fa-brands fa-linkedin" /></a>
          <a href="#"><font-awesome-icon icon="fa-brands fa-github" /></a>
          <a href="#"><font-awesome-icon icon="fa-brands fa-twitter" /></a>
        </div>
      </div>
    </div>
    <div class="profile-card">
      <div class="img">
        <img src="@/assets/img/joffrey_profile_picture.png" />
      </div>
      <div class="caption">
        <h3>Joffrey Meistermann</h3>
        <p>Scrum Master et Git Master</p>
        <div class="social-links">
          <a href="#"><font-awesome-icon icon="fa-brands fa-linkedin" /></a>
          <a href="#"><font-awesome-icon icon="fa-brands fa-github" /></a>
          <a href="#"><font-awesome-icon icon="fa-brands fa-twitter" /></a>
        </div>
      </div>
    </div>
    <div class="profile-card">
      <div class="img">
        <img src="@/assets/img/joffrey_profile_picture.png" />
      </div>
      <div class="caption">
        <h3>Joffrey Meistermann</h3>
        <p>Scrum Master et Git Master</p>
        <div class="social-links">
          <a href="#"><font-awesome-icon icon="fa-brands fa-linkedin" /></a>
          <a href="#"><font-awesome-icon icon="fa-brands fa-github" /></a>
          <a href="#"><font-awesome-icon icon="fa-brands fa-twitter" /></a>
        </div>
      </div>
    </div>
    <div class="profile-card">
      <div class="img">
        <img src="@/assets/img/joffrey_profile_picture.png" />
      </div>
      <div class="caption">
        <h3>Joffrey Meistermann</h3>
        <p>Scrum Master et Git Master</p>
        <div class="social-links">
          <a href="#"><font-awesome-icon icon="fa-brands fa-linkedin" /></a>
          <a href="#"><font-awesome-icon icon="fa-brands fa-github" /></a>
          <a href="#"><font-awesome-icon icon="fa-brands fa-twitter" /></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script></script>

<style lang="scss" scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  section {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0ba360;
  }
  .profile-card {
    position: relative;
    font-family: "Roboto", sans-serif;
    width: 320px;
    height: 320px;
    background: #fff;
    padding: 50px;
    border-radius: 50%;
    box-shadow: 0 0 22px #3336;
    transition: 0.6s;
    margin: 0 25px;
  }
  .profile-card:hover {
    border-radius: 10px;
    height: 360px;
  }
  .profile-card .img {
    position: relative;
    width: 100%;
    height: 100%;
    transition: 0.6s;
    z-index: 99;
  }
  .profile-card:hover .img {
    transform: translateY(-90px);
  }
  .img img {
    width: 100%;
    border-radius: 50%;
    box-shadow: 0 0 22px #3336;
    transition: 0.6s;
  }
  .profile-card:hover img {
    border-radius: 10px;
  }
  .caption {
    text-align: center;
    transform: translateY(-90px);
    opacity: 0;
    transition: 0.6s;
  }
  .profile-card:hover .caption {
    opacity: 1;
  }
  .caption h3 {
    font-size: 1.8em;
    font-family: "Roboto", sans-serif;
  }
  .caption p {
    font-size: 1.1em;
    color: #0ba360;
    font-family: "Roboto", sans-serif;
    margin: 0.5em 0 9px 0;
  }
  .caption .social-links a {
    color: #333;
    margin-right: 15px;
    font-size: 1.8em;
    transition: 0.6s;
    margin-top: 0.5em;
  }
  .social-links a:hover {
    color: #0ba360;
  }
</style>
