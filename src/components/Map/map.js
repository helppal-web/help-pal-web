import React, { useState } from 'react';
import './map.scss';
import { Modal, Button } from 'react-bootstrap';
import { Map, TileLayer, Marker } from 'react-leaflet';
import NewRequest from '../NewRequest/NewRequest';

export default function MapComponent(props) {
    const [showModal, setShowModal] = useState(props.showModal);

    let state = {
        lat: 32.078044,
        lng: 34.774198,
        zoom: 13,
    }

    const position = [state.lat, state.lng];

    return (
        <div>
            <div className="map-actions d-flex justify-space-between my-3">
                <Button variant="primary" onClick={() => setShowModal(true)}>Create new request</Button>
            </div>

            <Map center={position} zoom={state.zoom}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {props.markers.length ? props.markers.map((marker, index) =>
                    <Marker key={index} position={marker.position}>
                        {marker.content}
                    </Marker>
                ) : ''}
            </Map>

            <Modal dialogClassName="request-modal" show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Create new request</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <NewRequest />
                </Modal.Body>
            </Modal>
        </div>
    )
}
