var React = require('react')

var Display = React.createClass({
  render: function() {
    return (<div className="display-container">
		<p>Time:<span id="time">{ this.props.time }</span></p>
		<p>Code:<span id="code">{ this.props.code }</span></p>
		<p>Sentence:<span id="sentence">{ this.props.sentence }</span></p>
      </div>)
  }
});

module.exports = Display




