# Tic-Tac-Toe

    Made with immense hard-work and love this Tic-tac-toe game 
    is my best project as of now. Made for The Odin Project 
    course, completely by me, with the help of internet, 
    stackoverflow, mdn docs and other free online tutorials.


## GamePlay

1. A grid of 3x3, two player game, one with the option to mark X and other with O
2. X moves first. 
3. The objective is to put their own marks in a row: horizontal, vertical or diagonal.
4. Player puts there marks alternately, the person who got 3 in a row first wins.
5. If none got 3 in a row and the grid is completely filled, draw, new game.


## Code Plan:

* Two player objects, with X and O.
* Game grid array ???

p   p   p

p   p   p   

p   p   p

* Player1 will be computer, making best moves.
* I will play as computer coz I always know the best moves.
* I have options `X` or `O`.

* First `X`. only two places, center, or any of the corners (=> random four)

### Case 1
#### X plays center

| 1 | 2 | 3 |     
|---|---|---|     
| p | p | p |     
| p | p | p |
| p | p | p |


* Player2 now has 8 options
* If they play anywhere in a01, a10, a12, a21, they lose.

* Losing game =>

| 1 | 2 | 3 |     
|---|---|---|     
| p | o | p |     
| p | x | p |
| p | p | p |

==========================================

Any corner wins; random 4

| 1 | 2 | 3 |     
|---|---|---|     
| x | o | p |     
| p | x | p |
| p | p | p |

==========================================

Only Option, all others lose immediatly

| 1 | 2 | 3 |     
|---|---|---|     
| x | o | p |     
| p | x | p |
| p | p | o |   

==========================================

| 1 | 2 | 3 |
|---|---|---|
| x | o | p |
| p | x | p |
| p | p | o |

===========================================

Two Options to win for X, a02, a20

| 1 | 2 | 3 |
|---|---|---|
| x | o | x |
| p | x | p |
| p | p | o |

===========================================

Anything loses for O now

| 1 | 2 | 3 |
|---|---|---|
| x | x | x |
| p | x | p |
| o | p | o |

X wins.

* So how will we proceed?

### MakePlayer


### GameBoard


### Controller


#### Start =>

1. make two players 

2. Assign X or O

3. make a Board, with empty grid

4. Give the controller the empty board and two players

5. Now controller handles the game. 

6. Everything (all actions) happens inside the controller 

7. Controller assigns turn to a player. // Make a method for this

8. Player in turn makes a choice to put their chosen tac into cell.

9. First turn, 9 options.

10. X is computer for this iteration so he always chooses the center cell for X.

11. 




















