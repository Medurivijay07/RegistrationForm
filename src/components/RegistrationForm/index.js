// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    isSuccessful: false,
    firstname: '',
    lastname: '',
    showFirstnameErr: false,
    showLastnameErr: false,
  }

  onChangeFirstname = event => {
    this.setState({firstname: event.target.value})
  }

  onChangeLastname = event => {
    this.setState({lastname: event.target.value})
  }

  onBlurFirstname = () => {
    const {firstname} = this.state
    if (firstname === '') {
      this.setState({showFirstnameErr: true})
    } else {
      this.setState({showFirstnameErr: false})
    }
  }

  onBlurLastname = () => {
    const {lastname} = this.state
    if (lastname === '') {
      this.setState({showLastnameErr: true})
    } else {
      this.setState({showLastnameErr: false})
    }
  }

  submitForm = event => {
    event.preventDefault()
    const {firstname, lastname} = this.state

    const isFirstNameEmpty = firstname === ''
    const isLastNameEmpty = lastname === ''
    if (isFirstNameEmpty || isLastNameEmpty) {
      this.setState({
        showFirstnameErr: isFirstNameEmpty,
        showLastnameErr: isLastNameEmpty,
      })
    } else {
      this.setState({isSuccessful: true})
    }
  }

  onReset = () => {
    this.setState({
      isSuccessful: false,
      firstname: '',
      lastname: '',
      showFirstnameErr: false,
      showLastnameErr: false,
    })
  }

  renderErrorMsg = () => (
    <>
      <p className="error-message">Required</p>
    </>
  )

  renderfirstName = () => {
    const {firstname} = this.state
    return (
      <>
        <label htmlFor="firstname">FIRST NAME</label>
        <input
          type="text"
          id="firstname"
          value={firstname}
          onChange={this.onChangeFirstname}
          onBlur={this.onBlurFirstname}
          placeholder="First name"
          className="input-style"
        />
      </>
    )
  }

  renderLastname = () => {
    const {lastname} = this.state
    return (
      <>
        <label htmlFor="lastname">LAST NAME</label>
        <input
          type="text"
          id="lastname"
          value={lastname}
          placeholder="Last name"
          onBlur={this.onBlurLastname}
          onChange={this.onChangeLastname}
          className="input-style"
        />
      </>
    )
  }

  renderRegistrationForm = () => {
    const {showFirstnameErr, showLastnameErr} = this.state
    return (
      <>
        <form onSubmit={this.submitForm}>
          <div className="first-name-input">{this.renderfirstName()}</div>
          {showFirstnameErr ? this.renderErrorMsg() : ''}
          <div className="first-name-input">{this.renderLastname()}</div>
          {showLastnameErr ? this.renderErrorMsg() : ''}
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </>
    )
  }

  renderSuccessView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p>Submitted Successfully</p>
      <button
        type="button"
        className="another-response-button"
        onClick={this.onReset}
      >
        Submit Another Response
      </button>
    </>
  )

  render() {
    const {isSuccessful} = this.state
    return (
      <div className="registration-container">
        <h1 className="registration-title">Registration</h1>
        <div className="form-card">
          {isSuccessful
            ? this.renderSuccessView()
            : this.renderRegistrationForm()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
