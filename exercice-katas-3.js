/*
Chessboard

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
 At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #

When you have a program that generates this pattern, 
define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
*/

'use strict';


//version pour board de 8*8

function Board(){
let gridboard = "";

    for (let i = 0; i < 4;i++){  
        gridboard +=  " # # # #\n";
        gridboard += " # # # #\n \b"
    };
    console.log(gridboard);
};

Board();


//version avec un board de taille à choisir

function ChessBoard(){
    let board ="\n";
    let height = 0;
    let width = 0;
    let size = +prompt("entrer un largeur",4);
    
    for (let j = 0; j < size; j++){
        while(width < size){
        board = board + " #";
        ++width;
        };
        board = board+ "\n";
        while(height < size){
            board = board + "# ";
            ++height;
        };
        board = board + "\n";
        width = 0;
        height = 0;
        };
      console.log(board);
    }