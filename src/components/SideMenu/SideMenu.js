import React, { useState } from 'react';
import './SideMenu.scss';
import { Map, History, Settings } from '@material-ui/icons';
import { useLocation, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { Button } from 'react-bootstrap';
import NewRequestModal from "../../components/NewRequestModal/NewRequestModal";
import ActiveRequestsIcon from '../../assets/sidemenu/ActiveRequests.svg'
import HelpMenuIcon from '../../assets/sidemenu/help-map-icon.svg'
import ActiveResponsesIcon from '../../assets/sidemenu/ActiveResponses.svg'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createRequest } from '../../actions';
import { APP_PATHS } from '../../App';



function SideMenu(props) {
    const { t } = useTranslation();
    const location = useLocation();
    const [showNewRequestModal, setNewRequestModal] = useState(false);
    const onNewRequestSubmitted = (data) => {
        props.onCreateRequest(data)
    }


    let routes = [
        {
            route: APP_PATHS.app,// '/app'
            icon: <img alt="" className="menu-icon map-icon" src={HelpMenuIcon}></img>,
            text: t('Help Map')
        }
    ];

    let requesterRoutes = [
        {
            route: APP_PATHS.activeRequests,// '/app/requests/active'
            icon: <img alt="active-requests-ic" className="menu-icon" src={ActiveRequestsIcon}></img>,
            text: t('Active Requests')
        },
        {
            route: APP_PATHS.requestsHistory,// '/app/requests/history'
            icon: <History className="menu-icon history-icon" />,
            text: t('Requests History')
        },
        {
            route: '/app/favorite',
            icon: <History className="menu-icon history-icon" />,
            text: t('My Favorite Helpers')
        },
        {
            route: APP_PATHS.requesterTips,// '/app/requester/tips'
            icon: <History className="menu-icon history-icon" />,
            text: t('Requester Tips')
        }
    ]

    let helperRoutes = [
        {
            route: APP_PATHS.activeResponses,// '/app/responses/active'
            icon: <img alt="active-responsers-ic" className="menu-icon" src={ActiveResponsesIcon}></img>,
            text: t('Active Responses')
        },
        {
            route: '/app/responses/history',
            icon: <History className="menu-icon history-icon" />,
            text: t('Responses History')
        },
        {
            route: APP_PATHS.helperTips,// '/app/helper/tips'
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

            <NewRequestModal handleSubmit={onNewRequestSubmitted} hide={() => setNewRequestModal(false)} isOpened={showNewRequestModal}></NewRequestModal>

        </>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        onCreateRequest: bindActionCreators(createRequest, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(SideMenu)