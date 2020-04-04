import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Select, FormControl, MenuItem, InputLabel } from '@material-ui/core';
import * as Config from "../../config/config";
import AddressAutocomplete from "../AddressAutocomplete/AddressAutocomplete";
import axios from "axios";
import PlusIcon from "../../assets/plus-icon.svg";
import { toBase64 } from '../../helpers'
import { Row, Col } from 'react-bootstrap';



export default function GenralInfo() {

    const { t } = useTranslation();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = () => {

    }
    function handleFileSelect(evt) {
        var files = evt.target.files; // FileList object

        // use the 1st file from the list
        const image = files[0];
        toBase64(image).then((data) => {
            console.log(data)
        })
    }
    const getYears = () => {
        const years = [];
        for (let j = 1900; j < currnetYear; j++) {
            years.push(j)
        }

        return years;
    }

    const onSelectedAddressHandler = (value)=>{
       
    }

    const currnetYear = new Date().getFullYear();

    return (
        <div className="profile-card-wrapper">
            <div className="profile-card-inner">
                <div className="d-flex mb-2">
                    <div className="profile-card-img">
                        <img></img>
                    </div>
                    <div className="upload-photo-wrapper">
                        <img src={PlusIcon}></img>
                        <label>{t('UploadPhoto')}</label>
                        <input id="profile-photo-image" onChange={(event) => {
                            handleFileSelect(event)
                        }} type="file" accept="image/*"></input>
                    </div>
                </div>
                <div className="mb-2" >
                    <h3> {t('ProfileDetails')}</h3>
                </div>
                <div className="seprator mb-3">
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Row className="mb-3">
                        <Col sm={6}>
                            <label htmlFor=""> {(t('FullName'))}</label>
                            <label className="required-symbol"> *</label>
                            <input name="fullName" className="textbox" type="text" ref={register({ required: true })}></input>
                            {errors.fullName && <p className="text-danger"> {t('RequiredField')}</p>}
                        </Col>
                        <Col sm={6}>
                            <label > {t('PhoneNumber')}</label>
                            <label className="required-symbol"> *</label>
                            <input name="phoneNumber" className="textbox" type="text" ref={register({ required: true })}></input>
                            {errors.phoneNumber && <p className="text-danger"> {t('RequiredField')}</p>}
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col sm={12}>
                            <AddressAutocomplete onSelectedValueChanged={onSelectedAddressHandler}></AddressAutocomplete>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col>
                            <div className="d-flex">
                                <div className="info-icon">
                                    <div> i</div>
                                </div>
                                <div className="ml-2 mr-2" >
                                    {t('DontWorry')}
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mb-2">
                        <Col sm={6}>
                            <FormControl className="select-language">
                                <InputLabel> {t('Languages')}</InputLabel>
                                <Select value="Hebrew">
                                    {Config.languages.map(m => <MenuItem value={m.text}> {t(m.text)} </MenuItem>)}
                                </Select>
                            </FormControl>

                        </Col>
                    </Row>

                    <Row className="mb-5">
                        <Col sm={6}>
                            <FormControl className="select-year">
                                <InputLabel> {t('YearOfBirth')}</InputLabel>
                                <Select value="1900">
                                    {getYears().map(y => <MenuItem value={y}> {y} </MenuItem>)}
                                </Select>
                            </FormControl>

                        </Col>
                    </Row>


                    <div className="seprator mb-3"></div>

                    <div className="d-flex justify-content-end">
                        <input type="submit" value={t('SaveChanges')}></input>
                    </div>

                </form>
            </div>
        </div>
    )
}