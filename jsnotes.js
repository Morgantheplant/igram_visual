var units = {
	".": 1,
	"-": 3,
	letterPart: -1,
    letterSpacing: -3,
    wordSpacing: -7
}

var dict = {
	A: [".","-"],
	B: ["-",".",".","."],
	C: ["-",".","-","."],
	D: ["-","-","."],
	E: ["."],
	F: [".",".","-","."],
	G: ["-","-","."],
	H: [".",".",".","."],
	I: [".","."],
	J: [".","-","-","-"],
	K: ["-",".","-","."],
	L: [".","-",".","."],
	M: ["-","-"],
	N: ["-","."],
	O: ["-","-","-"],
	P: [".","-","-","."],
	Q: ["-","-",".","-"],
	R: [".","-","."],
	S: [".",".","."],
	T: ["-"],
	U: [".",".","-"],
	V: [".",".",".","-"],
	W: [".","-","-"],
	X: ["-",".",".","-"],
	Y: ["-",".",".","-"],
	Z:["-","-",".","."]
}

var soundQueue = [];
var interval = 1000;


function encodeWord(str){
	str.split("").forEach(encodeLetter);
}


function encodeLetter(letter, i, letters){
	// look  for letter to decode
    if(letter){
    	//look up letter parts and encode
	    dict[letter.toUpperCase()].forEach(encodeLetterBeep)
        // add spacing between letters except last item
	    if(i !== letters.length-1){
	        soundQueue.push("letterSpacing")
	    }
    }
    // look for " " to separate words
    if(!letter){
      soundQueue.push(units["wordSpacing"])
    }
}

function encodeLetterBeep(beep, index, list){
	// find length on or off
    soundQueue.push(units[beep])
    // add spacing between beeps 
    if(index !== list.length-1){
        soundQueue.push(units["letterPart"])
    }
}

function readQueue(i){
}


