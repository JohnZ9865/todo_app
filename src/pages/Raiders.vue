// John --> Image, Image --> Doc, Doc --> John
// create new array with links of images in them, onclick cycle through imagers
<template>
  <div align="center">
    <div>
      <div>
        <button v-on:click="document.getElementById('raiders_video_source').src=videoplay_list[0]"> Games from 2016 </button>
        <button> Games from 2017 </button>
        <button> Games from 2018 </button>
        <button> Games from 2019 </button>
      </div>
      <iframe
        id= 'raiders_video_source'
        width="560" height="315"
        v-bind:src="videoplay_list[vid]"
        frameborder="0"
        allow="
          accelerometer; autoplay; encrypted-media;
          gyroscope; picture-in-picture
        "
        allowfullscreen
      >
      </iframe>
      <br>
      <q-btn
        rounded
        v-on:click="prevYear()"
      >
        Game from previous year
      </q-btn>
      <q-btn
        rounded
        v-on:click="nxtYear()"
      >
        Game from next year
      </q-btn>
    </div>
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
        <q-btn
          rounded color="primary"
          v-on:click="routeTo('Video')"
        >
          go to Video
        </q-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    this.main = this.picArray[0]
  },
  data () {
    return {
      text: 'this is raiders.vue',
      main: '',
      l: 0,
      picArray: ['https://sportshub.cbsistatic.com/i/r/2016/12/24/cb5e3ed4-5354-4aa3-baed-f17b46120ace/thumbnail/640x360/12d83c46e79db4b3a1ce585539acf196/65019114.jpg', 'https://www.mercurynews.com/wp-content/uploads/2019/09/Raiders-Colts-Football-2.jpg?w=620'],
      vid: 0,
      videoplay_list: ['https://www.youtube.com/watch?v=8hPlvnD5wj4', 'https://www.youtube.com/watch?v=5arlkP-8FOg']
    }
  },
  methods: {
    routeTo: function (path) {
      this.$router.push(path).catch(() => false)
    },
    changeImage: function () {
      if (this.l + 1 === this.picArray.length) {
        this.l = 0
        this.main = this.picArray[this.l]
      } else {
        this.l = this.l + 1
        this.main = this.picArray[this.l]
      }
    },
    nxtYear: function () {
      if (this.vid === this.videoplay_list.length - 1) {
        this.vid = 0
      } else {
        this.vid = this.vid + 1
      }
    },
    prevYear: function () {
      if (this.vid === 0) {
        this.vid = this.videoplay_list.length - 1
      } else {
        this.vid = this.vid - 1
      }
    }
  }
}
</script>

<style>

</style>
