var React = require('react');

var Textarea = React.createClass({
  render: function () {
    return (
      <textarea {...this.props}>
        {this.props.children}
      </textarea>
    );
  }
});

module.exports = Textarea;