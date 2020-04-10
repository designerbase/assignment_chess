/* author: Bineesh P Balan
   assignment: diagonal highlights
*/
var config = {
	"size":8,
	"secondary__color":"#000",
	"append_element":"li",
	"board":"#board_wrapper ul",
}

window.onload = function() {
	createBoard();
	selectBox();
	document.querySelector('#clear').addEventListener('click',function() {
		clear();
	});
}

function createBoard() {
	var play_board = document.querySelectorAll(config.board);
	var index =0;
	for(var i=0;i<config.size;i++) {
		for(var j="0";j<config.size;j++) {
		    var append_child = document.createElement(config.append_element);
		    var m = [j,i];
		    append_child.setAttribute("data-index",m);
		    if(j%2!=0 && i%2==0 || j%2==0 && i%2!=0) {
		    	append_child.setAttribute("style","background-color:"+config.secondary__color);
		    }
		    append_child.addEventListener("click",selectBox);
			play_board[0].appendChild(append_child);
		}
	}
}

function selectBox(e) {
	if(e) {
		highlightBox(e.target);
		chooseDiagonals(e.target);
	}
}

function clear() {
	document.querySelectorAll('#board_wrapper ul')[0].innerHTML = "";
	createBoard();
}

function highlightBox(column) {
	column.setAttribute("style","background-color:red");
}

function chooseDiagonals(elem) {
	clear();
	var get_index = [elem.getAttribute('data-index')];
	get_index = get_index[0].split(',');
	var x = parseInt(get_index[0]);
	var y = parseInt(get_index[1]);
	callHighlight([x,y]);
	for(var i=x-1,j=y-1;i>=0 && j>=0 ; i--,j--){
	    callHighlight([i,j]);
	}
	for(var i=x-1,j=y+1;i>=0 && j<8; i--,j++){
	    callHighlight([i,j]);
	}
	for(var i=x+1,j=y-1;i<=7 && j>=0; i++,j--){
	    callHighlight([i,j]);
	}
	for(var i=x+1,j=y+1;i<=7 && j<=7; i++,j++){
	    callHighlight([i,j]);
	}
}

function callHighlight(data) {
	var string = '"' + data + '"';
	highlightBox(document.querySelectorAll("li[data-index="+string+"]")[0]);
}