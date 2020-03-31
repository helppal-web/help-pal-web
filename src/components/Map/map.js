import React, { useState } from 'react';
import './map.scss';
import { Modal, Button } from 'react-bootstrap';
import { Map, TileLayer, Marker, } from 'react-leaflet';
import NewRequest from '../NewRequest/NewRequest';
import icon from '../../assets/marker.png';
import L from 'leaflet';
import Config from '../../config/config';
import { useTranslation } from 'react-i18next';

export default function MapComponent({ showModal, markers }) {
    const [showRequestModal, setShowRequestModal] = useState(showModal);
    const { t } = useTranslation();

    let state = {
        lat: 32.078044,
        lng: 34.774198,
        zoom: 13,
    }

    const position = [state.lat, state.lng];

    function hideModal() {
        setShowRequestModal(false);
    }

    const myIcon = L.icon({
        iconUrl: icon,
        iconSize: [45, 45],
        iconAnchor: [32, 64],
        // shadowUrl: null,
        // shadowSize: null,
    });

    return (
        <>
            <div className="map-actions d-flex justify-space-between my-3">
                <Button className="ml-auto" variant="primary" onClick={() => setShowRequestModal(true)}>{t('Create New Request')}</Button>
            </div>

            <Map center={position} zoom={state.zoom}>
                <TileLayer
                    attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
                    url={"https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=" + Config.MapBoxKey}
                />
                {markers.length ? markers.map((marker, index) =>
                    <Marker icon={myIcon} key={index} position={marker.position}>
                        {marker.content}
                    </Marker>
                ) : ''}
            </Map>

            <Modal dialogClassName="request-modal" show={showRequestModal} onHide={hideModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{t('Create New Request')}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <NewRequest hide={hideModal} />
                </Modal.Body>
            </Modal>
        </>
    )
}
