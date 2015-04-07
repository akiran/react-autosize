jest.dontMock('../index.jsx');
jest.dontMock('autosize/src/autosize');


describe('basic react test', function() {
  it('should have some text inside textarea', function() {
    var React = require('react/addons');
    var TestUtils = React.addons.TestUtils;
    var Textarea = require('../index.jsx');
    var basicTextarea = TestUtils.renderIntoDocument(<Textarea defaultValue='some text' />);
    expect(basicTextarea.getDOMNode().value.trim()).toEqual('some text');
  });

  // it('should update text with input', function() {
  //   var React = require('react/addons');
  //   var TestUtils = React.addons.TestUtils;
  //   var Textarea = require('../index.jsx');
  //   var basicTextarea = TestUtils.renderIntoDocument(<Textarea defaultValue='some text' />);
  //   TestUtils.Simulate.change(basicTextarea, {target: {value: '!!!'}});
  //   expect(basicTextarea.getDOMNode().textContent.trim()).toEqual('some text!!!');
  // });

  // it('should increase height', function() {
  //   var React = require('react/addons');
  //   var TestUtils = React.addons.TestUtils;
  //   var Textarea = require('../index.jsx');
  //   var basicTextarea = TestUtils.renderIntoDocument(<Textarea defaultValue='some text' />);
  //   // var initalHeight = window.getComputedStyle(basicTextarea.getDOMNode()).height;
  //   var initalHeight = basicTextarea.getDOMNode().style.height;
  //   TestUtils.Simulate.input(basicTextarea, {target: {value: 'some more text'}});
  //   // var newHeight = window.getComputedStyle(basicTextarea.getDOMNode()).height;
  //   var newHeight = basicTextarea.getDOMNode().style.height;
  //   expect(initalHeight).not.toEqual(newHeight);
  // });
});