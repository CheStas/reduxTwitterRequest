import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {name: 'Medium'};
    }
    handleChange(e) {
      this.setState({name: e.target.value});
    }
    render() {
      return (
        <div className='wrap'>
          <h1>Welcome</h1>
          <p>Hello {this.state.name}</p>
          <input onChange={this.handleChange} defaultValue={this.state.name}/>
        </div>
      );
    }
}

export default App;