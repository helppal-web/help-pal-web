import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import './login.scss';

export default function Login(props) {
    const { register, handleSubmit, errors } = useForm();
    const { t } = useTranslation();
    const onSubmit = data => {
        console.log(data);
        //TODO: reaching here meaning the input is valid
        //need to do dispatch action to login with data 
      };
      return (
        <div className="login-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>{t('Email address or username')}</label>
                <input name="email" type="email" placeholder={t('Enter email or username')} ref={register} />


                <label>{t('Password')}</label>
                <input
                    name="password" type="password" placeholder={t('Password')}
                    ref={register({ required: true, maxLength: 10 })}
                />
                {errors.password && <p>This field is required</p>} 

                <input value={t('Login')} type="submit" />
            </form>
        </div>
    );
}