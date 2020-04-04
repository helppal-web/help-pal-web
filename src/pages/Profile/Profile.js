import React, { useState } from 'react';
import './Profile.scss';
import ProfileCard from "./ProfileCard";
import GenralInfo from '../../components/GeneralInfo/GeneralInfo';


export default function Profile(props) {

    const [user] = useState({ name: "", language: "", image: null, score: null, address: null, phoneNumer: null });
    const [showProfileCard, setProfileCard] = useState(true);



    // useEffect(() => {
        
    //     //axios.get(`${Config.serverUrl}/users`).then(response => setUser(response.data[2]))
    // })

    const onEditProfileHander = () => {
        setProfileCard(false);
    }

    let component = <ProfileCard user={user} onEditProfileClick={onEditProfileHander}></ProfileCard>
    if (showProfileCard === false)
        component = <GenralInfo ></GenralInfo>



    return (
        <div className="container">
            {component}
        </div>
    )

}
