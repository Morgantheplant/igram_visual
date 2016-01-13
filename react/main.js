var React = require('react')
var ReactDOM = require('react-dom');
//var Timer = require('./public/onOffTimer');
var Telegraph = require('./components/Telegraph');
var Display = require('./components/Display');
var Timer = require('./utilities/Timer')
var Utilities = require('./utilities/Utilities');

var App = React.createClass({
  
    componentDidMount: function() {
        this._addTelegraphListeners();
    },

    getInitialState: function(){
       return {
          barAngle: -2,
          calledOnce: false,
          timer: 0,
          pressed: false
         

       }
    },

    render: function() {
        return (<div className="telegraph-container" >
            <Telegraph barAngle={this.state.barAngle} />
            <Display time={ this.state.timer } code={ "yarble"} sentence={ "sentence will go here"}/>   
        </div>)
    },
    _addTelegraphListeners: function(){

        window.addEventListener('keydown', function(e){
            if(!this.state.calledOnce && e.keyCode === 32){
                this.setState({
                    barAngle: this.state.barAngle * -1,
                    calledOnce: true
                })
                this._interpretPress();
            }    
        }.bind(this))

        window.addEventListener('keyup', function(e){
            if(e.keyCode === 32){
                this.setState({
                    barAngle: this.state.barAngle * -1,
                    calledOnce: false
                })
            }
        }.bind(this))
    },

    _interpretPress: function(){
        if(Timer.timerStarted){
            
            
            // var item = Utilities.encode(this.state.pressed, Timer.timer);
            // if(item === "z" || item === "|"){
            //     item.split('|').forEach(function(){
            //         var letter = code.join("").replace(/x/g,'');
            //         console.log(letter)
            //         sentence.push(letterLookup[letter] || "Letter Not Found");
            //     })
            // }
            // if(item !== "z"){
            //     code.push(item)
            // }
            // timer = 0;
        }

        if(!Timer.timerStarted){
            Timer._updateLoop(this._updateTimerState);
        }
    },

    _updateTimerState: function(t){
        this.setState({timer: t})
    }
        
});

ReactDOM.render(<App />, document.querySelector('#content'))




