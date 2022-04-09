<template>
  <div class="post">
    <div>
      <div><strong>Post ID: </strong>{{ post.id }}</div>
      <div class="title"><strong>Название: </strong>{{ post.title }}</div>
      <div class="title"><strong>Описание: </strong>{{ post.body }}</div>
    </div>
    <div>
      <my-button @click="$emit('remove', post)">Удалить</my-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.post {
  margin-top: 10px;
  padding: 10px 15px;
  border: 2px solid cornflowerblue;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
   max-width: 95%;
}
</style>