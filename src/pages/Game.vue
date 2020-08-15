<template>
  <q-page>
    <h1> This is game.vue, new location for games </h1>
    <div align="center">
      <div>
        <p> {{ message }} </p>
      </div>
      <div>
        <q-btn rounded v-on:click="resetFunction()"> reset </q-btn>
      </div>
      <div class="q-ml-xl q-mt-xl q-mb-xl q-mr-xl"> <!-- this is tic tac toe -->
        <div v-for="(row, r) in board" v-bind:key="row.id">
          <q-btn
            color="black" class="box"
            v-for="(col, c) in row"
            v-bind:key="col.id"
            v-on:click="makeMove(r, c)"
          >
            {{ board[r][c] }}
          </q-btn>
        </div>
        <!-- <div class="row">
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
        </div> -->
      </div>
      <div> <!-- this is checkers -->
        <h4> checkers </h4>
        <div>
          <p> {{c_message}} </p>
        </div>
        <div>
          <q-btn rounded v-on:click="Cendturn()"> End Turn </q-btn>
        </div>
        <div class="column items-center">
          <div
            class="row"
            v-for="(row, r) in checkers_board"
            v-bind:key="row.id"
          >
            <div
              class="box"
              v-for="(col, c) in row"
              v-bind:key="col.id"
            >
              <div
                class="flex flex-center text-green relative-position"
                v-bind:class="(r + c) % 2 == 0 ? 'bg-black' : r === selected[0] && c === selected[1] && checkers_board[r][c] !== '_' ? 'bg-yellow' : ''"
                style="height: 100%;"
                v-on:click="c_makeMove(r, c)"
                v-ripple
              >
                {{ checkers_board[r][c] }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  created () {
    // building normal board
    this.board.push(this.line0)
    this.board.push(this.line1)
    this.board.push(this.line2)
    // building checkers board
    this.checkers_board.push(['_', 'o', '_', 'o', '_', 'o', '_', 'o'])
    this.checkers_board.push(['o', '_', 'o', '_', 'o', '_', 'o', '_'])
    this.checkers_board.push(['_', 'o', '_', 'o', '_', 'o', '_', 'o'])
    for (let loop = 0; loop < 2; loop = loop + 1) {
      this.checkers_board.push(this.cline)
      this.cline = ['_', '_', '_', '_', '_', '_', '_', '_']
    }
    this.checkers_board.push(['x', '_', 'x', '_', 'x', '_', 'x', '_'])
    this.checkers_board.push(['_', 'x', '_', 'x', '_', 'x', '_', 'x'])
    this.checkers_board.push(['x', '_', 'x', '_', 'x', '_', 'x', '_'])
  },
  data () {
    return {
      body: 'Welcome from Game.vue',
      board: [],
      line0: ['_', '_', '_'],
      line1: ['_', '_', '_'],
      line2: ['_', '_', '_'],
      turn: 0,
      message: 'No message',
      tie: 0,
      // below are checker variables
      checkers_board: [],
      cline: ['_', '_', '_', '_', '_', '_', '_', '_'],
      move_status: 'selecting', // selecting or moving
      selected: [-1, -1],
      c_message: 'O, choose the piece you wanna move',
      c_turn: 0, // O goes on even turns
      cEnd: false
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
        this.tie = this.tie + 1
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
        // hardcode for line 0 - 2 horizontal, still need slants and verts
      } else if (this.tie === 9) {
        this.message = 'It is a tie'
      }
      this.$forceUpdate()
    },
    resetFunction: function () {
      for (let i = 0; i < 3; i = i + 1) {
        for (let loop = 0; loop < 3; loop = loop + 1) {
          this.board[i][loop] = '_'
        }
      }
      this.message = 'No message'
      this.tie = 0
      this.$forceUpdate()
    },
    // below is for checkers
    c_makeMove: function (row, col) {
      if (row === parseInt(row, 10) && col === parseInt(col, 10) && row <= 8 && row >= 0 && col >= 0 && col <= 8) {
        if (this.move_status === 'selecting' && this.C_Selectable(row, col) === true) {
          this.selected = [row, col]
          if (this.checkers_board[this.selected[0]][this.selected[1]] === '_') {
            this.move_status = 'selecting'
            this.c_message = 'That piece is not yours'
            return 'invalid input'
          } else {
            this.move_status = 'moving'
            this.$forceUpdate()
            this.c_turn % 2 === 0 ? this.c_message = 'O, choose where you wanna move your piece' : this.c_message = 'X, choose where you wanna move your piece'
          }
        } else if (this.move_status === 'moving') { // moving
          const movable = this.checkers_is_movable(this.selected[0], this.selected[1], row, col)
          if (movable === true) {
            this.checkers_board[row][col] = this.checkers_board[this.selected[0]][this.selected[1]]
            this.checkers_board[this.selected[0]][this.selected[1]] = '_'
            this.move_status = 'selecting'
            this.$forceUpdate()
            this.c_turn = this.c_turn + 1
            this.c_turn % 2 === 0 ? this.c_message = 'O, choose the piece you want to move' : this.c_message = 'X, choose the piece you want to move'
            this.selected = [-1, -1]
            return 'finished turn'
          } else if (movable === 'jump') {
            this.checkers_board[row][col] = this.checkers_board[this.selected[0]][this.selected[1]]
            this.checkers_board[this.selected[0]][this.selected[1]] = '_'
            this.move_status = 'jump'
            this.selected = [row, col]
            this.c_turn % 2 === 0 ? this.c_message = 'O, choose where you want to jump next, or press end turn' : this.c_message = 'X, choose where you want to jump next, or press end turn'
          } else {
            this.move_status = 'selecting'
          }
        } else if (this.move_status === 'jump') {
          // this.c_turn % 2 === 0 ? this.c_message = 'O, choose where you want to jump next, or press end turn' : this.c_message = 'X, choose where you want to jump next, or press end turn'
          const x = this.selected[0]
          const y = this.selected[1]
          let jumpable = false
          // x and y are OG locations
          if (row - x === 2 && Math.abs(col - y) === 2 && this.checkers_board[x][y] === 'o') { // jumping
            if (this.checkers_board[x + 1][y - 1] === 'x' || this.checkers_board[x + 1][y - 1] === 'X') {
              this.checkers_board[x + 1][y - 1] = '_'
              jumpable = true
            } else if (this.checkers_board[x + 1][y + 1] === 'x' || this.checkers_board[x + 1][y + 1] === 'X') {
              this.checkers_board[x + 1][y + 1] = '_'
              jumpable = true
            }
          }
          if (x - row === 2 && Math.abs(col - y) === 2 && this.checkers_board[x][y] === 'x') {
            if (this.checkers_board[x - 1][y - 1] === 'o' || this.checkers_board[x - 1][y - 1] === 'O') {
              console.log('set to blank')
              this.checkers_board[x - 1][y - 1] = '_'
              jumpable = true
            } else if (this.checkers_board[x - 1][y + 1] === 'o' || this.checkers_board[x - 1][y + 1] === 'O') {
              console.log('set to blank')
              this.checkers_board[x - 1][y + 1] = '_'
              // line above is supposed to remove the defeated chess piece
              // doesn't work
              jumpable = true
            }
          }
          if (jumpable === true) {
            this.checkers_board[row][col] = this.checkers_board[this.selected[0]][this.selected[1]]
            this.checkers_board[this.selected[0]][this.selected[1]] = '_'
            this.selected = [row, col]
            // no matter what, it will stay in jump mode until user press end turn. If the move isn't valid it simply won't be made
            this.c_message = 'Your jump has been made, click where to jump enxt or end turn'
            return 'finished'
          } else {
            this.c_message = 'Your jump is not valid. Click another space to jump or end turn'
            return 'finished'
          }
        } else {
          this.move_status = 'selecting'
          this.c_message = 'this piece can not be moved, choose the piece you want to move again'
          return 'error'
        }
      } else {
        this.c_message = 'Redo your turn, enter valid val pls'
        this.move_status = 'selecting'
      } // First click selects piece. Second click moves it to a location.
    },
    checkers_is_movable: function (x, y, a, b) {
      // capitalized pieces are kings.
      // x and y are OG location
      if (this.checkers_board[a][b] === '_' && this.checkers_board[x][y] !== '_') {
        if (this.checkers_board[x][y] === 'x') {
          if (x - a === 1 && Math.abs(b - y) === 1) { // normal move
            return true
          } else if (x - a === 2 && Math.abs(b - y) === 2) {
            if (this.checkers_board[x - 1][y - 1] === 'o' || this.checkers_board[x - 1][y - 1] === 'O') {
              this.checkers_board[x - 1][y - 1] = '_'
              this.move_status = 'jump'
              return 'jump'
            } else if (this.checkers_board[x - 1][y + 1] === 'o' || this.checkers_board[x - 1][y + 1] === 'O') {
              this.checkers_board[x - 1][y + 1] = '_'
              this.move_status = 'jump'
              return 'jump'
            }
          }
        } else if (this.checkers_board[x][y] === 'o') {
          if (a - x === 1 && Math.abs(b - y) === 1) { // nomal move
            return true
          } else if (a - x === 2 && Math.abs(b - y) === 2) { // jumping
            if (this.checkers_board[x + 1][y - 1] === 'x' || this.checkers_board[x + 1][y - 1] === 'X') {
              this.checkers_board[x + 1][y - 1] = '_'
              this.move_status = 'jump'
              return 'jump'
            } else if (this.checkers_board[x + 1][y + 1] === 'x' || this.checkers_board[x + 1][y + 1] === 'X') {
              this.checkers_board[x + 1][y + 1] = '_'
              this.move_status = 'jump'
              return 'jump'
            }
          }
        }
        // return true
      } else {
        this.c_message = 'There is a problem with your move, redo your turn'
        return false
      }
    },
    C_Selectable: function (a, b) {
      if (this.c_turn % 2 === 0 && this.checkers_board[a][b] === 'o') {
        return true
      } else if (this.c_turn % 2 === 0 && this.checkers_board[a][b] === 'O') {
        return true
      } else if (this.c_turn % 2 !== 0 && this.checkers_board[a][b] === 'x') {
        return true
      } else if (this.c_turn % 2 !== 0 && this.checkers_board[a][b] === 'X') {
        return true
      }
      return false
    },
    Cendturn: function () {
      if (this.move_status === 'jump') {
        this.move_status = 'selecting'
        this.$forceUpdate()
        this.c_turn = this.c_turn + 1
        this.c_turn % 2 === 0 ? this.c_message = 'O, choose the piece you want to move' : this.c_message = 'X, choose the piece you want to move'
        this.selected = [-1, -1]
        return 'finished turn'
      }
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
