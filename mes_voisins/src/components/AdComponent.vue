<template>
<article>
    <div>
        <router-link :to="{ name : 'ad', params : { id : this.dbid } }">
        <h2 v-html="title"></h2>
        </router-link>
        
        <p v-html="description"></p>
        <img v-html="img" alt="image de l'annonce">
        <div v-html="category"></div>
        <div v-html="type"></div>
        <div v-html="status"></div>



    </div>
</article>
</template>

<script>
export default
{
    props:
    {
        dbid: Number,
        title: String,
        desc: String,
        img: String,
        category: String,
        type: String,
        status: String,

    }
}
</script>

<style lang="scss" scoped>
</style>

