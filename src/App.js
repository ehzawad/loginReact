import React, { Component } from 'react';
import NameField from './NameFieldForm';
import PasswordField from './PasswordFieldForm';

function validator(field) {
  const {name, password} = field;
  if( name.length > 0 && password.length > 0) {
    return true;
  }
  return false;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {name: '', password: ''};
  }

  handleNameChange(syntheticEvent) {
    this.setState({name: syntheticEvent.target.value});
  }

  handlePasswordChange(syntheticEvent) {
    this.setState({password: syntheticEvent.target.value});
  }

  handleSubmit(event) {
    const {name, password } = this.state;
    alert(`Logged in with name: ${name} password: ${password}`);
  }

  render() {
    let isEnabled = validator(this.state);

    return (
      <div>
        <form style={{'display': 'table', 'margin': '40px auto', 'alignment': 'center'}} onSubmit={this.handleSubmit}>
          <NameField name={this.state.name} handleNameChange={this.handleNameChange} />
          <PasswordField password={this.state.password} handlePasswordChange={this.handlePasswordChange} />
          <input disabled={!isEnabled} type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;
