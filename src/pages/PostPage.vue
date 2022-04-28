<template>
   <div class="">
      <h3 style="margin-bottom: 15px">Создание поста</h3>
      <div class="app__btns">
         <my-button @click="dialogFlag = true">Создать пост</my-button>
         <my-input v-focus class="search-input"
                   v-model="searchQuery"
                   placeholder="Поиск по названию"
         />
         <my-select v-model="selectedSort"
                    :options="sortOptions"
         />
      </div>
      <my-dialog v-show="dialogFlag"
                 @hiddenDialog="hiddenDialog"
      >
         <post-form @create="createPost"/>
      </my-dialog>
      <post-list :posts="sortedAndSearchQ"
                 @remove="deletePost"
                 v-if="!loadingFlag"
      />
      <p v-else>Идет загрузка постов...</p>
      <div class="page__wrapper">
         <div class="page"
              v-for="pageNumber of totalPages"
              :key="pageNumber"
              @click="changePage(pageNumber)"
              :class="{
                 'current__page': pageNumber === page
         }">
            {{ pageNumber }}
         </div>
      </div>
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
         ],
         searchQuery: '',
         page: 1,
         totalPages: 0,
         limit: 10
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
         this.loadingFlag = true;
         setTimeout(async() => {
            try {
               const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                  params: {
                     _limit: this.limit,
                     _page: this.page
                  }
               });
               this.posts = response.data;
               this.loadingFlag = false;
               this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
            } catch(e) {
               alert(e)
            }
         }, 1000);
      },
      changePage(pageNumber) {
         this.page = pageNumber;
         this.fetchPosts()
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
      },
      sortedAndSearchQ() {
         return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
      }
   }
}
</script>

<style>

.app__btns {
   display: flex;
   justify-content: space-between;
}

.search-input {
   min-width: 400px;
}

.page__wrapper {
   display: flex;
   margin-top: 10px;
}

.page {
   padding: 5px 10px;
   cursor: pointer;
}

.current__page {
   border: 2px cornflowerblue solid;
}
</style>