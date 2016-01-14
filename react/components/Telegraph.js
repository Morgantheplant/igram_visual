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
    { 
      this._repeatElements({
        elName:'span',
        content: 'V',
        className: 'w',
        len: 5
      }) 
  }
  </div>
  <div className="base-cord-end">VVVV</div>
  <div className="base-cord-flat" style={ cordAngle } >VVVVVVVVVV</div>
  <div className="back-knob-contianer">
  <div className="back-knob-top"></div>
  {
    this._repeatElements({
      className: 'back-knob-inner-',
      len: 6
    })
  }
  <div className="back-knob-bottom"></div>
  </div>  
  <div className="forward-knob-contianer">
  {
    this._repeatElements({
      className: 'forward-knob-inner-',
      len: 6
    })
  }
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
  {
    this._repeatElements({
      className: 'base-knob-forward-inner-',
      len: 3
    })
  }
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
  },
  _repeatElements: function(options){
    options = options || {};
    options.elName = options.elName || 'div';
    options.len = options.len || 1; 
    options.content = options.content || '';
    options.className = options.className || '';
    var items = []
    for (var i = 0; i < options.len; i++) {
      items.push(<options.elName className={options.className+i} key={i}>{ options.content }</ options.elName>)
    };
    return items;
  }
});

module.exports = Telegraph;