import React from 'react';
import { Card, Button } from "react-bootstrap";
import './Request.scss';
import { useTranslation } from 'react-i18next';

export const requestTypes = {
    HELP: 'Help',
    HELPER: 'Helper'
}

export const responseTypes = {
    CREATED: 'CREATED',
    UPDATED: 'UPDATED',
    ACCEPTED: 'ACCEPTED',
    DIFFERENT: 'DIFFERENT',
    IRRELEVANT: 'IRRELEVANT'
}

export const requestStatuses = {
    OPEN: 'Open',
    ASSIGNED: 'Assigned',
    IN_PROGRESS: 'In Progress',
    DELIVERED: 'Delivered',
    CLOSED: 'Closed',
    IN_DISPUTE: 'In Dispute',
    DISMISSED: 'Dismissed'
}

export function statusToColor(status) {
    // TODO: Real colors, to actual statuses
    switch (status) {
        case requestStatuses.ASSIGNED:
        case requestStatuses.IN_DISPUTE:
        case requestStatuses.OPEN:
            return '#0cc5c59e';

        case requestStatuses.DELIVERED:
            return '#23c119ad';

        case requestStatuses.CLOSED:
        case requestStatuses.CLOSED:
        case requestStatuses.DISMISSED:
            return '#efefef';

        default:
            return 'transparent';
    }
}

export default function Request({ customClasses = '', request, type = requestTypes.HELP, customCardClasses = '', callback }) {
    const { t } = useTranslation();

    return (
        <div className={"col-12 px-2 " + customClasses}>
            <Card className={customCardClasses} style={{ backgroundColor: statusToColor(request.status) }}>
                <Card.Body>
                    <Card.Title className="text-start">
                        {t(request.category)}
                    </Card.Title>
                    <Card.Text className="text-start border-top pt-4">
                        {t(request.priority)}
                    </Card.Text>
                    <Card.Text className="text-start border-top pt-4">
                        <span className="d-block text-muted mb-1">Description</span>
                        {request.comments}
                    </Card.Text>
                    <div className="actions-container d-flex justify-content-end mt-3 pt-4">
                        {type === requestTypes.HELP ? <Button variant="helppal" onClick={() => callback(responseTypes.ACCEPTED, request)}>{t('Help the guy!')}</Button> : ''}
                        {type === requestTypes.Asker ? <Button variant="helppal" onClick={() => callback(responseTypes.ACCEPTED, request)}>{t('Accept​ help')}</Button> : ''}
                        {type === requestTypes.Asker ? <Button variant="helppal" onClick={() => callback(responseTypes.DIFFERENT, request)}>{t('Different helper wanted​')}</Button> : ''}
                        {type === requestTypes.Asker ? <Button variant="helppal" onClick={() => callback(responseTypes.IRRELEVANT, request)}>{t('Irrelevant, close call​')}</Button> : ''}
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}
