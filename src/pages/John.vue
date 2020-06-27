<template>
  <div align="center">
    <h4>{{ body }}</h4>
    <q-input style="width: 300px" v-model="body"></q-input>
    <button v-on:click="routeTo('me')"> click to go back to home</button>
    <q-btn rounded v-on:click="routeTo('raiders')"> Click to go to raiders(used to be image).vue </q-btn>
    <div>
      <p id='line0'>There's supposed to be a game here</p>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    this.board.push(this.line0)
    this.board.push(this.line1)
    this.board.push(this.line2)
  },
  data () {
    return {
      body: 'Welcome from John.vue',
      board: [],
      line0: ['_', '_', '_'],
      line1: ['_', '_', '_'],
      line2: ['_', '_', '_']
    }
  },
  methods: {
    routeTo: function (path) {
      this.$router.push(path).catch(() => false)
    },
    boardGame: function (path) {
      console.log(this.board)
      document.getElementById('line0').innerHTML = this.line0
    }
  }
}
</script>

<style>

</style>
