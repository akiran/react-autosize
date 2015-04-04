var React = require('react');
var Textarea = require('../');


var TextareaDemo = React.createClass({
  componentDidMount: function () {

  },
  render: function () {
    return (
      <Textarea rows="1">Some text</Textarea>
    );
  }
});

React.render(<TextareaDemo />, document.getElementById('rapp'))