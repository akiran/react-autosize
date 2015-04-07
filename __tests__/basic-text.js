jest.dontMock('../index.jsx');

describe('basic react test', function() {
  it('should find react component', function() {
    var React = require('react/addons');
    var TestUtils = React.addons.TestUtils;
    var Textarea = require('../index.jsx');

    var basicTextarea = TestUtils.renderIntoDocument(<Textarea defaultValue='some text' />);
    expect(basicTextarea.getDOMNode().value.trim()).toEqual('some text');
  });
});