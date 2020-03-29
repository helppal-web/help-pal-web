import React from 'react';
import './map.scss';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

export default function MapComponent() {

    let state = {
        lat: 32.078044,
        lng: 34.774198,
        zoom: 13,
    }

    const position = [state.lat, state.lng];
    
    return (
        <Map center={position} zoom={state.zoom}>
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </Map>
 )
}
