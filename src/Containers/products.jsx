import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Button, Card } from "semantic-ui-react";
import { getProductsAction } from "../redux/actions/productActions";
import { _SUCCEEDED } from "../redux/actions/actionTypes";

export class Products extends Component {
  componentDidMount() {
    this.fetchProducts();
  }
  fetchProducts = () => {
    if (this.props.loading) {
      return;
    }
    this.props.getProductsAction();
  };
  render() {
    const { loading, status } = this.props;
    let toRender;

    if (loading) {
      toRender = <h1>Loading....</h1>;
    } else if (status === _SUCCEEDED) {
      let items = [];
      this.props.products.available_products.map(product => {
        items.push({
          header: product.product_name,
          description: "Available stock: " + product.quantity,
          meta: "Unit Price: " + product.unit_price + " USD"
        });
      });
      toRender = (
        <div>
          <Button color="orange">Available Products</Button>
          <br />
          <br />
          <Card.Group items={items} />
        </div>
      );
    } else {
      toRender = "Could not load Products";
    }
    return <Container>{toRender}</Container>;
  }
}

const mapStateToProps = state => {
  return {
    loading: state.products.loading,
    products: state.products.products,
    error: state.products.error,
    status: state.products.status
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProductsAction: () => dispatch(getProductsAction())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
