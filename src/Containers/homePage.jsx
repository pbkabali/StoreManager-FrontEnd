import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import {
  Grid,
  Button,
  Form,
  GridColumn,
  Segment,
  Header
} from "semantic-ui-react";
import { connect } from "react-redux";
import { loginAction } from "../redux/actions/loginAction";

export class HomePage extends Component {
  state = {
    username: "user1",
    password: "user123"
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  loginUser = () => {
    const { username, password } = this.state;
    const payload = {
      username,
      password
    };
    this.props.loginAction(payload);
    this.setState({
      redirect: true
    });
  };

  renderRedirect = () => {
    if (this.props.loggedIn) {
      localStorage.setItem("token", this.props.loginResponse.access_token);
      return <Redirect to="/products" />;
    }
  };
  render() {
    return (
      <div
        style={{
          marginTop: "180px",
          marginBottom: "140px"
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
                  Enter your login credentials
                </Header>
                <br />
                <Form width={2}>
                  <Form.Input
                    icon="user"
                    iconPosition="left"
                    placeholder="Username"
                    required
                    onChange={this.onInputChange}
                    name="username"
                  />
                  <br />
                  <Form.Input
                    type="password"
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    required
                    onChange={this.onInputChange}
                    name="password"
                  />
                </Form>
                <br />
                <br />
                <Button
                  size="large"
                  onClick={this.loginUser}
                  loading={this.props.loading}
                >
                  Login
                </Button>
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
    loading: state.login.loading,
    loginResponse: state.login.loginResponse,
    loggedIn: state.login.isLoggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginAction: payload => dispatch(loginAction(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
