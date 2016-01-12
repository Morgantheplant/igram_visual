import React from 'react'
import ReactDOM from 'react-dom'
import Timer from './public/onOffTimer'



class App extends React.Component {
  constructor () {
    super()
    this.state = { n: 0 }
  }
  render () {
    return (<div>
<div className="container">
  <div className="bar-container" id="bar" >
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
  <div id="cord" className="base-cord-flat">VVVVVVVVVV</div>
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
  <div className="interval-dial"><input className="interval-slider" type="range"></input></div>
</div>
</div>
<p>Time:<span id="time"></span></p>
<p>Code:<span id="code"></span></p>
<p>Sentence:<span id="sentence"></span></p>
    </div>)
  }
  handleClick () {
    this.setState({ n: this.state.n + 1 })
  }
}
ReactDOM.render(<App />, document.querySelector('#content'))


Timer();

