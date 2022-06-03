import React, {useRef} from 'react';
import {Container, Row, Col, Form} from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e)=> {
    e.preventDefault();
    emailjs.sendForm(
      'service_byrzh8f', 'template_zx1zbqb', formRef.current, 'user_7H7oImSWAWG5ORY280BgJ')
      .then((result) => {
          console.log(result.text)
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  }
  
  return (
    <Container className="container">
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Form.Group as={Row} className="mb-3" controlId="contactPerson">
        <Form.Label className="formLabel" column sm={2}>
          Name
        </Form.Label>
        <Col sm={8}>
          <Form.Control type="text" placeholder="Name" name="userName"/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="subject">
        <Form.Label className="formLabel" column sm={2}>
          Subject
        </Form.Label>
        <Col sm={8}>
          <Form.Control type="text" placeholder="Subject" name="userSubject"/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="email">
        <Form.Label className="formLabel" column sm={2}>
          E-mail
        </Form.Label>
        <Col sm={8}>
          <Form.Control type="email" placeholder="E-mail" name="userEmail" />
        </Col>
      </Form.Group>
      
      <Form.Group as={Row} className="mb-3" controlId="message">
        <Form.Label className="formLabel" column sm={2}>Message: </Form.Label>
        <Col sm={8}>
          <Form.Control as="textarea" rows={10} name="message"></Form.Control>
        </Col>
      </Form.Group>
      
      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <button className="button" type="submit">Send</button>
        </Col>
      </Form.Group>
      {done && "Thanks for your message :)"}
      </Form>
    </Container>
      
  );
}






// const Contact = () => {
//   return (
//     <Container className="container">
//     <Form>
//       <Form.Group as={Row} className="mb-3" controlId="contactPerson">
//         <Form.Label className="formLabel" column sm={2}>
//           Name
//         </Form.Label>
//         <Col sm={8}>
//           <Form.Control type="text" placeholder="Name" />
//         </Col>
//       </Form.Group>

//       <Form.Group as={Row} className="mb-3" controlId="subject">
//         <Form.Label className="formLabel" column sm={2}>
//           Subject
//         </Form.Label>
//         <Col sm={8}>
//           <Form.Control type="text" placeholder="Subject" />
//         </Col>
//       </Form.Group>

//       <Form.Group as={Row} className="mb-3" controlId="email">
//         <Form.Label className="formLabel" column sm={2}>
//           E-mail
//         </Form.Label>
//         <Col sm={8}>
//           <Form.Control type="email" placeholder="E-mail" />
//         </Col>
//       </Form.Group>
      
//       <Form.Group as={Row} className="mb-3" controlId="message">
//         <Form.Label className="formLabel" column sm={2}>Message: </Form.Label>
//         <Col sm={8}>
//           <Form.Control as="textarea" rows={10}></Form.Control>
//         </Col>
//       </Form.Group>
      
//       <Form.Group as={Row} className="mb-3">
//         <Col sm={{ span: 10, offset: 2 }}>
//           <button className="button" type="submit">Send</button>
//         </Col>
//       </Form.Group>
      
//       </Form>
//     </Container>
      
//   );
// }

export default Contact;
