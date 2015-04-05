var React = require('react');
var autosize = require('autosize/src/autosize');

var Textarea = React.createClass({displayName: "Textarea",
  componentDidMount: function() {
    autosize(this.getDOMNode());
  },
  render: function () {
    return (
      React.createElement("textarea", React.__spread({},  this.props), 
        this.props.children
      )
    );
  }
});

module.exports = Textarea;