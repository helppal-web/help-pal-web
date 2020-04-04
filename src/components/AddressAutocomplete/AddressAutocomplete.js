import React, { useState, useEffect } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import * as Config from '../../config/config';
import { TextField } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import axios from "axios"
import _ from 'lodash';

export default function AddressAutocomplete(props) {

    const [locations, setLocations] = useState([]);
    const [address, setAddress] = useState(undefined);
    const { t } = useTranslation();


    let debouncedFn = undefined;
    const onAddressChangeHandler = (event) => {
        event.persist();
        if (!debouncedFn) {
            debouncedFn = _.debounce(() => {
                setAddress(event.target.value);
                fetchLocations(event.target.value);
            }, 500);
        }

        debouncedFn();
    }
    const fetchLocations = (query) => {
        axios.get(`${Config.placesAutocompleteURL}?text=${query}&f=json&category=Address`)
            .then(response => {
                if (response.status == 200) {
                    const { data: { suggestions } } = response;
                    setLocations(suggestions);
                }
            });
    }

    const onChangeHandler = (value) => {
        if (value !== null) {
            setAddress(value.text);
            props.onSelectedValueChanged(value.text);
        }
        else { setAddress("") }
    }


    return (

        <Autocomplete
            id="autocomplete-address"
            options={locations}
            getOptionLabel={(option) => option.text}
            onChange={(event, value) => { onChangeHandler(value) }}
            renderInput={(params) => <TextField style={{border : 'none'}} name="address" onChange={onAddressChangeHandler}
                value={address} {...params} label={t('Street')} variant="outlined" />}
        />
    )

}