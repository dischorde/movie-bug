import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';
import SessionForm from '../session_form/session_form.jsx';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      formType: "signin"
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.openForm = this.openForm.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal(type) {
    this.setState({
      modalOpen: true,
      formType: type
    });
  }

  openForm(type) {
    return e => {
      e.preventDefault();
      this.openModal(type);
    };
  }

  signOut(e) {
    e.preventDefault();
    this.props.signout()
    .then(() => this.props.router.push("/"));
  }

  render() {
    let profileLink, signInLink, signUpOutButton;
    if (this.props.currentUser) {
      profileLink = <li><Link to="/profile">Profile</Link></li>;
      signUpOutButton = <li><button onClick={this.signOut}>Sign Out</button></li>;
    }
    else {
      signInLink = <li><a href="#" onClick={this.openForm("signin")}>Sign In</a></li>;
      profileLink = <li><a href="#" onClick={this.openForm("signup")}>Profile</a></li>;
      signUpOutButton = <li><button onClick={this.openForm("signup")}>Sign Up</button></li>;
    }

    return (
      <header>
        <div className="nav-logo">
          <span><Link to="/"><h3>MovieBug</h3></Link></span>
        </div>
        <nav className="nav-links">
          <ul>
            <li><Link to="/search">Search</Link></li>
            { profileLink }
            { signInLink }
            { signUpOutButton}
          </ul>
        </nav>

        <Modal
          contentLabel="Modal"
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={
            { overlay : {
                zIndex: '10'
              },
              content : {
              top                   : '50%',
              left                  : '50%',
              right                 : 'auto',
              bottom                : 'auto',
              transform             : 'translate(-50%, -50%)'
          } }}
          >
            <SessionForm formType={this.state.formType}
                         closeModal={this.closeModal}
                         signin={this.props.signin}
                         signup={this.props.signup}
                         receiveErrors={this.props.receiveSessionErrors}
                         errors={this.props.errors} />
        </Modal>
      </header>
    );
  }
}

export default withRouter(NavBar);
