import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Form } from 'react-bootstrap';
import './Login.scss';

export default function Login({ onSubmit }) {
    const [rememberMe, setRememberMe] = useState(true);
    const { register, handleSubmit, errors } = useForm();
    const { t } = useTranslation();

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit(onSubmit)}>
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

                <input value={t('Login')} type="submit" />
            </form>
        </div>
    );
   }

