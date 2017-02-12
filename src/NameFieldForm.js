import React from 'react';
import Styling from './Styling';

class NameField extends React.Component {
  constructor(props) {
  super(props);
  this.focus = this.focus.bind(this);
  }

  focus() {
    this.textInput.focus();
  }

  componentDidMount() {
    this.textInput.focus();
  }

  render() {
    return (
      <div>
        <label style={Styling.fieldLabel}>
          Username:
          <input ref={input => this.textInput = input} style={Styling.inputStyle} type="text" placeholder="Enter name" value={this.props.name} onChange={this.props.handleNameChange} required/>
        </label>
      </div>
    );
  }
}

NameField.propTypes = {
  name: React.PropTypes.string
};


export default NameField;
