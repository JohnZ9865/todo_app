<template>
  <div align="center">
    <h4>{{ body }}</h4>
    <q-input style="width: 300px" v-model="body"></q-input>
    <button v-on:click="routeTo('me')"> click to go back to home</button>
    <q-btn rounded v-on:click="routeTo('raiders')">
      Click to go to raiders(used to be image).vue
    </q-btn>
  </div>
</template>

<script>
export default {
  created () {
  },
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
.box {
  width: 50px;
  height: 50px;
  border: blue solid 4px;
}
</style>
