import React, { useState, useRef } from 'react';
import './Map.scss';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import icon from '../../assets/marker.svg';
import myLocationIcon from '../../assets/myLocation.png';
import L from 'leaflet';
import Config from '../../config/config';
import { useTranslation } from 'react-i18next';
import Control from 'react-leaflet-control';
import ActionsBar from '../ActionsBar/ActionsBar';
import { requestTypes } from '../../helpers';
import Request from '../../components/Request/Request';
import helpCall from '../../assets/Helper-icon.svg';

export default function MapComponent({ requests, requestCallback }) {
    const [latLng] = useState({ lat: 32.078044, lng: 34.774198 })
    const [zoom] = useState(13)
    const { t } = useTranslation();
    const position = Object.values(latLng);
    const map = useRef();

    const markerIcon = L.icon({
        iconUrl: icon,
        iconSize: [45, 45],
        iconAnchor: [32, 64],
    });
    let markers = [];

    const handleRequestCallback = (event) => {
        map.current.leafletElement.closePopup()
        requestCallback(event);
    }

    if (requests && requests.length) {
        markers = requests
            .filter(request => request && request.coord && request.coord.x && request.coord.y)
            .map((request, index) =>
                <Marker key={index} icon={markerIcon} position={[request.coord.x, request.coord.y]}>
                    <Popup style={{ maxWidth: 'auto' }}>
                        <div className="modal-content border-none">
                            <div className="modal-header px-0">
                                <div className="modal-title h4">
                                    <img alt="" src={helpCall} width="20" />
                                    {t(requestTypes.HELP) + '!'}
                                </div>
                            </div>
                            <Request callback={handleRequestCallback} request={request} customCardClasses="border-none" />
                        </div>
                    </Popup>
                </Marker>
            );
    }

    const onFiltersChangeHandler = (filters) => {
        //call api to get data
        const { radius, category, priority, previousCallers, badge } = filters;

        if (radius) {
            //TODO: user's current location
            // getCurrentPosition().then(res => {
            //     console.log(res);
            // }).catch(err => {
            //     console.log(err);
            // });
        }

        if (category) {

        }

        if (priority) {

        }

        if (previousCallers) {

        }

        if (badge) {

        }
    }

    const onHomeButtonClicked = () => {
        map.current.leafletElement.panTo(latLng)
    }

    const getBounds = () => {
        let bounds = [];
        if (requests && requests.length) {
            requests
                .filter(request => request && request.coord && request.coord.x && request.coord.y)
                .forEach(request => bounds.push([request.coord.x, request.coord.y]));
            return bounds;
        }
        return position
    }

    return (
        <div className="flex-grow-1">
            <ActionsBar showFilter={true} filtersChanged={onFiltersChangeHandler} />

            <Map ref={map} bounds={[getBounds()]} center={position} zoom={zoom} >
                <TileLayer
                    attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
                    url={"https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=" + Config.MapBoxKey}
                />
                {markers}

                <Control position="bottomleft">
                    <div className="my-location-container">
                        <img onClick={() => onHomeButtonClicked()} alt="" src={myLocationIcon} />
                    </div>
                </Control>
            </Map>

        </div>
    )
}

