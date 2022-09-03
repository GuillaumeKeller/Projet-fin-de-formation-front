<template>
  <article :style="'background-image: url(\'' + img + '\');'">
    <div class="tags">
      <span @click="this.$emit('type-selected', type)" class="type" v-show="type != null" v-html="type"></span>
      <span @click="this.$emit('category-selected', category)" class="category" v-show="category != null" v-html="category"></span>
      <span @click="this.$emit('location-selected', location)" class="location" v-show="location != null" v-html="location"></span>
    </div>
    <div class="data">
      <router-link :to="{ name: 'ad', params: { id: this.dbid } }">
        <h3 v-html="title"></h3>
      </router-link>
      <div class="desc">
        <h2>Description :</h2>
        <p v-html="desc"></p>
      </div>
    </div>
  </article>
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

  article {
    width: 100%;
    box-sizing: border-box;
    aspect-ratio: 4/4;
    margin: 2em auto;
    border-radius: 1.2em;
    background-size: cover;
    background-position: center -30px;
    position: relative;
    border: 3px solid $primaryColor;
    padding: 0.5em;
    background-color: $secondaryColor;

    .tags {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      position: absolute;
      background-color: $tertiaryColor;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 1.5em 2em 1.5em;
      border-bottom-left-radius: 1em;
      border-bottom-right-radius: 1em;
      border-top: 3px solid $primaryColor;

      .type {
        font-size: 0.8em;
        font-weight: 600;
        text-transform: uppercase;
        color: $primaryColor;
        margin-right: 1em;
        cursor: pointer;
        border: 2px solid $primaryColor;
        border-radius: 10px;
        padding: 0.5em;
        background: linear-gradient(to top, #30dd8a, 2em, transparent 0.5em) no-repeat;
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
        padding: 0.5em;
        background: linear-gradient(to top, #f55353, 2em, transparent 0.5em) no-repeat;
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
        padding: 0.5em;
        background: linear-gradient(to top, #001eff, 2em, transparent 0.5em) no-repeat;
        background-size: 0 100%;
        transition: background-size 1s, color 1s;

        &:hover {
          background-size: 100% 100%;
          color: $tertiaryColor;
        }
      }
    }

    .data {
      background-color: $tertiaryColor;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      padding: 1em 2em 1.5em;
      border-top-left-radius: 1em;
      border-top-right-radius: 1em;
      border-bottom: 3px solid $primaryColor;
      a {
        text-decoration: none;

        h3 {
          display: inline-block;
          margin: 0;
          font-size: 2.5em;
          font-weight: 600;
          color: $primaryColor;
          margin-bottom: 0.5em;
          background: linear-gradient(to top, #30dd8a, 0.5em, transparent 0.5em) no-repeat;
        }
      }

      .desc {

        border: 2px solid $primaryColor;
        border-radius: 10px;
        padding: 0.5em;
        h2 {
          margin: 0;
          font-size: 1.5em;
          font-weight: 600;
          color: $primaryColor;
          margin-bottom: 0.5em;
          text-align: left;
          text-decoration: underline;
        }

        p {
          font-size: 1.2em;
          font-weight: 400;
          color: $secondaryColor;
          margin: 0;
          text-align: left;
        }
      }
    }
  }

  @media (max-width: $mediaTablet) {
    article {
      width: 80%;
    }
  }
</style>
