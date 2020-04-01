import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import './Register.scss';

export default function Register({ onSubmit }) {
    const { t } = useTranslation();
    const { register, handleSubmit, errors, watch } = useForm();
    const password = useRef({});
    password.current = watch('password');

    return (
        <div className="register-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>{t('Email address or username')}</label>
                <input name="email" type="email" placeholder={t('Enter email or username')} ref={register({ required: true, minLength: 3 })} />
                {errors.email && <p>{t('Email address or username is required')}</p>}

                <label>{t('Password')}</label>
                <input name="password" type="password" placeholder={t('Password')} ref={register({ required: true, minLength: 4 })} />
                {errors.password && <p>{t('Password is required')}</p>}

                <label>{t('Confirm Password')}</label>
                <input name="confirmPassword" type="password" placeholder={t('Confirm Password')} ref={register({
                    required: true,
                    validate: value =>
                        value === password.current || t('Password and confirm password must match')
                })} />
                {errors.confirmPassword && <p>{errors.confirmPassword.message || t('Confirm password is required')}</p>}

                <input value={t('Register')} type="submit" />
            </form>
        </div>
    );
}