<template>
  <div align="center">
    <h4>{{ body }}</h4>
    <q-input style="width: 300px" v-model="body"></q-input>
    <button v-on:click="routeTo('me')"> click to go back to home</button>
    <q-btn rounded v-on:click="routeTo('raiders')"> Click to go to raiders(used to be image).vue </q-btn>
    <div class="flex flex-center">
      <p> {{ message }} </p>
      <q-btn rounded v-on:click="resetFunction()"> reset </q-btn>
      <br>
      <!-- <p id='line0'>There's supposed to be a game here</p> -->
      <div>
        <div class="row">
          <q-btn color="black" class="box" v-on:click="makeMove(0, 0)">{{ board[0][0] }}</q-btn>
          <q-btn color="black" class="box" v-on:click="makeMove(0, 1)"> {{ board[0][1] }} </q-btn>
          <q-btn color="black" class="box" v-on:click="makeMove(0, 2)">{{ board[0][2] }}</q-btn>
        </div>
        <div class="row">
          <q-btn color="black" class="box" v-on:click="makeMove(1, 0)">{{ board[1][0] }}</q-btn>
          <q-btn color="black" class="box" v-on:click="makeMove(1, 1)">{{ line1[1] }}</q-btn>
          <q-btn color="black" class="box" v-on:click="makeMove(1, 2)">{{ line1[2] }}</q-btn>
        </div>
        <div class="row">
          <q-btn color="black" class="box" v-on:click="makeMove(2, 0)">{{ line2[0] }}</q-btn>
          <q-btn color="black" class="box" v-on:click="makeMove(2, 1)">{{ line2[1] }}</q-btn>
          <q-btn color="black" class="box" v-on:click="makeMove(2, 2)">{{ line2[2] }}</q-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    this.board.push(this.line0)
    this.board.push(this.line1)
    this.board.push(this.line2)
    console.log('board getting pushed')
  },
  data () {
    return {
      body: 'Welcome from John.vue',
      board: [],
      line0: ['_', '_', '_'],
      line1: ['_', '_', '_'],
      line2: ['_', '_', '_'],
      turn: 0,
      message: 'No message'
    }
  },
  methods: {
    routeTo: function (path) {
      this.$router.push(path).catch(() => false)
    },
    makeMove: function (line, index) {
      console.log(line, index, this.turn)
      if (this.board[line][index] !== 'O' && this.board[line][index] !== 'X') {
        if (this.turn % 2 === 0) { // O goes on even turns
          this.board[line][index] = 'O'
          this.turn = this.turn + 1
        } else { // X goes on odd turns
          this.board[line][index] = 'X'
          this.turn = this.turn + 1
        }
      } else {
        console.log('invalid user input')
        this.message = 'Do not place over other pieces'
      }
      if (this.line0[0] === 'O' && this.line0[1] === 'O' && this.line0[2] === 'O') {
        this.message = 'O wins'
      } else if (this.line0[0] === 'X' && this.line0[1] === 'X' && this.line0[2] === 'X') {
        this.message = 'X wins'
      } else if (this.line1[0] === 'O' && this.line1[1] === 'O' && this.line1[2] === 'O') {
        this.message = 'O wins'
      } else if (this.line1[0] === 'X' && this.line1[1] === 'X' && this.line1[2] === 'X') {
        this.message = 'X wins'
      } else if (this.line2[0] === 'O' && this.line2[1] === 'O' && this.line2[2] === 'O') {
        this.message = 'O wins'
      } else if (this.line2[0] === 'X' && this.line2[1] === 'X' && this.line2[2] === 'X') {
        this.message = 'X wins'
      } // line 0 - 2 horizontal, still need slants and verts
      this.$forceUpdate()
    },
    resetFunction: function () {
      for (let i = 0; i < 3; i = i + 1) {
        for (let loop = 0; loop < 3; loop = loop + 1) {
          this.board[i][loop] = '_'
        }
      }
      this.message = 'No message'
      this.$forceUpdate()
    }
  }
}
</script>

<style>
.box {
  width: 50px;
  height: 50px;
  border: red solid 4px;
}
</style>
