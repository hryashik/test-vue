<template>
   <div class="post">
      <div>
         <div><strong>ID: </strong>{{ post.id }}</div>
         <div class="title"><strong>Название: </strong>{{ post.title }}</div>
         <div class="title"><strong>Описание: </strong>{{ post.body }}</div>
      </div>
      <div class="post__btns">
         <my-button @click="$router.push(`/posts/${post.id}`)">Открыть</my-button>
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
.post__btns {
   display: flex;
}
.post__btns button:nth-child(1) {
   margin-right: 5px;
}
</style>