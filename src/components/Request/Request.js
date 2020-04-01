import React from 'react';
import { Card, Button } from "react-bootstrap";

export const requestTypes = {
    Seek: 'Seek',
    Asker: 'Asker'
}

export const responseTypes = {
    CREATED: 'CREATED',
    UPDATED: 'UPDATED',
    ACCEPTED: 'ACCEPTED',
    DIFFERENT: 'DIFFERENT',
    IRRELEVANT: 'IRRELEVANT'
}

export default function Request({ customClasses = '', request, type = requestTypes.Seek, callback }) {

    return (
        <div className={"col-12 px-2 " + customClasses}>
            <Card>
                <Card.Body>
                    <Card.Title className="text-left">{request.name} - {request.category}</Card.Title>
                    <Card.Text className="text-left">
                        {request.address}
                    </Card.Text>
                    <Card.Text className="text-left">
                        {request.comments}
                    </Card.Text>
                    <div className="actions-container d-flex align-items-center mt-2">
                        {type === requestTypes.Seek ? <Button variant="helppal" onClick={() => callback(responseTypes.ACCEPTED, request)}>Help the guy!</Button> : ''}
                        {type === requestTypes.Asker ? <Button variant="helppal" onClick={() => callback(responseTypes.ACCEPTED, request)}>Accept​</Button> : ''}
                        {type === requestTypes.Asker ? <Button variant="helppal" onClick={() => callback(responseTypes.DIFFERENT, request)}>Different helper wanted​</Button> : ''}
                        {type === requestTypes.Asker ? <Button variant="helppal" onClick={() => callback(responseTypes.IRRELEVANT, request)}>Irrelevant, close call​</Button> : ''}
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}
