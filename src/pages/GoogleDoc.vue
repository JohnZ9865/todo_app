<template>
  <div align-center>
    <h2> This is Googledoc.vue </h2>
    <iframe
      src="https://docs.google.com/document/d/e/2PACX-1vQaX6_WLwsRd78Udd_kJfDcr366DyXP-I0rqL_phPMXCCqVW4paSWV_oOM60vL6ig/pub?embedded=true"
      width="100%"
      style="min-height: 300px"
    >
    </iframe>

    <q-btn
      rounded color="secondary"
      style="border: 4px green solid"
      v-on:click="routeTo('John')"
    >
      Click here to go back to John
    </q-btn>
  </div>
</template>

<script>
export default {
  methods: {
    routeTo: function (path) {
      this.$router.push(path).catch(() => false)
    }
  }
}
</script>

<style>

</style>
