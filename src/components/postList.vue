<template>
   <div v-if="posts.length">
      <h3 style="margin: 15px 0">Список постов</h3>
      <transition-group name="list">
         <post-component v-for="post in posts"
                         :key="post.id"
                         :post="post"
                         @remove="$emit('remove', post)"
         />
      </transition-group>

   </div>
   <h3 v-else style="margin: 15px 0">Список пуст</h3>
</template>

<script>
import postComponent from "@/components/postComponent";

export default {
   components: {
      postComponent
   },

   props: {
      posts: {
         type: Array,
         required: true
      }
   }
}
</script>

<style scoped>
.list-item {
   display: inline-block;
   margin-right: 10px;
}

.list-enter-active, .list-leave-active {
   transition: all 1s;
}

.list-enter, .list-leave-to /* .list-leave-active до версии 2.1.8 */
{
   opacity: 0;
   transform: translateX(50px);
}
.list-move {
   transition: transform 1s;
}
</style>