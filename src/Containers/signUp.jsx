import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import {
  Grid,
  Button,
  Form,
  GridColumn,
  Segment,
  Header,
  Message
} from "semantic-ui-react";
import { connect } from "react-redux";
import { signUpAction } from "../redux/actions/signUpAction";

export class SignUp extends Component {
  state = {
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: ""
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  registerUser = () => {
    const {
      firstName,
      lastName,
      username,
      password,
      confirmPassword
    } = this.state;
    const payload = {
      first_name: firstName,
      last_name: lastName,
      username: username,
      password: password
    };
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
    } else {
      this.props.signUpAction(payload);
    }
  };

  renderRedirect = () => {
    if (this.props.signUpResponse) {
      alert(this.props.signUpResponse.Response + "Please login to proceed");
      return <Redirect to="/" />;
    }
  };

  render() {
    let showError = false;
    if (this.props.error && !this.props.loading) {
      showError = true;
    }
    return (
      <div
        style={{
          marginTop: "120px",
          marginBottom: "80px"
        }}
      >
        <Grid>
          <Grid.Row>
            <GridColumn width={5} />
            <GridColumn width={6} textAlign="center">
              <Segment color="red" padded="very">
                {this.renderRedirect()}
                <Header color="grey" as="h2" textAlign="center">
                  Welcome to Polos Store Manager App!
                </Header>
                <br />
                <Header color="grey" as="h4" textAlign="center">
                  Enter your details to register
                </Header>

                {showError ? (
                  <Message color="red">{this.props.error.response}</Message>
                ) : null}

                <br />
                <Form width={2}>
                  <Form.Input
                    icon="user"
                    iconPosition="left"
                    placeholder="First Name"
                    required
                    onChange={this.onInputChange}
                    name="firstName"
                  />
                  <Form.Input
                    icon="user"
                    iconPosition="left"
                    placeholder="Last Name"
                    required
                    onChange={this.onInputChange}
                    name="lastName"
                  />
                  <Form.Input
                    icon="user"
                    iconPosition="left"
                    placeholder="Username"
                    required
                    onChange={this.onInputChange}
                    name="username"
                  />
                  <Form.Input
                    type="password"
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    required
                    onChange={this.onInputChange}
                    name="password"
                  />
                  <Form.Input
                    type="password"
                    icon="lock"
                    iconPosition="left"
                    placeholder="Confirm Password"
                    required
                    onChange={this.onInputChange}
                    name="confirmPassword"
                  />
                </Form>
                <br />
                <br />
                <Button
                  size="large"
                  onClick={this.registerUser}
                  loading={this.props.loading}
                >
                  Create Account
                </Button>
                <br />
                <br />
              </Segment>
            </GridColumn>
            <GridColumn width={5} />
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.signUp.loading,
    signUpResponse: state.signUp.signUpResponse,
    error: state.signUp.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUpAction: payload => dispatch(signUpAction(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
