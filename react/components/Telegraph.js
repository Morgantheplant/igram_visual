var React = require('react')
var Timer = require('../utilities/Timer')

var Telegraph = React.createClass({
  render: function() {
    var barAngle = {
      transform: "rotate("+ (this.props.barAngle) + "deg)"
    }

    var cordAngle = {
      transform: "rotate("+ (this.props.barAngle * -1) + "deg)"
    }

    return (<div>
<div className="container">
  <div className="bar-container" style={ barAngle } >
    <div className="bar">
    </div>
  <div className="base-cord">VVVVVVVVVVVVV</div>
  <div className="base-cord-curved">
    <span className="w0">V</span>
    <span className="w1">V</span>
    <span className="w2">V</span>
    <span className="w3">V</span>
    <span className="w4">V</span>
  </div>
  <div className="base-cord-end">VVVV</div>
  <div className="base-cord-flat" style={ cordAngle } >VVVVVVVVVV</div>
  <div className="back-knob-contianer">
  <div className="back-knob-top"></div>
  <div className="back-knob-inner-1"></div>
  <div className="back-knob-inner-2"></div>
  <div className="back-knob-inner-3"></div>
  <div className="back-knob-inner-4"></div>
  <div className="back-knob-inner-5"></div>
  <div className="back-knob-inner-6"></div>
  <div className="back-knob-bottom"></div>
  </div>  
  <div className="forward-knob-contianer">
  <div className="forward-knob-inner-1"></div>
  <div className="forward-knob-inner-2"></div>
  <div className="forward-knob-inner-3"></div>
  <div className="forward-knob-inner-4"></div>
  <div className="forward-knob-inner-5"></div>
  <div className="forward-knob-inner-6"></div>
  <div className="forward-knob-bottom"></div>
  <div className="bottom-conductor-top"></div>
  <div className="bottom-conductor-bottom"></div>
  </div>
  <div className="big-knob"></div>
  <div className="big-knob-base"></div>
  <div className="below-big-knob"><div className="below-big-knob-inner"></div></div>
  </div>
  <div className="base-knob-forward-contianer">
  <div className="base-knob-forward">
  <div className="base-knob-forward-inner-1"></div>
  <div className="base-knob-forward-inner-2"></div>
  <div className="base-knob-forward-inner-3"></div>
  </div>
  </div>
  <div className="base-container">
  <div className="base-hinge">
  <div className="base-hinge-top"></div>
  <div className="base-hinge-bar"></div>
  <div className="base-hinge-knob-front">o</div>
  <div className="base-hinge-rod">|</div>
  <div className="base-hinge-bar-bottom"></div>
  <div className="base-hinge-knob-">|||||||||</div>
  <div className="base-hinge-coil">XXXX</div>
</div>
<div className="extra-coil">VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV</div>
  <div className="base-bottom-1">/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////</div>
  <div className="base-bottom-2">\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\<br/>\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\</div>
  <div className="base-bottom-3">/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////</div>
  <div className="interval-dial"><input className="interval-slider" min="0" max="5" type="range" onChange={ this._updateIntervals} ></input></div>
</div>
</div>
    </div>)
  },
  _updateIntervals: function(e){
    Timer.interval = e.target.value * 1000
  }
});

module.exports = Telegraph;