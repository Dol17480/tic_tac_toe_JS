var React = require('react');
var ReactDOM = require('react-dom');
import Board from './containers/board.jsx'
import Square from './components/square.jsx'

window.onload = function(){
  ReactDOM.render(
    <Board />,
    document.getElementById('app')
  );
}
