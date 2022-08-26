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

h3 {
  font-size: 1.2em;
  margin-top: 0.75em;
  font-weight: bold;
}

h4
{
  font-weight: bold;
  font-size: 1em;
  margin-bottom: 0.5em;
}

div
{
  margin: 1em auto; 
}

article
{
  margin: 0 auto 1em;
  background: pink;
  padding: 1em;
  border-radius: 0.5em
}

p
{
  line-height: 1.25em;
  text-align: justify;
}

section
{
  padding: 0 !important;
  margin: 0;
}

</style>