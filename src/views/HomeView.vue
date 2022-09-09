<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <CardList />

    <div v-if="!error">
      <div v-for="post in posts" :key="post.image">{{post}}</div>
    </div>

    <div v-if="error">
      {{error}}
    </div>
  </div>
</template>

<script>

import CardList from "../components/CardList.vue"
import getPosts from "../composables/getPosts"

export default {
  components:{CardList},

  setup(){
    let { posts, error, load } = getPosts()

    load();
    return{load,posts,error};
  }
}
  
  

</script>
