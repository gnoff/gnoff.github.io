'use strict';

var React = require('react')
var domready = require('domready')
var dimsum = require('dimsum')
var _ = require('lodash')

var Everscroll = require('react-everscroll')

var styles = require('./styles')

var index = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z']

var spinner = <div style={styles.spinner}><div className="spinner" /></div>
var ListView = React.createClass({
  _loading: false,

  getInitialState(){
    return {
      index: index
    }
  },

  renderRow: function(index, renderIndex, isCursor){
    return (
      <div style={isCursor ? styles.cursorRow : styles.row}>
        <h1>{index}</h1>
      </div>
    )
  },

  loadMore(){
    if(!this._loading){
      this._loading = true
      setTimeout(()=>{
        var index = this.state.index
        for(var i = 0; i<5; i++){
          index.push(dimsum.sentence())
        }
        this.setState({index: index})
        console.log('new data appended to index')
        this._loading = false
      }, 2000)
    }
  },

  render: function() {
    return (
        <div style={styles.container}>
          <Everscroll
            ref="everscroll"
            reverse={false}
            style={styles.scroll}
            rowIndex={_.clone(this.state.index)}
            renderRowHandler={this.renderRow}
            renderCount={7}
            onEndReached={this.loadMore}
            backCap={spinner}
            />
          <p>hello world</p>
        </div>
      )
  }
});

domready(function(){
  React.render(<ListView />, document.body);
})