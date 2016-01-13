module.exports = {
	encode: function(pressed, time){
		if(pressed){
			// If longer than 3x interval && less than 7x interval count as bar
			if(time > 3 && time <= 7){
				return "-"
			}

	        // If shorter than 3x interval count as beep
			if(time <= 3){
				return "."
			}

	        // if longer than 7x throw error.
			if(time > 7){
				return "-"
			}
		}

		if(!pressed){
		   // letter spacing	
	        if(time > 3 && time < 7){
	       	    return "z"
	        }
	       // word spacing
	        if(time >= 7){
	            return "|" 
	        }
	       // letter code spacing
	       if(time <= 3 ){
	            return "x"
	       } 
	    
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
		"--.": "G",
		"....": "H",
		"..": "I",
		".---": "J",
		"-.-.": "K",
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