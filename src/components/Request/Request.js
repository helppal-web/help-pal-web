import React from 'react';
import { Card } from "react-bootstrap";

export const requestTypes = {
    Seek: 'Seek',
    Asker: 'Asker'
}

export default function Request({ request, type = requestTypes.Seek }) {

    return (
        <div className="col-12 col-sm-4 px-2">
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
                        {type === requestTypes.Seek ? <Card.Link href="#">Help the guy!</Card.Link> : ''}
                        {type === requestTypes.Asker ? <Card.Link href="#">Accept​</Card.Link> : ''}
                        {type === requestTypes.Asker ? <Card.Link href="#">Different helper wanted​</Card.Link> : ''}
                        {type === requestTypes.Asker ? <Card.Link href="#">Irrelevant, close call​</Card.Link> : ''}
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}
