import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.css'

interface Props {}
interface State {
	test: string
}

class Calculator extends React.Component <Props, State> {
  constructor() {
    super()
    this.state = {
			test: "Hello Wolrd!"
		}
  }

  render() {
    return (
      <div>
				<h1>{this.state.test}</h1>
      </div>
    )
  }
}

// ========================================

ReactDOM.render(<Calculator />, document.getElementById("root"))
