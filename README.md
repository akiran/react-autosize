## react-textarea-autosize
React component to adjust textarea height automatically to fit text.

### Install
`npm install react-textarea-autosize --save`

### Example
```js
var React = require('react'); 
var Textarea = require('react-textarea-autosize');

var TextareaDemo = React.createClass({
  render: function () {
    return (
      <Textarea>
        When you enter more text in this textarea, it height increases automatically instead of showing a scrollbar. 
      </Textarea>
    );
  }
});
```