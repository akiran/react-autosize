var React = require('react');
var autosize = require('autosize/src/autosize');

var Textarea = React.createClass({
  componentDidMount: function() {
    autosize(this.getDOMNode());
  },
  render: function () {
    return (
      <textarea {...this.props}>
        {this.props.children}
      </textarea>
    );
  }
});

module.exports = Textarea;