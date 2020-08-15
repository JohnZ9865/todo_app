<template>
  <q-page class="flex flex-center">
    <img
      v-if="hide"
      class="cursor-pointer"
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
      v-on:click="routeTo('Me')"
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

    <q-btn
      rounded color="blue"
      v-on:click="routeTo('John')"
    >
      Click here to go to John page
    </q-btn>

    <q-btn
      rounded color="blue"
      v-on:click="routeTo('Game')"
    >
      Click here to go to tic tac toe
    </q-btn>

    <div>
      <Game />
    </div>

    <div>
      <John />
    </div>
  </q-page>

</template>

<script>
import Game from './Game'
import John from './John'

export default {
  name: 'PageIndex',
  components: {
    Game,
    John
  },
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
