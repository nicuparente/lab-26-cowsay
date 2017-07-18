import './style/main.scss'
import React from 'react'
import ReactDom from 'react-dom'
import faker from 'faker'
import cowSay from 'cowsay-browser'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      phrase: '',
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
        phrase: cowSay.say({text: faker.lorem.sentence(1)}),
    })
  }
  
  render(){
    return (
      <div>
        <h1>Generate Cowsay</h1>
        <button onClick={this.handleClick}>click me!!!</button>
        <pre>{this.state.phrase}</pre>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'))