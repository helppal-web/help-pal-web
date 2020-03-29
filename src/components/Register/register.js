import React from 'react';
import './register.scss';
import { useForm } from 'react-hook-form'
import { Form, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';


export default function Register(props) {
    const { register, handleSubmit, errors } = useForm()
    const onSubmit = data => console.log(data)
    const { t } = useTranslation();
    return (
        // <div className="register-container" >
            <form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email address" ref={register()} />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" ref={register()} />
                </Form.Group>


                <Form.Group controlId="confirm-password">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" ref={register()} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    {t('login')}
                </Button>
                {errors.password && <p>This field is required</p>}
            </form>
        // </div>
    );
}