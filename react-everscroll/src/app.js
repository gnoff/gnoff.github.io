'use strict';

var React = require('react');
var domready = require('domready');

var ListView = React.createClass({
  render: function() {
    return (
        <div>
          <p>hello world</p>
        </div>
      )
  }
});

domready(function(){
  React.render(<ListView />, document.body);
})
