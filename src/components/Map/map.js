import React, { useState } from 'react';
import './map.scss';
import { Modal, Button } from 'react-bootstrap';
import { Map, TileLayer, Marker, } from 'react-leaflet';
import NewRequest from '../NewRequest/NewRequest';
import icon from '../../assets/marker.png';
import newCall from '../../assets/newCall.png';
import L from 'leaflet';
import Config from '../../config/config';
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

    const myIcon = L.icon({
        iconUrl: icon,
        iconSize: [45, 45],
        iconAnchor: [32, 64],
        // shadowUrl: null,
        // shadowSize: null,
    });

    const onFiltersChangeHandler = (filters) => {
        //call api to get data
    }


    return (
        <div className="flex-grow-1">
            <div className="map-actions d-flex justify-content-between">
                <Button className="mx-5 rounded-circle new-call" variant="helppal" onClick={() => setShowRequestModal(true)}>+</Button>
                <Button variant="none" className="mx-2" onClick={() => setFiltersModal(true)}>
                    <FilterListIcon className="filter-icon"></FilterListIcon>
                    {t('Filters')}
                </Button>
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

            <Modal centered show={showRequestModal} onHide={hideRequestModal} dialogClassName="request-modal">
                <Modal.Header closeButton>
                    <Modal.Title>
                        <img alt="" src={newCall} width="20" />
                        {t('New Call')}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <NewRequest hide={hideRequestModal} />
                </Modal.Body>
            </Modal>

            <Modal show={showFiltersModal} centered={true} onHide={() => setFiltersModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title> {t('Filters')} </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Filters onChange={onFiltersChangeHandler}></Filters>
                </Modal.Body>
            </Modal>
        </div>
    )
}
