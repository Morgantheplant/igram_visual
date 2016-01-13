var Timer = {
	interval: 1000,
	timerStarted: false,
	timer: 0,
	_updateLoop: function(fn){
		if(!this.timerStarted){
	    	this.timerStarted = true;  
		}
	    
	    if(this.timer > 10){
	    	this.timerStarted = false;
	    	return null;
	    }
	    fn(this.timer)

	    this.timer++;         
	    setTimeout(function(){
	    	this._updateLoop(fn);
	    }.bind(this), this.interval);
	}
}

module.exports = Timer