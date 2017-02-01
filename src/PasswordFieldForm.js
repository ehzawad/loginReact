import React from 'react';
import Styling from './Styling';

class PasswordField extends React.Component {
  render() {
    return (
      <div>
        <label style={Styling.fieldLabel}>
          Password:
          <input style={Styling.inputStyle} type="password" placeholder="Enter password" value={this.props.password} onChange={this.props.handlePasswordChange} required/>
        </label>
      </div>
    );
  }
}

PasswordField.propTypes = {
  password: React.PropTypes.string
};


export default PasswordField;
