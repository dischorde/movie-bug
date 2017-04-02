import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: "",
        password: ""
      },
      formType: this.props.formType
    };

    this.processForm = this.processForm.bind(this);
    this.updateState = this.updateState.bind(this);
    this.clearAndClose = this.clearAndClose.bind(this);
    this.switchForm = this.switchForm.bind(this);
    this.processForm = this.processForm.bind(this);
    this.makeLink = this.makeLink.bind(this);
  }

  updateState(field) {
    return e => {
      let curUser = Object.assign({}, this.state.user);
      curUser[field] = e.currentTarget.value;
      return this.setState({
        user: curUser
      });
    };
  }

  clearAndClose() {
    this.props.receiveErrors([]);
    this.props.closeModal();
  }

  processForm(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    if (this.state.formType === "signin") {
      this.props.signin(user).then(() => this.clearAndClose());
    }
    else {
      this.props.signup(user).then(() => this.clearAndClose());
    }
  }

  switchForm(opposite) {
    return e => {
      e.preventDefault();
      this.props.receiveErrors([]);
      this.setState({
        formType: opposite
      });
    };
  }

  makeLink() {
    if (this.state.formType === 'signin') {
      return (
          <a href="#" onClick={this.switchForm("signup")}>
            {"Haven't Joined? Click to Sign Up!"}
          </a>
      );
    }
    else {
      return (
          <a href="#" onClick={this.switchForm("signin")}>
            {"Already Signed Up? Click to Sign In!"}
          </a>
      );
    }
  }

  render() {
    const { username, password } = this.state.user;

    let errors;
    if (this.props.errors.length > 0) {
      errors = this.props.errors.map((message, i) =>
        <li key={i}>{message}</li>);
    }

    return (
      <section className="session-form">
        <form onSubmit={this.processForm}>
          <ul className="errors">
            { errors }
          </ul>
          <label>Username:
            <input type="text"
                   value={username}
                   onChange={this.updateState("username")}
                   placeholder="Username" />
          </label>
          <label>Password:
            <input type="password"
                   value={password}
                   onChange={this.updateState("password")}
                   placeholder="Password"/>
          </label>
          <button>
            {this.state.formType === "signin" ? "Sign In" : "Sign Up"}
          </button>
        </form>
        { this.makeLink() }
      </section>
    );
  }
}

export default SessionForm;
