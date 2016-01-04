window.onload = app;


function app(){	

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

	var letterLookup = {
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

	//notes for interpreting moorse code

	// Start timer 1 when pressed, end when unpressed
	  // If longer than 3x interval && less than 7x interval count as bar
	  // If shorter than 3x interval count as beep
	  // if longer than 7x throw error.
	// Start timer 2 when not pressed end when pressed or longer than 7X interval
	  

	// Loop checks timer
	// On timer 
	// starts counting up until off or longer than 7x
	// depress timer
	// start starts counting until on or longer than 7x
	//Push to queue that will be interpreted 


	var interval = 250
	var timerStarted = false;
	var timer = 0;
	var code = [];
	var firstKeydown = true;
	var currentState = ["off", "on"];
	var st = 0;
	var sentence = [];
	var bar = document.getElementById('bar');
	var cord = document.getElementById('cord');
	var value = -2;
	var timeDiv = document.getElementById('time');
	var codeDiv = document.getElementById('code');
	var sentenceDiv = document.getElementById('sentence');

	function updateLoop(){
		if(!timerStarted){
	    	timerStarted = true;  
		}
	    
	    if(timer > 10){
	    	timerStarted = false;
	    	return null;
	    }
	    updates();

	    timer++;         
	    setTimeout(updateLoop, interval);
	}

	function updates(){
		timeDiv.innerText = currentState[1-st] + ' ' + timer;
	    codeDiv.innerText = code.join("");
	    sentenceDiv.innerText = sentence.join("");
	}

	window.addEventListener('keydown', function(e){
		if(firstKeydown && e.keyCode === 32){
			
			cord.style.transform = "rotate("+ (value) + "deg)"
	        bar.style.transform = "rotate("+ (value *= -1) + "deg)"
	        
	        if(timerStarted){
	        	st = 0
	        	var item = codeLookup(currentState[st],timer);
	        	if(item === "z" || item === "|"){
	        		item.split('|').forEach(function(){
	                    var letter = code.join("").replace(/x/g,'');
	                    console.log(letter)
	        		    sentence.push(letterLookup[letter] || "Letter Not Found");
	        		})
	        	}
	        	if(item !== "z"){
			        code.push(item)
	        	}
			    timer = 0;
			}

			if(!timerStarted){
				updateLoop();
			}

			firstKeydown = false;
		}	
	})



	window.addEventListener('keyup', function(e){
		if(e.keyCode === 32){
			cord.style.transform = "rotate("+ (value) + "deg)"	
	        bar.style.transform = "rotate("+ (value *= -1) + "deg)"
			st = 1;
			code.push(codeLookup(currentState[st],timer))
			timer = 0;	
		    firstKeydown = true;
		}
	})

	function codeLookup(state, time){
		if(state === "on"){
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

		if(state === "off"){
		   // letter spacing	
	        if(time > 3 && time < 7){
	       	    return "z"
	        }
	       // word spacing
	        if(time >= 7){
	            return "|" 
	        }
	       // letter coe spacing
	       if(time <= 3 ){
	            return "x"
	       } 
	    

		}

	}
}




