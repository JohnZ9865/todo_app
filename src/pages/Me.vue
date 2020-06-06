<template>
  <q-page class="flex flex-center">
    <div v-if="hide === 0" v-on:click="alterHide">
      my name is John Zhou
    </div>
    <div v-else-if="hide === 1" v-on:click="alterHide">
      welcome from coder school
    </div>

    <div v-else-if="hide === 2">
      <q-btn outline rounded v-on:click="routeTo('home')"> click to go home </q-btn>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      hide: 0
    }
  },
  methods: {
    alterHide: function () {
      if (this.hide === 4) {
        this.hide = 0
      } else {
        this.hide += 1
      }
    },
    routeTo: function (path) {
      console.log('I was here')
      this.$router.push(path).catch(() => false)
    }
  }
}
</script>

<style>

</style>
