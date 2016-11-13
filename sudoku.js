$(document).ready(function(){
	var row_units = [1,2,3,4,5,6,7,8,9]
	var column_units = [1,2,3,4,5,6,7,8,9]
	var block_units = [[11,12,13,21,22,23,31,32,33], [14,15,16,24,25,26,34,35,36], [17,18,19,27,28,29,37,38,39],
	[41,42,43,51,52,53,61,62,63], [44,45,46,54,55,56,64,65,66], [47,48,49,57,58,59,67,68,69],
	[71,72,73,81,82,83,91,92,93], [74,75,76,84,85,86,94,95,96], [77,78,79,87,88,89,97,98,99]];
	
	var BoardHighlight = []
	for (var i=0; i<9; i++) {
		BoardHighlight.push([0,0,0,0,0,0,0,0,0])
	}

	var Vals = [];
	Vals.push([ 6, 7,-1,-1,-1,-1, 1,-1,-1])
	Vals.push([-1, 4,-1,-1,-1, 2,-1, 5, 3])
	Vals.push([-1, 8, 5, 4,-1,-1,-1, 7, 9])
	Vals.push([ 7,-1,-1, 6,-1,-1, 9,-1,-1])
	Vals.push([ 8, 9, 6,-1,-1,-1, 2, 1, 5])
	Vals.push([-1,-1, 1,-1,-1, 9,-1,-1, 7])
	Vals.push([ 5, 2,-1,-1,-1, 6, 7, 3,-1])
	Vals.push([ 9, 1,-1, 8,-1,-1,-1, 2,-1])
	Vals.push([-1,-1, 8,-1,-1,-1,-1, 9, 1])
	
	function fillVals() {
		for(var i=0;i<9;i++){
			for(var j=0;j<9;j++){
				if(Vals[i][j] > 0) {
					var a = "#box_"+(j+1)+(i+1);
					$(a).html(Vals[i][j]);
				} else {
					var a = "#box_"+(j+1)+(i+1);
					$(a).html(' ');
				}
			}
		}
	}
	fillVals()

	function addall(x,y) {
		for(var i=0; i<9; i++) {
			if(BoardHighlight[x][i] != 2)
				BoardHighlight[x][i] = 1;
			if(BoardHighlight[i][y] != 2)
				BoardHighlight[i][y] = 1;
		}
		var z = (Math.floor((y)/3))*3 + (Math.floor((x)/3))
		console.log(z)
		console.log(block_units[z])
		for(i in block_units[z]) {
			var a = block_units[z][i]
			if(BoardHighlight[Math.floor(a%10) - 1][Math.floor (a/10) - 1] != 2)
				BoardHighlight[Math.floor(a%10) - 1][Math.floor (a/10) - 1] = 1;
		}
	}

	function highlightrequired() {
		console.log(BoardHighlight);
		for (var i=0; i<9; i++) {
			for(var j=0; j<9; j++) {
				if(BoardHighlight[i][j] == 2) {
					$("#box_"+(j+1)+(i+1)).css('background-color', 'red');
				} else if(BoardHighlight[i][j] == 1) {
					$("#box_"+(j+1)+(i+1)).css('background-color', 'yellow');
				} else if(Vals[i][j] > 0){
					$("#box_"+(j+1)+(i+1)).css('background-color', 'white');
				} else {
					$("#box_"+(j+1)+(i+1)).css('background-color', 'green');
				}
			}
		}

		for(var i = 0; i<9; i++) {
			for(var j=0; j<9; j++) {
				BoardHighlight[i][j] = 0;
			}
		}
	}

	function findVal(value_to_find) {		
		for (var i=0; i<9; i++) {
			for (var j=0; j<9; j++) {
				if(Vals[i][j] == value_to_find) {
					BoardHighlight[i][j] = 2;
					console.log(i,j);
					addall(i,j);
				}
			}
		}
		highlightrequired();
	}


	$(".smallest_unit").mouseover(function(){
		var to_change_background = [];
		var x = $(this).attr('id');
		var row_info = x[5]
		var col_info = x[4]
		
	})

	$('.smallest_unit').mouseleave(function(){
		var to_change_background = [];
		var x = $(this).attr('id');
		var row_info = x[5]
		var col_info = x[4]

	})

	$('select').on('change', function() {
		findVal(this.value);
	})
})