import React from 'react';
import './SideMenu.scss';
import { Map, History } from '@material-ui/icons';
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

export default function SideMenu(props) {
    const { t } = useTranslation();
    const location = useLocation();

    let routes = [
        {
            route: '/app',
            icon: <Map className="map-icon" />,
            text: t('Requests Map')
        },
        {
            route: '/app/history',
            icon: <History className="history-icon" />,
            text: t('Requests History')

        }
    ]

    return (
        <>
            <nav className="menu-sidebar">
                <ul className="menu-list list-unstyled">
                    {routes.map((route, index) =>
                        <li key={index} className={"menu-list-item " + (location.pathname == route.route ? 'active' : '')}>
                            <a href={route.route}>
                                {route.icon}
                                {route.text}
                            </a>
                        </li>
                    )}
                </ul>
            </nav>
        </>
    )
}
