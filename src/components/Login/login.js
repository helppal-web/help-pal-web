import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import './login.scss';
import { useTranslation } from 'react-i18next';

export default function Login(props) {
    const { register, handleSubmit, errors } = useForm();
    const { t } = useTranslation();

    return (
        <div className="login-container" onSubmit={handleSubmit(props.onSubmit)}>
            <Form>
                <Form.Group controlId="email">
                    {/* TODO: Email or username??? */}
                    <Form.Label>Email address or username</Form.Label>
                    <Form.Control type="email" placeholder="Enter email or username" ref={register} />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" ref={register} />
                </Form.Group>
                <Button variant="primary" type="submit">
                {t('login')}
                </Button>
            </Form>
        </div>
    );
}