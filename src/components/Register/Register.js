import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import './Register.scss';
import { TextField } from '@material-ui/core';
import { Button } from 'react-bootstrap';

export default function Register({ onSubmit }) {
    const { t } = useTranslation();
    const { register, handleSubmit, errors, watch } = useForm();
    const password = useRef({});
    password.current = watch('password');
    const [user, setUser] = useState({ email: "", password: ""   })

    const onSubmitHandler = () => {
        onSubmit(user)
        .then(response => {
            if(response.status == 200){
                window.alert(t('SignUpSuccessfully'));
            }
            else {
                window.alert('We are having some issues, please try later');
            }
        })
        .catch(error => console.error(error));
    }

    return (
        <div className="register-container">
            <form onSubmit={handleSubmit(onSubmitHandler)}>

                <TextField
                    className="d-block mt-3 mb-2"
                    label={t('Email address')}
                    placeholder={t('Enter email')}
                    name="email"
                    variant="standard"
                    onChange={(event) => setUser({ ...user, email: event.target.value })}
                    inputRef={register({ required: true, minLength: 3 })}
                />
                {errors.email && <p>{t('Email address is required')}</p>}


                <TextField
                    className="d-block mt-3 mb-2"
                    label={t('Password')}
                    placeholder={t('Password')}
                    name="password"
                    variant="standard"
                    type="password"
                    onChange={(event) => setUser({ ...user, password: event.target.value })}
                    inputRef={register({ required: true, minLength: 4 })}
                />
                {errors.password && <p>{t('Password is required')}</p>}


                <TextField
                    className="d-block mt-3 mb-2"
                    label={t('Confirm Password')}
                    placeholder={t('Confirm Password')}
                    name="confirmPassword"
                    variant="standard"
                    type="password"
                    inputRef={register({
                        required: true, validate: value =>
                            value === password.current || t('Password and confirm password must match')
                    })}
                />
                {errors.confirmPassword && <p>{errors.confirmPassword.message || t('Confirm password is required')}</p>}

                <div className="d-flex justify-content-end mt-5">
                    <div>
                        {errors.submitError && <p>{errors.submitError.message}</p>}
                    </div>
                    <div>
                        <Button className="px-4" variant="helppal" type="submit">{t('Register')}</Button>
                    </div>
                </div>
            </form>
        </div>
    );
}
