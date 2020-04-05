import React from 'react';
import { Card, Button } from "react-bootstrap";
import './Request.scss';
import { useTranslation } from 'react-i18next';
import { requestTypes, responseTypes, requestStatuses } from '../../helpers';
import profile_placeholder from '../../assets/profile_placeholder.svg';

export default function Request({ customClasses = '', request, type = requestTypes.HELP, customCardClasses = '', callback }) {
    const { t } = useTranslation();

    let actions = [
        {
            logic: false/*TODO*/,
            variant: 'helppal',
            responseType: responseTypes.IRRELEVANT,
            label: t('Close')
        },
        {
            logic: false && request.status === requestStatuses.CLOSED,
            variant: 'helppal',
            responseType: responseTypes.REOPEN,
            label: t('Reopen')
        },
        {
            logic: type === requestTypes.HELP,
            variant: 'helppal',
            responseType: responseTypes.ACCEPTED,
            label: t("I'LL HELP")
        },
        {
            logic: false /*TODO*/ && type === requestTypes.HELP && request.status !== requestStatuses.CLOSED,
            variant: 'helppal',
            responseType: responseTypes.REJECT,
            label: t('Cancel & Close')
        },
        {
            logic: type === requestTypes.Asker,
            variant: 'helppal',
            responseType: responseTypes.ACCEPTED,
            label: t('Accept​ help')
        },
        {
            logic: type === requestTypes.Asker,
            variant: 'helppal',
            responseType: responseTypes.DIFFERENT,
            label: t('Different helper wanted​')
        },
        {
            logic: type === requestTypes.Asker,
            variant: 'helppal',
            responseType: responseTypes.IRRELEVANT,
            label: t('Irrelevant, close call​')
        }
    ]

    return (
        <div className={"col-12 px-0 " + customClasses}>
            {/* TODO: Remove style={{ backgroundColor: statusToColor(request.status) }} */}
            <Card className={customCardClasses}>
                <Card.Body className='px-0 pb-0'>
                    <Card.Title className="text-start">
                        {request.ownerProfile ?
                            <>
                                <img width="45" height="45" src={request.ownerProfile.image ? request.ownerProfile.image : profile_placeholder} className="rounded-circle mx-2" alt="" />
                                <span>{request.ownerProfile.name}</span>
                            </>
                            : ''}
                    </Card.Title>
                    <Card.Text className="text-start pt-2">
                        {t(request.category)}
                    </Card.Text>
                    <Card.Text className="text-start border-top pt-4">
                        {t(request.priority)}
                    </Card.Text>
                    <Card.Text className="text-start border-top pt-4">
                        <span className="d-block text-muted mb-1">Description</span>
                        {request.description}
                    </Card.Text>
                    <div className="actions-container d-flex justify-content-end flex-wrap mt-3 pt-4">
                        {actions.map((action, index) =>
                            (action.logic ?
                                <Button
                                    key={index}
                                    className="request-action-btn px-4"
                                    variant={action.variant}
                                    onClick={() => callback(action.responseType, request)}>
                                    {action.label}
                                </Button>
                                : ''))}
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}
