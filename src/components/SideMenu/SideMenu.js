import React, { useState } from 'react';
import './SideMenu.scss';
import { Map, History, Settings } from '@material-ui/icons';
import { useLocation, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { Button, Modal } from 'react-bootstrap';
import NewRequestModal from "../../components/NewRequestModal/NewRequestModal";
import ActiveRequestsIcon from '../../assets/sidemenu/ActiveRequests.svg'



export default function SideMenu() {
    const { t } = useTranslation();
    const location = useLocation();
    const [showNewRequestModal, setNewRequestModal] = useState(false);
    const onNewRequestSubmitted = () => {

    }



    let routes = [
        {
            route: '/app',
            icon: <Map className="map-icon" />,
            text: t('Requests Map')
        }
    ];

    let requesterRoutes = [
        {
            route: '/app/requests/active',
            icon: <img className="menu-icon" src={ActiveRequestsIcon}></img>,
            text: t('Active Requests')
        },
        {
            route: '/app/requests/history',
            icon: <History className="menu-icon history-icon" />,
            text: t('Requests History')
        },
        {
            route: '/app/favorite',
            icon: <History className="menu-icon history-icon" />,
            text: t('My Favorite Helpers')
        },
        {
            route: '/app/tips',
            icon: <History className="menu-icon history-icon" />,
            text: t('Requester Tips')
        }
    ]

    let helperRoutes = [
        {
            route: '/app/history',
            icon: <History className="menu-icon history-icon" />,
            text: t('Active Responses')
        },
        {
            route: '/app/responses/history',
            icon: <History className="menu-icon history-icon" />,
            text: t('Responses History')
        },
        {
            route: '/app/tips',
            icon: <History className="menu-icon history-icon" />,
            text: t('Helper Tips')
        }
    ]

    return (
        <>
            <nav className="menu-sidebar">
                <Button variant="helppal" onClick={() => setNewRequestModal(true)}>{t('Help Please')}</Button>
                <ul className="menu-list list-unstyled">
                    {routes.map((route, index) =>
                        <li key={index} className={"menu-list-item " + (location.pathname === route.route ? 'active' : '')}>
                            <Link to={route.route}>
                                {route.icon}
                                {route.text}
                            </Link>
                        </li>
                    )}
                    <li className="routes-title">{t('Requester')}</li>
                    {requesterRoutes.map((route, index) =>
                        <li key={index} className={"menu-list-item " + (location.pathname === route.route ? 'active' : '')}>
                            <Link to={route.route}>
                                {route.icon}
                                {route.text}
                            </Link>
                        </li>
                    )}
                    <li className="routes-title">{t('Helper')}</li>
                    {helperRoutes.map((route, index) =>
                        <li key={index} className={"menu-list-item " + (location.pathname === route.route ? 'active' : '')}>
                            <Link to={route.route}>
                                {route.icon}
                                {route.text}
                            </Link>
                        </li>
                    )}
                    <li className={"settings-item menu-list-item " + (location.pathname === '/app/settings' ? 'active' : '')}>
                        <Link to='/app/settings'>
                            <Settings className="settings-icon" />
                            {t('Settings')}
                        </Link>
                    </li>
                </ul>
            </nav>

            <NewRequestModal></NewRequestModal>
           
        </>
    )
}
