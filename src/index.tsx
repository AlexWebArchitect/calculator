import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.css'

// ========================================

interface digitProps {
  value: string
}
interface digitState {}

class Digit extends React.Component <digitProps, digitState> {
  render() {
    return (
      <button className="digit">
        {this.props.value}
      </button>
    )
  }
}

interface boardProps {}
interface boardState {}

class Board extends React.Component <boardProps, boardState>  {
  renderDigit(val: string) {
    return <Digit value={val} />
  }
  
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderDigit('7')}{this.renderDigit("8")}{this.renderDigit("9")}{this.renderDigit("*")}
        </div>
        <div className="board-row">
          {this.renderDigit("4")}{this.renderDigit("5")}{this.renderDigit("6")}{this.renderDigit("-")}
        </div>
        <div className="board-row">
          {this.renderDigit("1")}{this.renderDigit("2")}{this.renderDigit("3")}{this.renderDigit("+")}
        </div>
        <div className="board-row">
          {this.renderDigit("C")}{this.renderDigit("0")}{this.renderDigit(".")}{this.renderDigit("/")}
        </div>
      </div>
    );
  }
}

interface Props {}
interface State {
  display: string
}

class Calculator extends React.Component <Props, State> {
  constructor() {
    super()
    this.state = {
			display: '0'
		}
  }

  render() {
    return (
		  <div className="display">
        {this.state.display}
        <Board />
        <button className="equal">
          =
        </button>
      </div>
    )
  }
}

ReactDOM.render(<Calculator />, document.getElementById('root'))
