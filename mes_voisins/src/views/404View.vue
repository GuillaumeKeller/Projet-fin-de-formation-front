<template>
    <div>
        <h1> Tu fais mauvaise route </h1>
        <img src="https://media1.giphy.com/media/cjbfyJrICOaKIXBWyG/200w.webp?cid=ecf05e47bgmul3dai27xz0dyhh608e3hlpuks6heozlgpk4c&rid=200w.webp&ct=g"/> 

         <div class="nav-btn">
        <router-link :to="{ name: 'home' }">
        <button class="btn-header">Accueil</button>
      </router-link>
    </div>
    </div>
</template>
<script>



</script>

<style lang="scss" scoped>

@import "@/assets/scss/variables.scss";
@import "@/assets/scss/media_queries.scss";

h1{
    font-size: 9em;
    text-shadow:0 1px 0 #ccc, 
               0 2px 0 #c9c9c9,
               0 3px 0 #bbb,
               0 4px 0 #b9b9b9,
               0 5px 0 #aaa,
               0 6px 1px rgba(0,0,0,.1),
               0 0 5px rgba(0,0,0,.1),
               0 1px 3px rgba(0,0,0,.3),
               0 3px 5px rgba(0,0,0,.2),
               0 5px 10px rgba(0,0,0,.25),
               0 10px 10px rgba(0,0,0,.2),
               0 20px 20px rgba(0,0,0,.15);color:#fff;
}


.nav-btn {
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

      .btn-header {
        background-image: linear-gradient(to right, #0ba360, #3cba92, #30dd8a, #2bb673);
        box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);
      }
    }
  




</style>