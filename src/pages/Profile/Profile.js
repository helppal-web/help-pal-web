import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Profile.scss';
import GeneralInfo from "../../components/GeneralInfo/GeneralInfo"
import MyRequests from "../../components/MyRequests/MyRequests"
import ProfileCard from "./ProfileCard";
import axios from "axios";
import * as Config from "../../config/config";


export default function Profile(props) {

    const { t } = useTranslation();
    const[user, setUser] = useState({});


    useEffect(() => {
        axios.get(`${Config.serverUrl}/users`).then(response => setUser(response.data[2]))
    })

    return (
        <div className="container">
            <ProfileCard user={user}></ProfileCard>
        </div>
    )

}
