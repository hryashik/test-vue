<template>
  <div class="post"
       v-for="post in posts"
       v-if="posts.length">
    <div><strong>Название: </strong>{{ post.title }}</div>
    <div><strong>Описание: </strong>{{ post.body }}</div>
  </div>
  <h3 v-else>Постов нет</h3>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.post {
  margin-top: 5px;
  padding: 10px 15px;
  border: 2px solid cornflowerblue;
}
</style>