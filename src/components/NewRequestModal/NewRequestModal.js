import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Select, TextField, FormHelperText } from '@material-ui/core';
import { Form, Row, Col, Button } from 'react-bootstrap';
import * as Config from '../../config/config';
import Autocomplete from '@material-ui/lab/Autocomplete';
import _ from 'lodash';
import resetIcon from '../../assets/Reset-ic.svg'
import Axios from "axios";
import './NewRequestModal.scss';
import { Modal } from 'react-bootstrap';
import newRequestIcon from '../../assets/New-request-ic.svg';
import { useSelector } from 'react-redux';

export default function NewRequestModal(props) {

    const { hide, isOpened } = props;

    const [addresses, setAddresses] = useState([]);
    const { t } = useTranslation();
    const { register, handleSubmit, errors, control } = useForm();
    const currentUser = useSelector((state) => state.user.currentUser);

    let debouncedFn = undefined;
    const onAddressChangeHandler = (event) => {
        event.persist();
        if (!debouncedFn) {
            debouncedFn = _.debounce(() => {
                fetchLocations(event.target.value);
            }, 500);
        }

        debouncedFn();
    }

    const fetchLocations = (query) => {
        Axios.get(`${Config.placesAutocompleteURL}?text=${query}&f=json&category=Address`)
            .then(response => {
                if (response.status === 200) {
                    const { data: { suggestions } } = response;
                    setAddresses(suggestions);
                }
            });
    }

    const parseData = (data, response) => {
        //TODO: this is done to suit sent data with the server
        //need to be handled later
        data["coord"] = {}
        // data["destProfile"] = {}
        data["ownerProfile"] = currentUser.id;
        data["destProfile"] = currentUser.id;//TODO: create new one using data below
        // data.destProfile.name = data.name
        // data.destProfile.phoneNumber = data.phoneNumber
        // data.destProfile.address = data.address

        data.coord.x = response.data[0].lat
        data.coord.y = response.data[0].lon
        delete data.houseNumber
        delete data.badgeOnly


        delete data.name
        delete data.phoneNumber
        delete data.address

        data.priority = data.priority.toUpperCase()
        data.category = data.category.toUpperCase()
        return data;
    }

    async function onSubmit(data) {
        const response = await Axios.get(`${Config.geolocationURL}?key=${Config.geolocationToken}&q=${data.address}&format=json`);
        if (response.status === 200 && response.data.length > 0) {
            const parsedData = parseData(data, response)
            props.handleSubmit(parsedData);
        } else {
            errors.address = t('Address Not Valid')
        }
    }



    return (
        <Modal centered onHide={hide} show={isOpened} dialogClassName="request-modal">
            {currentUser &&
                <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                    <div className="new-request-container">
                        
                        <Modal.Header closeButton>
                            <Modal.Title>
                                <img alt="new-request-icon" src={newRequestIcon} />
                                <span className="app-modal-header-title ml-2 mr-2">{t('New Request')}</span>
                            </Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <Row className="my-3">
                                <Col>
                                    <TextField
                                        required
                                        label={t("Name")}
                                        placeholder={t('Name')}
                                        variant="outlined"
                                        name="name"
                                        defaultValue={currentUser.name}
                                        inputRef={register({ required: t('Name is required') })}
                                    />
                                    <FormHelperText className="text-danger">
                                        {errors.name && errors.name.message}
                                    </FormHelperText>
                                </Col>
                                <Col>
                                    <TextField
                                        required
                                        label={t("Phone number")}
                                        placeholder={t('Phone number')}
                                        variant="outlined"
                                        name="phoneNumber"
                                        defaultValue={currentUser.phoneNumber}
                                        inputRef={register({ required: t('Phone number is required') })}
                                    />
                                    <FormHelperText className="text-danger">
                                        {errors.phoneNumber && errors.phoneNumber.message}
                                    </FormHelperText>
                                </Col>
                            </Row>
                            <Row className="my-3">
                                <Col sm={12}>

                                    <Autocomplete
                                        id="combo-box-demo"
                                        options={addresses}
                                        getOptionLabel={(option) => option.text}
                                        defaultValue={{ text: currentUser.address }}
                                        renderInput={(params) => <TextField required  name="address" inputRef={register({ required: t('Address is required') })} onChange={onAddressChangeHandler} value={addresses} {...params} label={t('Address')} variant="outlined" />}
                                    />
                                    <FormHelperText className="text-danger">
                                        {errors.address && errors.address.message}
                                    </FormHelperText>
                                </Col>
                            </Row>
                            <Row className="my-3">
                                <Col>
                                    <Controller
                                        as={
                                            <Select required native>
                                                <option aria-label="None" value={undefined}>{t('Priority')}</option>
                                                {Config.priorities.length ? Config.priorities.map((priority, index) => <option key={index} value={priority}>
                                                    {t(priority)}
                                                </option>) : ''}
                                            </Select>
                                        }
                                        name="priority"
                                        rules={{ required: t('Priority is required') }}
                                        control={control}
                                    >
                                    </Controller>
                                    <FormHelperText className="text-danger">
                                        {errors.priority && errors.priority.message}
                                    </FormHelperText>

                                    {/* TODO: Add whenever in hours..? */}
                                </Col>
                                <Col>
                                    <Controller
                                        as={
                                            <Select required native>
                                                <option aria-label="None" value={undefined}>{t('Category')}</option>
                                                {Config.categories.length ? Config.categories.map((category, index) => <option key={index} value={category}>
                                                    {t(category)}
                                                </option>) : ''}
                                            </Select>
                                        }
                                        name="category"
                                        rules={{ required: t('Category is required') }}
                                        control={control}
                                    >
                                    </Controller>
                                    <FormHelperText className="text-danger">
                                        {errors.category && errors.category.message}
                                    </FormHelperText>
                                </Col>
                            </Row>

                            <Row className="my-3">
                                <Col>
                                    <Controller
                                        as={
                                            <Form.Check
                                                type="checkbox"
                                                id="onlyPreviousHelpers"
                                                name="onlyPreviousHelpers"
                                                label={t('Open only to previous volunteers')}
                                                value="true"
                                                className="text-start" />
                                        }
                                        name="onlyPreviousHelpers"
                                        control={control}
                                        defaultValue={false}
                                    ></Controller>
                                    {/* TODO: Add option to release to public after x hours */}
                                </Col>
                                <Col>
                                    <Controller
                                        as={
                                            <Form.Check
                                                type="checkbox"
                                                id="badgeOnly"
                                                name="badgeOnly"
                                                label={t('Open only to helpers with badge')}
                                                value="true"
                                                className="text-start" />
                                        }
                                        name="badgeOnly"
                                        control={control}
                                        defaultValue={false}
                                    ></Controller>

                                </Col>
                            </Row>

                            <Row className="my-3">
                                <Col>
                                    <TextField
                                        label={t("Description")}
                                        multiline
                                        rows="6"
                                        inputProps={{
                                            name: 'description'
                                        }}
                                        inputRef={register()}
                                        variant="outlined"
                                    />
                                </Col>
                                <FormHelperText className="text-danger">
                                    {errors.description && errors.description.message}
                                </FormHelperText>
                            </Row>
                        </Modal.Body>
                        <Modal.Footer>
                            <Col className="text-start">
                                <Button variant="link" type="reset">
                                    <img alt="reset-icon" src={resetIcon}></img>
                                </Button>
                                {t('Reset')}
                            </Col>
                            <Col className="text-end">
                                <Button variant="helppal" type="submit">{t('open a request')}</Button>
                            </Col>
                        </Modal.Footer>
                    </div >

                </form>
            }
        </Modal>
    );
}