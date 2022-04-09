<template>
   <div class="app">
      <h3 style="margin-bottom: 15px">Создание поста</h3>
      <div class="app__btns">
         <my-button @click="dialogFlag = true">Создать пост</my-button>
         <my-select v-model="selectedSort"
                    :options="sortOptions"
         />
      </div>
      <my-dialog v-show="dialogFlag"
                 @hiddenDialog="hiddenDialog"
      >
         <post-form @create="createPost"/>
      </my-dialog>
      <post-list :posts="sortedPosts"
                 @remove="deletePost"
      />
      <p v-if="loadingFlag">Идет загрузка постов...</p>
   </div>
</template>

<script>
import postList from "@/components/postList";
import postForm from "@/components/postForm";
import MyDialog from "@/components/UI/MyDialog";
import axios from "axios";

export default {
   components: {
      MyDialog,
      postList, postForm
   },
   data() {
      return {
         posts: [],
         dialogFlag: false,
         loadingFlag: true,
         selectedSort: '',
         sortOptions: [
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'},
            {value: 'id', name: 'По ID'}
         ]
      }
   },
   methods: {
      createPost(post) {
         this.posts.push(post)
         this.dialogFlag = false;
      },
      deletePost(obj) {
         this.posts = this.posts.filter(post => post.id !== obj.id)
      },
      hiddenDialog(boolean) {
         this.dialogFlag = boolean
      },
      async fetchPosts() {
         setTimeout(async() => {
            try {
               const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                  params: {
                     _limit: 10
                  }
               });
               this.posts = response.data;
               this.loadingFlag = false
            } catch(e) {
               alert(e)
            }
         }, 2000);
      }
   },
   mounted() {
      this.fetchPosts();
   },
   computed: {
      sortedPosts() {
         if (this.selectedSort === 'id') {
            return [...this.posts].sort((post1, post2) => post1[this.selectedSort] + post2[this.selectedSort])
         } else {
            return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
         }
      }
   }
}
</script>

<style>
* {
   padding: 0px;
   margin: 0px;
   box-sizing: border-box;
}

.app {
   padding: 15px;
}

.app__btns {
   display: flex;
   justify-content: space-between;
}


</style>