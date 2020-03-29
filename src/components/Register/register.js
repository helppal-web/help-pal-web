import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import './register.scss';

export default function Register(props) {
    const { t } = useTranslation();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
                //TODO: reaching here meaning the input is valid
        //need to do dispatch action to register with data 
    }; // your form submit function which will invoke after successful validation
    return (
        <div className="register-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>{t('Email address or username')}</label>
                <input name="email" type="email" placeholder={t('Enter email or username')} ref={register} />
                <label>{t('Password')}</label>
                <input
                    name="password" type="password" placeholder={t('Password')}
                    ref={register({ required: true, maxLength: 10 })}
                />
                {errors.password && <p>This field is required</p>}

                <label>{t('Confirm Password')}</label>
                <input
                    name="confirmPassword" type="password" placeholder={t('Confirm Password')}
                    ref={register({ required: true, maxLength: 10 })}
                />
                {errors.confirmPassword && <p>This field is required</p>}
                <input value={t('Register')} type="submit" />
            </form>
        </div>
    );
}