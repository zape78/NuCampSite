import { Button, Label, Col, FormGroup } from 'reactstrap';
import { Formik, Field, Form } from 'formik';

const ContactForm = () => {
    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                phoneNum: '',
                email: '',
                agree: false,
                contactType: 'By Phone',
                feedback: ''
            }}
        >

            <Form>
                <FormGroup row>
                    <Label htmlFor='firstName' md='10'>
                        First Name
                    </Label>
                    <Col></Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='lastName' md='10'>
                        Last Name
                    </Label>
                    <Col></Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='phoneNum' md='10'>
                        Phone Number
                    </Label>
                    <Col></Col>

                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='email' md='10'>
                        Email
                    </Label>
                    <Col></Col>
                </FormGroup>
                <FormGroup row>
                    <Label check md={{ size: 4, offset: 2 }}>
                        May we contact you?
                    </Label>
                    <Col></Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='feedback' md='10'>
                        Feedback
                    </Label>
                    <Col></Col>
                </FormGroup>
                <FormGroup row>
                </FormGroup>
            </Form>
        </Formik>
            )
}

            export default ContactForm;