var React = require('react');
var ReactDOM = require('react-dom');
//var Timer = require('./public/onOffTimer');
var Telegraph = require('./components/Telegraph');
var Display = require('./components/Display');
var Timer = require('./utilities/Timer');
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
          sentence: '',
          code: '',
          words: '',
          pressedState: "OFF" 
       }
    },

    code: [],
    letters:[],
    words: [],

    render: function() {
        return (<div className="telegraph-container" >
            <Telegraph barAngle={this.state.barAngle} />
            <Display time={ this.state.timer } words={ this.state.words } interval={ Timer.interval } code={ this.state.code } letters={ this.state.letters } sentence={ this.state.sentence }/>   
        </div>)
    },
    _addTelegraphListeners: function(){

        window.addEventListener('keydown', function(e){
            //prevent keydown from firing more than once 
            if(!this.state.calledOnce && e.keyCode === 32){
                //move bar angle signal as pressed event
                this.setState({
                    barAngle: this.state.barAngle * -1,
                    calledOnce: true
                })
                this._interpretLastDepress();
            }    
        }.bind(this))

        window.addEventListener('keyup', function(e){
            //spacebar up 
            if(e.keyCode === 32){
                //move bar angle up and signal as depress
                this.setState({
                    barAngle: this.state.barAngle * -1,
                    calledOnce: false
                })
                this._interpretLastPress();
            }
        }.bind(this))

        //add listener for timer interval change
        Timer.intervalListeners.push(this._updateInterval);
    },

    _interpretLastDepress: function(){
        this.setState({pressedState:"ON"})

        if(Timer.timerStarted){
            //interprests if pause is a letter-bit space, letter space or word space
            var spaceType = Utilities.interpretLastPause(Timer.timer);
            this[spaceType]();
            Timer.timer = 0;
        }
        // restart timer if it has stopped
        if(!Timer.timerStarted){
            Timer._updateLoop(this._updateTimerState, this._wordSpacing);
            //possibly add check to see if at beginning of sentence
            //843 290 5501
        }
    },

    _interpretLastPress: function(){
        var code = Utilities.interpretLastPress(Timer.timer);
        this.code.push(code);
        this.setState({
            sentence: 'You entered a : ' + code + "    Current Code: " + this.code.join(),
            code: this.code.join(),
            letters: this.letters.join(),
            pressedState: "OFF"
        })
        Timer.timer = 0;
    },

    _letterCodeSpacing: function(item){
        this.setState({
            sentence: 'Depressed for <= 3. You are still on the same letter! So far you have: ' + this.code.join()
        })
    },

    _letterSpacing: function(){
        var letterCode = this.code.join("");
        var letter = Utilities.codeToLetter[letterCode];
        this.letters.push(letter);
        this.code = [];
        this.setState({
            sentence: 'Depressed > 3 && < 7. You entered the letter: ' + letter,
            letters: this.letters.join()
        })
    },

    _wordSpacing: function(item){
        
        if(this.code.length){
            this._letterSpacing();
        }

        if(this.letters.length){
            var word = this.letters.join("");
            this.words.push(word);
            this.letters = [];
            this.setState({
                sentence: "Depressed > 7 you entered a word: "+ word + "Your sentence reads: " + this.words.join(" "),
                words: this.letters.join('')
            })
        }
       
    },
    

    _updateTimerState: function(t){
        var info;
        if(t <= 3 && this.state.pressedState === "ON"){
            info = "Still A DOT  \".\" ";
        }

        if(t > 3 && this.state.pressedState === "ON"){
            info = "This is now a DASH \"-\"";
        }
        
        this.setState({
            timer: t,
            info: info
        })


    },

    _updateInterval: function(){
        this.setState.call(this, {
            interval: Timer.interval
        });
    }
        
});

ReactDOM.render(<App />, document.querySelector('#content'))




