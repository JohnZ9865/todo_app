// John --> Image, Image --> Doc, Doc --> John
<template>
  <div align="center">
    <div>
      <p>{{ text }}</p>
      <div>
        <img
          v-bind:src="main"
          v-on:click="changeImage()"
          width="420" height="300"
          style="border-radius: 12px"
        />
      </div>

      <div>
        <q-btn
          rounded color="primary"
          v-on:click="routeTo('Googledoc')"
        >
          click here to go to Googledoc.vue
        </q-btn>
      </div>
    </div>

    <div>
      <p>wewewe</p>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    this.main = this.mainLink
  },
  data () {
    return {
      text: 'this is image.vue',
      altLink: 'https://sportshub.cbsistatic.com/i/r/2016/12/24/cb5e3ed4-5354-4aa3-baed-f17b46120ace/thumbnail/640x360/12d83c46e79db4b3a1ce585539acf196/65019114.jpg',
      mainLink: 'https://www.mercurynews.com/wp-content/uploads/2019/09/Raiders-Colts-Football-2.jpg?w=620',
      main: ''
    }
  },
  methods: {
    routeTo: function (path) {
      this.$router.push(path).catch(() => false)
    },
    changeImage: function () {
      if (this.main === this.mainLink) {
        this.main = this.altLink
      } else {
        this.main = this.mainLink
      }
    }
  }
}
</script>

<style>

</style>
