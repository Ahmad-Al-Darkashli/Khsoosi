import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
  
    }
  }

  componentDidMount() {
    
  }

  render () {
    return (<div>
      <h1>Test</h1>
     
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));