<template>
  <q-page class="flex flex-center">
    <img
      v-if="hide"
      class="cursor-pointer"
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
      v-on:click="routeTo('me')"
    >
    <q-btn
      v-if="!hide"
      rounded icon="all_out"
      color="primary"
      style="border: 4px solid red"
      v-on:click="hide = !hide"
    >
      clickme
    </q-btn>
  </q-page>

</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      hide: false
    }
  },
  methods: {
    routeTo: function (path) {
      this.$router.push(path).catch(() => false)
    }
  }
}
</script>
