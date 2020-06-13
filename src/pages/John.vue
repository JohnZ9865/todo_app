<template>
  <div align="center">
    <h4>{{ body }}</h4>
    <q-input style="width: 300px" v-model="body"></q-input>
    <button v-on:click="routeTo('me')"> click to go back to home</button>
    <q-btn rounded v-on:click="routeTo('Image')"> Click to go to image.vue </q-btn>
  </div>
</template>

<script>
export default {
  data () {
    return {
      body: 'Welcome from John.vue'
    }
  },
  methods: {
    routeTo: function (path) {
      this.$router.push(path).catch(() => false)
    }
  }
}
</script>

<style>

</style>
