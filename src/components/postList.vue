<template>
  <div v-if="posts.length">
    <h3 style="margin: 15px 0">Список постов</h3>
    <post-component v-for="post in posts"
                    :key="post.id"
                    :post="post"
                    @remove="$emit('remove', post)"
    />
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

</style>