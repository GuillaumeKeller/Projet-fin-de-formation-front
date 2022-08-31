<template>
  <article>
    <div>
      <router-link :to="{ name: 'ad', params: { id: this.dbid } }">
        <h3 v-html="title"></h3>
      </router-link>
      <img :src="img" />
      <p v-html="desc"></p>
    </div>
    <div class="tags">
      <span class="type" v-show="type != null" v-html="type"></span>
      <span @click="this.$emit('category-selected', category)" class="category" v-show="category != null" v-html="category"></span>
      <span @click="this.$emit( 'location-selected', location )" class="location" v-show="location != null" v-html="location"></span>
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

<style lang="scss" scoped>
  @import "@/assets/scss/variables.scss";
  @import "@/assets/scss/media_queries.scss";

  article {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 2em auto;
    width: 35%;
    height: auto;
    background: $tertiaryColor;
    color: $primaryColor;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    transition: all 0.3s ease-in-out;
    &:hover {
      box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
    }

    h3 {
      font-size: 1.5em;
      font-weight: 600;
      margin-bottom: 0.5em;
      text-transform: uppercase;
      color: $primaryColor;
    }

    img {
      width: 50%;
      height: auto;
      margin-bottom: 1em;
    }

    p {
      font-size: 1em;
      margin-bottom: 1em;
      text-align: justify;
    }

    .tags {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin-top: 1em;

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
    }
  }

  @media (max-width: $mediaTablet) {
    article {
      width: 80%;
    }
  }
</style>
