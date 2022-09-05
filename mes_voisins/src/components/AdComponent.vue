<template>
  <div id="ad">
    <router-link :to="{ name: 'ad', params: { id: this.dbid } }">
      <h3 v-html="title"></h3>
    </router-link>
    <div class="data">
      <router-link :to="{ name: 'ad', params: { id: this.dbid } }">
        <h3 v-html="title"></h3>
      </router-link>
      <button  v-if="this.$route.name === 'profile'">
      <a @click="$emit('deleteAd')"> <font-awesome-icon icon="fa-solid fa-trash" /> </a>
      </button>
      <div class="img" :style="'background-image: url(\'' + img + '\');'"></div>
      <div class="desc">
        <h2>Description :</h2>
        <p v-html="desc"></p>
      </div>
    </div>
    <div class="tags">
      <span @click="this.$emit('type-selected', type)" class="type" v-show="type != null" v-html="type"></span>
      <span @click="this.$emit('category-selected', category)" class="category" v-show="category != null" v-html="category"></span>
      <span @click="this.$emit('location-selected', location)" class="location" v-show="location != null" v-html="location"></span>
    </div>
  </div>
</template>

<script>




  export default {
    props: {
      dbid: Number,
      title: String,
      desc: String,
      img: String,
      category: String,
      type: String,
      location: String,
    },

  };

  
  
</script>

<style lang="scss">
  @import "@/assets/scss/variables.scss";
  @import "@/assets/scss/media_queries.scss";

  #ad {
    width: 40%;
    height: 400px;
    margin: 2em auto;
    border-radius: 1.2em;
    // border: 3px solid $primaryColor;
    background-color: $tertiaryColor;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
    transition: 0.5s ease-out;

    &:hover {
      transform: scale(1.05);
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.8);
    }

    a {
      margin-top: 0.8em;
      text-decoration: none;

      h3 {
        display: inline-block;
        margin: 0;
        font-size: 1.5em;
        font-weight: 600;
        color: $primaryColor;
        background: linear-gradient(#30dd8a 0 0) no-repeat calc(200% - var(--p, 0%)) 100% / 200% var(--p, 0.08em);
        transition: 0.5s var(--t, 0s), background-position 0.5s calc(0.5s - var(--t, 0s));

        &:hover {
          --p: 100%;
          --t: 0.5s;
          color: $tertiaryColor;
        }
      }
    }

    .data {
      background-color: $tertiaryColor;
      padding: 1em 1em;
      display: flex;

      .desc {
        width: 70%;
        border-radius: 1em;
        padding: 0.5em;
        background-color: $secondaryColor;
        h2 {
          margin: 0.2em 0 0 0.2em;
          font-size: 1em;
          font-weight: 600;
          color: $primaryColor;
          margin-bottom: 0.5em;
          text-align: left;
          text-decoration: underline;
        }

        p {
          font-size: 1em;
          font-weight: 400;
          color: $primaryColor;
          margin: 0;
          text-align: left;
          padding: 0.1em;
        }
      }
      .img {
        width: 50%;
        min-height: auto;
        aspect-ratio: 4/3;
        background-size: cover;
        background-position: center;
        background-repeat: repeat;
        box-sizing: content-box;
        margin: 0 0.5em;
        border-radius: 1em;
      }
    }

    .tags {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background-color: $tertiaryColor;
      bottom: 0;
      border-bottom-left-radius: 1em;
      border-bottom-right-radius: 1em;

      .type {
        font-size: 0.8em;
        font-weight: 600;
        text-transform: uppercase;
        color: $primaryColor;
        margin-right: 1em;
        cursor: pointer;
        border: 2px solid $primaryColor;
        border-radius: 10px;
        padding: 0.5em 1em;
        background: linear-gradient(to top, #30dd8a, 2.2em, transparent 0.5em) no-repeat;
        background-size: 0 100%;
        transition: background-size 1s, color 1s;

        &:hover {
          background-size: 100% 100%;
          color: $tertiaryColor;
        }
      }

      .category {
        font-size: 0.8em;
        font-weight: 600;
        text-transform: uppercase;
        color: $primaryColor;
        cursor: pointer;
        border: 2px solid $primaryColor;
        border-radius: 10px;
        padding: 0.5em 1em;
        background: linear-gradient(to top, #f55353, 2.2em, transparent 0.5em) no-repeat;
        background-size: 0 100%;
        transition: background-size 1s, color 1s;

        &:hover {
          background-size: 100% 100%;
          color: $tertiaryColor;
        }
      }

      .location {
        font-size: 0.8em;
        font-weight: 600;
        text-transform: uppercase;
        color: $primaryColor;
        margin-right: 1em;
        margin-left: 1em;
        cursor: pointer;
        border: 2px solid $primaryColor;
        border-radius: 10px;
        padding: 0.5em 1em;
        background: linear-gradient(to top, #001eff, 2.2em, transparent 0.5em) no-repeat;
        background-size: 0 100%;
        transition: background-size 1s, color 1s;

        &:hover {
          background-size: 100% 100%;
          color: $tertiaryColor;
        }
      }
    }
  }
  @media (max-width: $mediaLaptop){
    article {
      width: 80%;
    }
  }
</style>
