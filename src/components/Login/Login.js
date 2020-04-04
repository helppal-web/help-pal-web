import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Form } from 'react-bootstrap';
import './Login.scss';
import { useHistory } from "react-router-dom";

export default function Login({ onSubmit }) {
    const [rememberMe, setRememberMe] = useState(true);
    const { register, handleSubmit, errors, setError } = useForm();
    const { t } = useTranslation();
    const history = useHistory();

    function submitHandler(data) {
        onSubmit(data).then(() => {
            history.push('/app');
        }).catch((err) => {
            if (err.wrongPass || err.response && err.response.status === 404) {
                setError('submitError', 'invalid', 'Email or Password is incorrect');
            } else {
                setError('submitError', 'invalid', 'An error has occured');
            }
        });

    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit(submitHandler)}>
                <label>{t('Email address or username')}</label>
                <input name="email" type="email" placeholder={t('Enter email or username')} ref={register({ required: true, minLength: 3 })} />
                {errors.email && <p>{t('Email address or username is required')}</p>}


                <label>{t('Password')}</label>
                <input name="password" type="password" placeholder={t('Password')} ref={register({ required: true, minLength: 4 })} />
                {errors.password && <p>{t('Password is required')}</p>}

                <Form.Check
                    type="checkbox"
                    name="rememberMe"
                    label={t('Keep me signed in')}
                    value={rememberMe}
                    checked={rememberMe}
                    ref={register}
                    onChange={(event) => setRememberMe(event.target.checked)}
                />

                {errors.submitError && <p>{errors.submitError.message}</p>}
                <input value={t('Login')} type="submit" />
            </form>
        </div>
    );
}
