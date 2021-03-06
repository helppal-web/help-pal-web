import React, { useState, useRef } from 'react';
import './Map.scss';
import { Modal, Button } from 'react-bootstrap';
import { Map, TileLayer, Marker, } from 'react-leaflet';
import icon from '../../assets/marker.svg';
import myLocationIcon from '../../assets/myLocation.png';
import L from 'leaflet';
import Config from '../../config/config';
import { useTranslation } from 'react-i18next';
import FilterListIcon from '@material-ui/icons/FilterList';
import Filters from "../Filters/Filters";
import Control from 'react-leaflet-control';
import ActionsBar from '../ActionsBar/ActionsBar';

export default function MapComponent({ markers }) {
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

    const onFiltersChangeHandler = (filters) => {
        //call api to get data
    }

    const onHomeButtonClicked = () => {
        map.current.leafletElement.panTo(latLng)
    }

    const getBounds = () => {
        if (markers && markers.length) {
            return markers.map(marker => marker.position)
        }
        return position
    }

    return (
        <div className="flex-grow-1">
            <ActionsBar showFilter={true} filtersChanged={onFiltersChangeHandler.bind(this)} />

            <Map ref={map} bounds={[getBounds()]} center={position} zoom={zoom} >
                <TileLayer
                    attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
                    url={"https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=" + Config.MapBoxKey}
                />
                {markers.length ? markers.map((marker, index) =>
                    <Marker icon={markerIcon} key={index} position={marker.position}>
                        {marker.content}
                    </Marker>
                ) : ''}

                <Control position="bottomleft">
                    <div className="my-location-container">
                        <img onClick={() => onHomeButtonClicked()} alt="" src={myLocationIcon} />
                    </div>
                </Control>
            </Map>

        </div>
    )
}

