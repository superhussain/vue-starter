<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <router-link to="bye">
      <el-button type="primary">Goodbye!</el-button>
    </router-link>

    <div class="counter-app">
      <h2 v-if="count === 0">Start by clicking increment...</h2>
      <h2 v-else-if="count === 1">Clicked {{count}} time</h2>
      <h2 v-else>Clicked {{count}} times</h2>
      
      <el-button type="success" @click="incrementCount()">Increment</el-button>
      <el-button type="warning" @click="(count > 0) ? decrementCount() : ''">Decrement</el-button>
      <br><br>
      <el-button type="danger" @click="resetCount()">Reset</el-button>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    computed: {
      count () {
        return this.$store.getters.getCount
      }
    },
    methods: {
      ...mapActions([
        'incrementCount',
        'decrementCount',
        'resetCount'
      ])
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  $green = #41b883
  $dark-blue = #35495e

  h2
    font-weight normal

  .counter-app
    width calc(100% - 9em)
    max-width 600px
    margin 3em auto 0
    padding 3em
    margin-top (3 + 1.5)em
    box-shadow 0 0 0 0.75em rgba($dark-blue, 0.33), 0 0 0 1.5em rgba($green,0.33)
    h2
      margin-top 0
      margin-bottom 1.5em
</style>
