var React = require('react');

var Display = React.createClass({
  render: function() {
    return (<div className="display-container">
		<p>Time: <span id="time">{ this.props.time }</span></p>
		<p>Code:<span id="code">{ this.props.code }</span></p>
        <p>Letters:<span id="letters">{ this.props.letters }</span></p>
        <p>Words:<span id="sentence">{ this.props.words }</span></p>
		<p>Message:<span id="sentence">{ this.props.sentence }</span></p>
        <p>Current interval: {this.props.interval /1000 }s between beeps</p>
        <h3> Morse Code cheat sheet:</h3>
        <ul>
        <li>"." = pressed for 1 x interval </li>
        <li>"-" = pressed for 3 x interval</li>
        <li>Spaces between letter code are 1 x interval</li>
        <li> Spaces between actual letters are 3 x interval</li>
        <li>Spaces between words are 7 x interval</li>
        </ul>
      </div>)
  }
});

module.exports = Display




