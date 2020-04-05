import { Form, Row, Col, Button } from "react-bootstrap"
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import TextField from '@material-ui/core/TextField';
import "./Filters.scss"



import * as Config from '../../config/config';
import { Select } from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";

export default function Filters({ onChange }) {

    const { t } = useTranslation();
    const { register, handleSubmit, errors, control } = useForm();

    return (
        <div className="filters-wrapper">
            <form onSubmit={handleSubmit(onChange)}>
                <div className="filters-inner-container mx-auto text-start">
                    <Row>
                        <Col>
                            <Controller
                                as={
                                    <Select native name="category" placeholder="Category" className="mb-4" >
                                        <option value="">{t('Category')}</option>
                                        {Config.categories.map((category, index) => <option key={index} value={category}>{t(category)}</option>)}
                                    </Select>
                                }
                                name="category"
                                control={control}
                            >
                            </Controller>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Controller
                                as={
                                    <Select native name="priority" placeholder={t('Priority')} className="mb-4" >
                                        <option value="">{t('Priority')}</option>
                                        {Config.priorities.map((priority, index) => <option key={index} value={priority}>{t(priority)}</option>)}
                                    </Select>
                                }
                                name="priority"
                                control={control}
                            >

                            </Controller>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <TextField
                                label={t('Radius(KM)')}
                                type="number"
                                name="radius"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                className="mb-4"
                                inputRef={register}
                                inputProps={{
                                    step: 10,
                                    max: 300
                                }}
                                variant="filled"
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Controller
                                as={
                                    <Form.Check className="mb-2" name="previousCallers" type="checkbox" label={t('PreviousCallers')}>
                                    </Form.Check>
                                }
                                name="previousCallers"
                                control={control}
                                defaultValue={false}
                            ></Controller>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Controller
                                as={

                                    <Form.Check className="mb-2" name="badge" type="checkbox" label={t('Badge')}>
                                    </Form.Check>
                                }
                                name="badge"
                                control={control}
                                defaultValue={false}
                            ></Controller>
                        </Col>
                    </Row>
                </div>

                <div className="d-flex justify-content-end actions-container mt-2 pt-2">
                    <Button variant="helppal" type="submit">{t('Done')}</Button>
                </div>
            </form>
        </div >
    )
}