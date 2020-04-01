import { Form, Row, Col, Button } from "react-bootstrap"
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import TextField from '@material-ui/core/TextField';
import "./Filters.scss"



import * as Config from '../../config/config';
import { Select } from "@material-ui/core";

export default function Filters(props) {


    const { t } = useTranslation();
    const [filters, setFilters] = useState({
        category: undefined,
        time: undefined,
        radius: 10,
        previousCallers: false,
        badge: false
    });

    const onFilterChangeHandler = (event) => {
        const { name, value } = event.target;
        setFilters({ ...filters, [name]: value === "" ? undefined : value })
    }

    const onCheckedChangedHandler = (event) => {
        const { name, checked } = event.target;
        setFilters({ ...filters, [name]: checked })

    }

    return (
        <div className="filters-wrapper">
            <div className="filters-inner-container  mx-auto">

                {/* value={request.category}
                ref={register({ required: true, validate: value => value !== undefined })} */}
                <Row>
                    <Col>
                        <Select native name="category" placeholder="Category" className="mb-4" onChange={onFilterChangeHandler}>
                            <option value="">Category</option>
                            {Config.categories.map((category, index) => <option key={index} value={category}>  {(t(category))}</option>)}
                        </Select>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Select native name="time" placeholder="Time Frame" className="mb-4" onChange={onFilterChangeHandler}>
                            <option value="">Time Frame</option>
                            {Config.priorities.map((priority, index) => <option key={index} value={priority}>  {(t(priority))}</option>)}
                        </Select>
                    </Col>
                </Row>

                {/* <TextField
                    id="time"
                    label={t('TimeFrame')}
                    type="time"
                    name="time"
                    className="mb-4"
                    onChange={onFilterChangeHandler}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{
                        step: 300, // 5 min
                    }}
                /> */}
                <Row>
                    <Col>
                        <TextField
                            label="Radius(KM)"
                            type="number"
                            name="radius"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={onFilterChangeHandler}
                            className="mb-4"
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
                        <Form.Check className="mb-2" onChange={onCheckedChangedHandler} name="previousCallers" type="checkbox" label={t('PreviousCallers')}>
                        </Form.Check>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Check className="mb-2" name="badge" onChange={onCheckedChangedHandler} type="checkbox" label={t('Badge')}>
                        </Form.Check>
                    </Col>
                </Row>
            </div>

            <div className="d-flex justify-content-end actions-container mt-2 pt-2">
                <Button variant="helppal" onClick={() => {
                    props.onChange(filters);
                }}> {t('Done')} </Button>
            </div>
        </div >
    )
}