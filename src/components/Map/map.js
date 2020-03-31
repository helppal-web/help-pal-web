import React, { useState } from 'react';
import './map.scss';
import { Modal, Button } from 'react-bootstrap';
import { Map, TileLayer, Marker } from 'react-leaflet';
import NewRequest from '../NewRequest/NewRequest';
import { useTranslation } from 'react-i18next';
import FilterListIcon from '@material-ui/icons/FilterList';
import Filters from "../Filters/Filters";

export default function MapComponent({ showModal, markers }) {
    const [showRequestModal, setShowRequestModal] = useState(showModal);
    const [showFiltersModal, setFiltersModal] = useState(false);
    const { t } = useTranslation();

    let state = {
        lat: 32.078044,
        lng: 34.774198,
        zoom: 13,
    }

    const position = [state.lat, state.lng];

    function hideRequestModal() {
        setShowRequestModal(false);
    }

    const onFiltersChangeHandler = (filters) => {
        //call api to get data
    }



    return (
        <>
            <div className="map-actions d-flex justify-space-between my-3">
                <Button className="ml-auto" variant="primary" onClick={() => setShowRequestModal(true)}>{t('Create New Request')}</Button>
                <Button className="ml-2" onClick={() => setFiltersModal(true)}>
                    <FilterListIcon></FilterListIcon>
                    {t('Filters')}
                </Button>
            </div>

            <Map center={position} zoom={state.zoom}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {markers.length ? markers.map((marker, index) =>
                    <Marker key={index} position={marker.position}>
                        {marker.content}
                    </Marker>
                ) : ''}
            </Map>

            <Modal centered show={showRequestModal} onHide={hideRequestModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{t('Create New Request')}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <NewRequest hide={hideRequestModal} />
                </Modal.Body>
            </Modal>

            <Modal show={showFiltersModal} centered={true} show={showFiltersModal} onHide={() => setFiltersModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title> {t('Filters')} </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Filters onChange={onFiltersChangeHandler}></Filters>
                </Modal.Body>
            </Modal>
        </>
    )
}
