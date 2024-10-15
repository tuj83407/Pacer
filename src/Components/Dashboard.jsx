// src/SalesDashboard.jsx
import React, { useState, useEffect } from 'react';
import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import './Dashboard.css'; // Make sure you have this CSS file for styles

const SalesDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]); // Initialize products as an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch data from the Firebase function when the component mounts
  useEffect(() => {
    const fetchCarListings = async () => {
      try {
        const response = await axios.get('https://pacertest-d818e.cloudfunctions.net/getCarListings');
        setProducts(response.data); // Set the products state to the fetched data
        setLoading(false);
      } catch (err) {
        console.error('Error fetching car listings:', err);
        setError('Failed to load listings. Please try again later.');
        setLoading(false);
      }
    };

    fetchCarListings();
  }, []);

  // Filter products based on the search term
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="text-center my-4">Sales Dashboard</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}
      <Form.Group className="mb-4">
        <Form.Control
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form.Group>
      <Row>
        {filteredProducts.map(product => (
          <Col md={4} key={product.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price.toFixed(2)}</Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SalesDashboard;
