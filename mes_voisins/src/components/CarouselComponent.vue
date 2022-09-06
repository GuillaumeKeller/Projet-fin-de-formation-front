<template>
  <div class="slider">
    <div class="slides">
      <AdComponent
        v-for="(ad, index) in this.ads"
        v-show="index == this.currentIndex"
        :class="index == this.currentIndex ? 'slide' : ''"
        :key="index"
        :dbid="ad.id"
        :title="ad.title.rendered"
        :desc="ad.excerpt.rendered"
        :img="this.getAdImage(ad)"
      />
    </div>
    <div class="button">
      <span class="prev" @click="move(-1)">
        <!-- <i class="fa fa-chevron-left" aria-hidden="true"></i> -->
        <font-awesome-icon icon="fa-solid fa-chevron-left" aria-hidden="true" />
      </span>
      <span class="next" @click="move(1)">
        <!-- <i class="fa fa-chevron-right" aria-hidden="true"></i> -->
        <font-awesome-icon
          icon="fa-solid fa-chevron-right"
          aria-hidden="true"
        />
      </span>
    </div>
    <ul class="dots">
      <li
        v-for="(dot, index) in ads"
        :key="index"
        :class="{ active: ++index === active }"
        @click="jump(index)"
      ></li>
    </ul>
  </div>
</template>

<script>
import adService from "@/services/adService";
import AdComponent from "./AdComponent.vue";

export default {
  name: "CarouselComponent",

  components: {
    AdComponent,
  },

  data: () => ({
    ads: [],
    active: 1,
  }),

  computed: {
    currentIndex() {
      return this.active - 1;
    },
  },

  methods: {
    move(direction) {
      this.active += direction;
      if (this.active > this.ads.length) {
        this.active = 1;
      } else if (this.active < 1) {
        this.active = this.ads.length;
      }
    },

    jump(index) {
      this.active = index;
    },

    getAdImage(ad) {
      // Si la recette possède une image associée
      if (ad.featured_media > 0) {
        // Je renvoi l'URL de l'image
        console.log(ad._embedded["wp:featuredmedia"][0].source_url);
        return ad._embedded["wp:featuredmedia"][0].source_url;
      } else {
        return require("@/assets/img/no-image.jpg");
      }
    },
  },

  async created() {
    this.ads = await adService.loadAds();
    console.log(this.ads);
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/media_queries.scss";

.slider {
  // position: relative;
  width: 100%;
  z-index: 0;
  .button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    .prev {

      position: absolute;
      top: 10em;
      width: 50px;
      height: 50px;
      border: 2px solid $primaryColor;
      color: $primaryColor;
      border-radius: 50%;
      margin-left: 25px;
      cursor: pointer;
      line-height: 48px;
      text-align: center;
      text-indent: -2px;
      transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    }
    .next {
      position: absolute;
      top: 10em;
      width: 50px;
      height: 50px;
      border: 2px solid $primaryColor;
      color: $primaryColor;
      border-radius: 50%;
      margin-left: 25px;
      cursor: pointer;
      line-height: 48px;
      text-align: center;
      text-indent: -2px;
      transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);

      &:hover {
        background: $secondaryColor;
        color: #fff;
        transform: scale(1.2);
      }

      &:active {
        transform: translate(0, 3px) scale(1.2);
      }

    }
    .prev {
      left: 0;
      margin-left: 500px;
      margin-right: auto;
      text-indent: 2px;
    }
    .next {
      right: 0;
      margin-left: auto;
      margin-right: 500px;
      text-indent: 2px;
    }
  }

  .dots {
    // position: fixed;
    display: block;
    width: 100%;
    text-align: center;
    margin-bottom: 2em;

    li {
      width: 6px;
      height: 6px;
      border-radius: 3px;
      background: $primaryColor;
      opacity: 0.2;
      display: inline-block;
      margin: 0 3px;
      cursor: pointer;
      transition: opacity 0.4s ease-in-out,
      width 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

      &.active {
        width: 22px;
        opacity: 1;
      }
    }
  }

  .slides {
    font-size: 1em;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    font-weight: bold;

    

    @media (min-width: 900px) {
      font-size: 1.5em;
    }

    .animated {
      transition: all 400ms;
      position: absolute;
      transform: translate(-50%, -50%);
    }

    .slide-in {
      opacity: 0;
      transform: translate(-40%, -50%);
    }

    .slide-in-active {
      transition-delay: 150ms;
    }

    .slide-out {
      opacity: 1;
    }

    .slide-out-active {
      opacity: 0;
      transform: translate(-60%, -50%);
    }

    article {
      box-sizing: content-box;
      width: 70%;
      height: 30%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      background-color: #fff;
      color: $primaryColor;
      border-radius: 10px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
      position: relative;
      z-index: 1;
      margin: 0 auto 1em;

      &:hover {
        box-shadow: 0px 0px 10px $quaternaryColor;
        transform: scale(1.05);
      }

      h2 {
        font-size: 1.5em;
        font-weight: bold;
        margin-bottom: 1em;
        text-decoration: none;
      }

      p {
        font-size: 0.8em;
        margin-bottom: 1em;
      }
    }
  }
}

@media (min-width: $mediaSmartphone) and (max-width: $mediaTablet) {
  .slider {
    .button {
      .prev {
      left: 0;
      margin-left: 100px;
      margin-right: auto;
      text-indent: 2px;
    }
    .next {
      right: 0;
      margin-left: auto;
      margin-right: 100px;
      text-indent: 2px;
    }
    }
  }
}

@media (max-width: $mediaSmartphone) {
  .slider {
    .button {
      .prev {
        position: absolute;
        top: 64em;
        left: -455px;

      }
      .next {
        position: absolute;
        top: 64em;
        right: -455px;
        
      }
    }
  }
  .slides {

    width: 100%;
    padding: 0;

    #ad{
        width: 90%;
      }
  }
}
</style>
