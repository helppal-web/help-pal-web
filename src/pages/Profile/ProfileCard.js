import React from 'react';
import "./Profile.scss";
import { useTranslation } from 'react-i18next';
import noProfileImage from "../../assets/Profile-pic-popup.svg";


export default function ProfileCard(props) {

    const { t } = useTranslation();

    const user = props.user;
    let language = user.language;
    if (language !== "" && language !== undefined) {
        debugger;
        language = language.charAt(0).toUpperCase() + language.toLowerCase().slice(1);
        language = t(language);
    }


    let imgSrc = user.image;
    let imgClass = "profile-card-img";
    if (imgSrc == "" || imgSrc == null) {
        imgSrc = noProfileImage;
        imgClass = "profile-card-img no-image";
    }

    return (
        <div className="profile-card-wrapper">
            <div className="profile-card-inner">
                <div className="profile-card-header mb-4">
                    <div className="profile-card-img-wrapper">
                        <div className={imgClass}>
                            <img src={imgSrc}></img>
                        </div>
                        <div className="ml-2 mr-2">
                            <div className="profile-card-name">{user.name}</div>
                            <div className="profile-card-points"> {user.score} {(t('Points'))} </div>
                        </div>
                    </div>
                    <div>
                        <a className="link-edit-profile"> {t('EditProfile')}</a>
                    </div>
                </div>
                <div className="mb-2">
                    <h3> {t('ProfileDetails')}</h3>
                </div>
                <div className="seprator mb-3"></div>
                <div className="label">{t('PhoneNumber')}</div>
                <div className="mb-2 text">{user.phoneNumber}</div>
                <div className="label"> {t('Address')}</div>
                <div className="mb-2 text">{user.address}</div>
                <div className="label"> {t('Lanugages')}</div>
                <div>
                    {language}
                </div>
            </div>
        </div>
    )
}