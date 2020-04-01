import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Select, TextField } from '@material-ui/core';
import { Form, Row, Col, Button } from 'react-bootstrap';
import * as Config from '../../config/config';
import Refresh from '@material-ui/icons/Refresh';
import './NewRequest.scss';

export default function NewRequest(props) {
    const [previousOnly, setPreviousOnly] = useState(false);
    const [badgeOnly, setBadgeOnly] = useState(false);

    const request = {
        category: undefined,
        priority: undefined,
        name: undefined,
        phoneNumber: undefined,
        address: undefined,
        comments: undefined
    }

    const { t } = useTranslation();
    const { register, handleSubmit, errors } = useForm();

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
                            inputProps={{
                                name: 'priority'
                            }}>
                            <option aria-label="None" value={undefined}>Priority</option>
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
                            inputProps={{
                                name: 'category'
                            }}>
                            <option aria-label="None" value={undefined}>Category</option>
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
                            ref={register({ required: true })} />
                    </Col>
                    <Col>
                        <TextField
                            required
                            label={t("Phone number")}
                            placeholder={t('Phone number')}
                            defaultValue={request.phoneNumber}
                            variant="outlined"
                            ref={register({ required: true })} />

                    </Col>
                    {/* {forAFriend && errors.friendsPhoneNumber && <p>{t("Phone number is required")}</p>} */}
                </Row>

                <Row className="my-3">
                    <Col>
                        <TextField
                            required
                            label={t("Address")}
                            placeholder={t('Address')}
                            defaultValue={request.address}
                            variant="outlined"
                            ref={register({ required: true })} />
                    </Col>
                    {/* {errors.address && <p>{t('Address is required')}</p>} */}
                </Row>

                <Row className="my-3">
                    <Col>
                        <Form.Check
                            type="checkbox"
                            id="previousOnly"
                            label={t('Open only to previous volunteers')}
                            value={previousOnly}
                            checked={previousOnly}
                            onChange={(event) => setPreviousOnly(event.target.checked)} />
                    </Col>
                    <Col>
                        <Form.Check
                            type="checkbox"
                            id="badgeOnly"
                            label={t('Open only to helpers with badge')}
                            value={badgeOnly}
                            checked={badgeOnly}
                            onChange={(event) => setBadgeOnly(event.target.checked)} />
                    </Col>
                </Row>
                {/* TODO: Add option to release to public after x hours */}

                {/* <input type="text" name="comments" placeholder={t("Description")} /> */}
                <Row className="my-3">
                    <Col>
                        <TextField
                            label="Description"
                            multiline
                            rows="6"
                            inputProps={{
                                name: 'comments'
                            }}
                            defaultValue={request.comments}
                            variant="outlined" />
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