var Timer = {
	interval: 1000,
	intervalListeners: [],
	timerStarted: false,
	timer: 0,
	_updateLoop: function(fn, onStop){
		if(!this.timerStarted){
	    	this.timerStarted = true;  
		}
	    
	    if(this.timer > 10){
	    	this.timerStarted = false;
            if(onStop) onStop();
	    	return null;
	    }
	    fn(this.timer);

	    this.timer++;         
	    setTimeout(function(){
	    	this._updateLoop(fn);
	    }.bind(this), this.interval);
	},
	setTempo: function(newInterval){
       this.interval = newInterval;
       this.intervalListeners.forEach(function(item){
         if(typeof item === "function") item();
       });
	}
};

module.exports = Timer;