<template>
  <section v-if="this.comments.length > 0">
    <h3>Commentaires des utilisateurs</h3>
    <div>
      <article v-for="comment in this.comments" :key="comment.id">
        <h4>{{ comment.author_name }}</h4>
        <p v-html="comment.content.rendered"></p>
      </article>
    </div>
  </section>
</template>

<script>
export default 
{
  props : 
  {
    comments: Array
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";


</style>