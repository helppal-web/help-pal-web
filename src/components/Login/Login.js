import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Form, Button } from 'react-bootstrap';
import './Login.scss';
import { useHistory } from "react-router-dom";
import { TextField } from '@material-ui/core';

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
                <TextField
                    className="d-block mt-4 mb-2"
                    label={t('Email address')}
                    placeholder={t('Enter email')}
                    name="email"
                    variant="standard"
                    inputRef={register({ required: true, minLength: 3 })}
                />
                {errors.email && <p>{t('Email address is required')}</p>}


                <TextField
                    className="d-block mt-4 mb-2"
                    label={t('Password')}
                    placeholder={t('Password')}
                    name="password"
                    variant="standard"
                    type="password"
                    inputRef={register({ required: true, minLength: 4 })}
                />
                {errors.password && <p>{t('Password is required')}</p>}

                <div className="d-flex justify-content-between mt-5">
                    <div>
                        <Form.Check
                            type="checkbox"
                            name="rememberMe"
                            label={t('Remember me')}
                            value={rememberMe}
                            checked={rememberMe}
                            ref={register}
                            onChange={(event) => setRememberMe(event.target.checked)}
                        />
                    </div>
                    <div>
                        {errors.submitError && <p>{errors.submitError.message}</p>}
                        <Button className="px-4" variant="helppal" type="submit">{t('Login')}</Button>
                    </div>
                </div>
            </form>
        </div>
    );
}
