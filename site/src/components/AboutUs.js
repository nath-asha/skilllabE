import React from 'react';
import { Accordion, Card } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <div>
      <h1>About Us Page</h1>
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Organization Name
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <p>Address: Your Address</p>
              <p>Location: Your Location</p>
              <p>Contact: Your Contact Details</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        {/* Add more Accordion sections as needed */}
      </Accordion>
    </div>
  );
};

export default AboutUs;
