<template>
  <q-page class="flex flex-center">
    <div v-if="!hide" v-on:click="alterHide">
      my name is John Zhou
    </div>
    <div v-else v-on:click="alterHide">
      welcome from coder school
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      hide: false
    }
  },
  methods: {
    alterHide: function () {
      if (this.hide === true) {
        this.hide = false
      } else {
        this.hide = true
      }
    }
  }
}
</script>

<style>

</style>
