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
    if (this.state.formType === "signin") {
      return (
          <a href="#" onClick={this.switchForm("signup")}>
            {"Haven't Joined? Click to Sign Up!"}
          </a>
      );
    }
    else {
      return (
        <div className="switch-form">
          <a href="#" onClick={this.switchForm("signin")}>
            {"Already Signed Up? Click to Sign In!"}
          </a>
          <a>{"Demo Login"}</a>
        </div>
      );
    }
  }

  render() {
    const { username, password } = this.state.user;

    const signState = this.state.formType == "signin" ? "Sign In" : "Sign Up";

    let errors;
    if (this.props.errors.length > 0) {
      errors = this.props.errors.map((message, i) =>
        <li key={i}>{message}</li>);
    }

    return (
      <section className="session-form">
        <h1>{signState} to</h1>
        <h1>Save Favorites!</h1>
        <h3>And View Recent Searches</h3>
        <div className="session-separator"></div>
        <form onSubmit={this.processForm}>
          <ul className="errors">
            {errors}
          </ul>
          <input type="text"
                 value={username}
                 onChange={this.updateState("username")}
                 placeholder="Username" />
          <input type="password"
                 value={password}
                 onChange={this.updateState("password")}
                 placeholder="Password"/>
          <button>
            {signState}
          </button>
          { this.makeLink() }
        </form>
      </section>
    );
  }
}

export default SessionForm;
