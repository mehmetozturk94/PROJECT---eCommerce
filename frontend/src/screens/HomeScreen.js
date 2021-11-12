import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import Product from "../components/Product";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await axios
        .get("http://localhost:3000/api/products")
        .then((response) => {
          console.log(response.data);
          setProducts(response.data);
        });
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product key={product.id} product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeScreen;
