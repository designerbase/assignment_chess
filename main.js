/* author: Bineesh P Balan
   assignment: diagonal highlights
*/
var config = {
	"size":8,
	"primary__color":"#fff",
	"secondary__color":"#000",
	"custom_message":"your message",
	"is_responsive":false,
	"append_element":"li",
	"board":"#board_wrapper ul",
}

window.onload = function() {
	createBoard(config.size);
}

function createBoard(size) {
	var play_board = document.querySelectorAll(config.board);
	for(var i=0;i<size;i++) {
		for(var j="0";j<size;j++) {
		    var append_child = document.createElement(config.append_element)
			play_board[0].appendChild(append_child);
		}
	}
}

function makeMove() {

}

function clear() {

}

function highlightBox() {

}