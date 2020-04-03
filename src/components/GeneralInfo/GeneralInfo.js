import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import './GeneralInfo.scss'
import {toBase64} from '../../helpers'


export default function GenralInfo() {

    const { t } = useTranslation();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = () => {

    }
    function handleFileSelect(evt) {
        var files = evt.target.files; // FileList object

        // use the 1st file from the list
        const image = files[0];
        toBase64(image).then((data) => {
            console.log(data)
        })
    }


    // const toBase64 = file => new Promise((resolve, reject) => {
    //     const reader = new FileReader();
    //     reader.readAsDataURL(file);
    //     reader.onload = () => resolve(reader.result);
    //     reader.onerror = error => reject(error);
    // });

    return (
        <div className="profile-wrapper">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="profile-name-wrapper">
                    <label htmlFor=""> {(t('FirstName'))}</label>
                    <input name="firstName" type="text" ref={register({ required: true })}></input>
                    {errors.firstName && <p className="text-danger"> {t('RequiredField')}</p>}
                    <label > {t('LastName')}</label>
                    <input name="lastName" type="text" ref={register({ required: true })}></input>
                    {errors.lastName && <p className="text-danger"> {t('RequiredField')}</p>}

                </div>

                <div className="address-wrapper">
                    <div>
                        <label> {t('Street')} </label>
                        <input name="street" type="text" ref={register({ required: true })}></input>
                        {errors.street && <p className="text-danger"> {t('RequiredField')}</p>}
                    </div>
                    <div>
                        <label> {t('City')} </label>
                        <input name="city" type="text" ref={register({ required: true })}></input>
                        {errors.city && <p className="text-danger"> {t('RequiredField')}</p>}
                    </div>
                </div>

                <div className="profile-photo-wrapper mt-3">
                    <div className="profile-photo-inner">
                        <p className="mb-2">{t('ProfilePhoto')}</p>
                        <div className="profile-photo-text mb-2">
                            {t('UploadProfilePhotoText')}
                        </div>
                        <div className="upload-photo-wrapper">
                            <CameraAltIcon></CameraAltIcon>
                            <label>{t('UploadPhoto')}</label>
                            <input id="profile-photo-image" onChange={(event) => {
                                handleFileSelect(event)
                            }} type="file" accept="image/*"></input>
                        </div>
                    </div>
                    <div className="profile-photo">
                    </div>
                </div>

                <div>
                    <p>{t('Lanugages')}</p>
                    <div>
                        <label > {t('Hebrew')}</label>
                        <input name="chk-heb" type="checkbox"></input>
                        <label> {(t('English'))}</label>
                        <input name="chk-eng" type="checkbox"></input>
                    </div>
                </div>

                <input type="submit"></input>

            </form>
        </div>
    )
}