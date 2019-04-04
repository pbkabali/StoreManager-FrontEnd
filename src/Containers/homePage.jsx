import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { testAction } from "../redux/actions/testAction";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Button onClick={this.props.testAction} loading={this.props.loading}>
          Testing 123
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.test.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    testAction: () => dispatch(testAction())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
