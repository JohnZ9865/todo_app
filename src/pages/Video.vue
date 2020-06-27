<template>
  <div class="q-pa-md" align="center">
    <q-btn
      rounded color="primary"
      v-on:click="goBack()"
    >
      Go back
    </q-btn>
    <br>
    <iframe
      width="560" height="315"
      v-bind:src="list[l]"
      frameborder="0"
      allow="
        accelerometer; autoplay; encrypted-media;
        gyroscope; picture-in-picture
      "
      allowfullscreen
    >
    </iframe>
    <div class="row">
      <div class="col" align="left">
        <q-btn
          rounded
          v-on:click="nextVideo()"
        >
          Click to go to next video
        </q-btn>
      </div>
      <div class="col" align="right">
        <q-btn
          rounded v-on:click="previousVideo()"
        >
          click to go to previous video
        </q-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: ['https://www.youtube.com/embed/VRm7oRCTkjE', 'https://www.youtube.com/embed/lgUDuZS9MVQ', 'https://www.youtube.com/embed/t22flliJLTQ'],
      l: 0
    }
  },
  methods: {
    routeTo: function (path) {
      this.$router.push(path).catch(() => false)
    },
    goBack: function () {
      this.$router.go(-1)
    },
    nextVideo: function () {
      if (this.l + 1 === this.list.length) {
        this.l = 0
      } else {
        this.l = this.l + 1
      }
    },
    previousVideo: function () {
      if (this.l - 1 === -1) {
        this.l = this.list.length - 1
      } else {
        this.l = this.l - 1
      }
    }
  }
}
</script>

<style>

</style>
