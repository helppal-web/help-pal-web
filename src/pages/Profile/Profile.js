import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Profile.scss';
import MyRequests from "../../components/MyRequests/MyRequests"
import ProfileCard from "./ProfileCard";
import axios from "axios";
import * as Config from "../../config/config";
import GenralInfo from '../../components/GeneralInfo/GeneralInfo';


export default function Profile(props) {

    const { t } = useTranslation();
    const [user, setUser] = useState({ name: "", language: "", image: null, score: null, address: null, phoneNumer: null });
    const [showProfileCard, setProfileCard] = useState(true);



    useEffect(() => {
        
        //axios.get(`${Config.serverUrl}/users`).then(response => setUser(response.data[2]))
    })

    const onEditProfileHander = () => {
        setProfileCard(false);
    }

    let component = <ProfileCard user={user} onEditProfileClick={onEditProfileHander}></ProfileCard>
    if (showProfileCard == false)
        component = <GenralInfo ></GenralInfo>



    return (
        <div className="container">
            {component}
        </div>
    )

}
