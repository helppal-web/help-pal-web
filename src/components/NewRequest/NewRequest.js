import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Select, TextField } from '@material-ui/core';
import { Form, Row, Col, Button } from 'react-bootstrap';
import * as Config from '../../config/config';
import Refresh from '@material-ui/icons/Refresh';
import Autocomplete from '@material-ui/lab/Autocomplete';
import _ from 'lodash';


import Axios from "axios";
import './NewRequest.scss';

export default function NewRequest(props) {

    const [request, setRequest] = useState({
        category: undefined,
        priority: undefined,
        name: undefined,
        phoneNumber: undefined,
        address: undefined,
        comments: undefined,
        previousOnly: false,
        badgeOnly: false,
        houseNumber : undefined
    });

    const [myLocation, setMyLocation] = useState({
        lat: null,
        long: null
    });

    const [addresses, setAddresses] = useState([]);



    const { t } = useTranslation();
    const { register, handleSubmit, errors } = useForm();

  
   

    let debouncedFn = undefined;
    const onAddressChangeHandler = (event) => {
        event.persist();
        if (!debouncedFn) {
            debouncedFn = _.debounce(() => {
                onPropChangeHandler(event);
                fetchLocations(event.target.value);
            }, 500);
        }

        debouncedFn();
    }

    const fetchLocations = (query) => {
        Axios.get(`http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/suggest?text=${query}&f=json&category=Address`)
            .then(response => {
                if (response.status == 200) {
                    const { data: { suggestions } } = response;
                    setAddresses(suggestions);
                }
            });
    }

    const onPropChangeHandler = (event) => {
        const { name, value } = event.target;
        setRequest({ ...request, [name]: value === "" ? undefined : value })
    }

    const onCheckedChangedHandler = (event) => {
        const { name, checked } = event.target;
        setRequest({ ...request, [name]: checked })
    }

    useEffect(() => {


        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {

            }, err => console.error(err))
        }

    })

    const secret = 'SQE1XBIDSVQ4DG33WNMAJOEKQXCS2USBRYMCZSOWDEF033NU';
    const clientID = 'PKIIOVA0NSTPOAIJI3RFBAIWURUY41EBROCBK3NRMBVTRHJO';
    const apiVersion = '20200401';

    function onSubmit() {

        // setTimeout(() => {
        props.hide();
        // }, 5000);
        // props.onSubmit();
    }
    return (
        <div className="new-request-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Row className="my-3">
                    <Col>
                        <Select
                            native
                            value={request.priority}
                            ref={register({ required: true, validate: value => value !== undefined })}
                            name="priority"
                            onChange={onPropChangeHandler}
                        >
                            <option aria-label="None" value={undefined}>{t('Priority')}</option>
                            {Config.priorities.length ? Config.priorities.map((priority, index) => <option key={index} value={priority}>
                                {t(priority)}
                            </option>) : ''}
                        </Select>
                        {/* TODO: Add whenever in hours..? */}
                    </Col>
                    <Col>
                        <Select
                            native
                            value={request.category}
                            ref={register({ required: true, validate: value => value !== undefined })}
                            name="category"
                            onChange={onPropChangeHandler}
                        >
                            <option aria-label="None" value={undefined}>{t('Category')}</option>
                            {Config.categories.length ? Config.categories.map((category, index) => <option key={index} value={category}>
                                {t(category)}
                            </option>) : ''}
                        </Select>
                    </Col>
                </Row>

                <Row className="my-3">
                    <Col>
                        <TextField
                            required
                            label={t("Name")}
                            placeholder={t('Name')}
                            defaultValue={request.name}
                            variant="outlined"
                            name="name"
                            ref={register({ required: true })}
                            onChange={onPropChangeHandler}
                        />
                    </Col>
                    <Col>
                        <TextField
                            required
                            label={t("Phone number")}
                            placeholder={t('Phone number')}
                            defaultValue={request.phoneNumber}
                            variant="outlined"
                            name="phoneNumber"
                            ref={register({ required: true })}
                            onChange={onPropChangeHandler}
                        />

                    </Col>
                </Row>



                <Row className="my-3">
                    <Col sm={8}>

                        <Autocomplete
                            id="combo-box-demo"
                            options={addresses}
                            getOptionLabel={(option) => option.text}
                            
                            onChange={(event, value) => setRequest({ ...request, ['address']: value.text })}
                            renderInput={(params) => <TextField onChange={onAddressChangeHandler}  value={addresses} {...params} label={t('Street')} variant="outlined" />}
                        />
                    </Col>
                    <Col sm={4}>
                        <TextField
                            label={t("HouseNumber")}
                            placeholder={t('HouseNumber')}
                            variant="outlined"
                            name="houseNumber"
                            ref={register()}
                            onChange={onPropChangeHandler}
                        />
                    </Col>
                    {/* TODO: General form errors!! */}
                    {/* {errors.address && <p>{t('Address is required')}</p>} */}
                </Row>

                <Row className="my-3">
                    <Col>
                        <Form.Check
                            type="checkbox"
                            name="previousOnly"
                            label={t('Open only to previous volunteers')}
                            value={request.previousOnly}
                            checked={request.previousOnly}
                            onChange={onCheckedChangedHandler}
                            className="text-start" />
                    </Col>
                    <Col>
                        <Form.Check
                            type="checkbox"
                            name="badgeOnly"
                            label={t('Open only to helpers with badge')}
                            value={request.badgeOnly}
                            checked={request.badgeOnly}
                            onChange={onCheckedChangedHandler}
                            className="text-start" />
                    </Col>
                </Row>
                {/* TODO: Add option to release to public after x hours */}

                {/* <input type="text" name="comments" placeholder={t("Description")} /> */}
                <Row className="my-3">
                    <Col>
                        <TextField
                            label={t("Description")}
                            multiline
                            rows="6"
                            inputProps={{
                                name: 'comments'
                            }}
                            defaultValue={request.comments}
                            variant="outlined"
                            onChange={onPropChangeHandler}
                        />
                    </Col>
                </Row>

                <Row className="my-3 request-actions">
                    <Col className="text-start">
                        <Button variant="link" type="reset">
                            <Refresh className="refresh-icon" />
                            {t('Reset')}
                        </Button>
                    </Col>
                    <Col className="text-end">
                        <Button variant="helppal" type="submit">{t('Create Request')}</Button>
                    </Col>
                </Row>
            </form>
        </div>
    );
}