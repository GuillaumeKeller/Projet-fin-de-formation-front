<template>
    <nav>
        <button v-if="pagination.prevPage" @click="$emit('prev')">
            Précedent
        </button>
        <button @click='scrollToTop()' v-else disabled>
            Précedent
        </button>
        <button v-if="pagination.nextPage" @click="$emit('next')">
            Suivant
        </button>
        <button v-else disabled>
            Suivant
        </button>
        <span> {{ pagination.from }} - {{ pagination.to }}</span>
    </nav>
</template>

<script>
    export default {
        props: ['pagination'],
        
    }
    
</script>

<style lang="scss" scoped>
    @import "@/assets/scss/variables.scss";
    @import "@/assets/scss/media_queries.scss";
    
    nav {
        
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
            background-image: linear-gradient(to right, #0ba360, #3cba92, #30dd8a, #2bb673);
            box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);
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
        
        span {
            //mettre le span en dessous des boutons
            
            display: block;
            font-size: 1.5em;
            font-weight: 600;
            text-transform: uppercase;
            color: $primaryColor;
        }
    }
</style>