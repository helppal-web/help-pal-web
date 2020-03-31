import { Form } from "react-bootstrap"
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import TextField from '@material-ui/core/TextField';
import "./Filters.scss"



import * as Config from '../../config/config';

export default function Filters(props) {


    const { t } = useTranslation();
    const [filters, setFilters] = useState({
        category: undefined,
        time: undefined,
        radious: 10,
        previousCallers: false,
        badge: false
    });

    const onFilterChangeHandler = (event) => {
        const { name, value } = event.target;
        setFilters({ ...filters, [name]: value == "" ? undefined : value })
    }

    const onCheckedChangedHandler = (event) => {
        const { name, checked } = event.target;
        setFilters({ ...filters, [name]: checked })

    }

    return (
        <div className="filters-wrapper" >
            <select name="category" placeholder="Category" className="mb-4" onChange={onFilterChangeHandler}>
                <option value="">---</option>
                {Config.categories.map((category, index) => <option value={category}>  {(t(category))}</option>)}
            </select>

            <TextField
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
            />

            <label> Radius(KM)</label>
            <select name="radious" className="mb-4" onChange={onFilterChangeHandler}>
                <option value="10">  10 </option>
                <option value="15"> 15 </option>
                <option value="20"> 20 </option>
                <option value="25"> 25 </option>
                <option value="30"> 30 </option>
                <option value="40"> 40 </option>
            </select>

            <Form.Check onChange={onCheckedChangedHandler} name="previousCallers" type="checkbox" label={t('PreviousCallers')}>
            </Form.Check>

            <Form.Check name="badge" onChange={onCheckedChangedHandler} type="checkbox" label={t('Badge')}>
            </Form.Check>
            <div className="d-flex justify-content-end">
                <button onClick={() => {
                    props.onChange(filters);
                }}> {t('Done')} </button>
            </div>
        </div>
    )
}