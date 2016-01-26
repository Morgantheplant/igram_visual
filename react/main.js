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
          pressed: true,
          code: [],
          letters:[],
          words: []
       }
    },

    render: function() {
        return (<div className="telegraph-container" >
            <Telegraph barAngle={this.state.barAngle} />
            <Display time={ this.state.timer } code={ this.state.code } sentence={ "sentence will go here"}/>   
        </div>)
    },
    _addTelegraphListeners: function(){

        window.addEventListener('keydown', function(e){
            //only called once for keydown event 
            if(!this.state.calledOnce && e.keyCode === 32){
                //move bar angle signal as pressed event
                this.setState({
                    barAngle: this.state.barAngle * -1,
                    calledOnce: true,
                    pressed: true
                })
                this._interpretPress();
            }    
        }.bind(this))

        window.addEventListener('keyup', function(e){
            //spacebar up 
            if(e.keyCode === 32){
                //move bar angle up and signal as depress
                this.setState({
                    barAngle: this.state.barAngle * -1,
                    calledOnce: false,
                    pressed: false
                })
                this._interpretPress();
            }
        }.bind(this))
    },

    _interpretPress: function(){
        if(Timer.timerStarted){
            var item = Utilities.encode(this.state.pressed, Timer.timer);
            //Todo: refactor Utilities into this method
            if(item === "*" || item === "|"){
               this._letterSpacing()
            }
            
            if(item === "|"){
               this._wordSpacing();
            }

            if(item !== "*" && item !== "|"){
              this._letterCodeSpacing();
            }
            // timer is not synced to state 
            Timer.timer = 0;
        }

        if(!Timer.timerStarted){
            Timer._updateLoop(this._updateTimerState);
        }
    },

    _letterCodeSpacing: function(item){
         this.setState({code: this.state.code.concat(item) })
    },

    _wordSpacing: function(item){
        var word = this.state.letters.join("");
        if(this.state.words.length){
            this.setState({
                words: this.state.letters.concat(" ")
            })
        }
        this.setState({
            letters: [],
            words: this.state.letters.concat(word)
        })
    },
    
    _letterSpacing: function(item){
        var code = this.state.code.join("");
        var letter = Utilities.codeToLetter[code];
        this.setState({
            letters: this.state.letters.concat(letter),
            code: [] 
        })
    },

    _updateTimerState: function(t){
        this.setState({timer: t})
    }
        
});

ReactDOM.render(<App />, document.querySelector('#content'))




