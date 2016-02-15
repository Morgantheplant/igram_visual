module.exports = {
	interpretLastPress: function(time){
			// If longer than 3x interval && less than 7x interval count as bar
			if(time > 3 && time <= 7){
				return "-";
			}

	        // If shorter than 3x interval count as beep
			if(time <= 3){
				return ".";
			}

	        // if longer than 7x throw error.
			if(time > 7){
				return "-";
			}

	},

	interpretLastPause: function(time){
		   // letter spacing	
        if(time > 3 && time < 7){
       	    return "_letterSpacing";
        }
       // word spacing
        if(time >= 7){
            return "_wordSpacing"; 
        }
       // letter code spacing
       if(time <= 3 ){
            return "_letterCodeSpacing";
       }

	},

	letterToCode: {
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
	},

	codeToLetter: {
		".-": "A",
		"-...": "B",
		"-.-.": "C",
		"--.": "D",
		".": "E",
		"..-.": "F",
		"--.": "G", //duplicate key D
		"....": "H",
		"..": "I",
		".---": "J",
		"-.-.": "K", //duplicate key C
		".-..": "L",
		"--": "M",
		"-.": "N",
		"---": "O",
		".--.": "P",
		"--.-": "Q",
		".-.": "R",
		"...": "S",
		"-": "T",
		"..-": "U",
		"...-": "V",
		".--": "W",
		"-..-": "X",
		"-..-": "Y",
		"--..": "Z"
	}
}