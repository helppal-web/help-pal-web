import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Form } from 'react-bootstrap';
import * as Config from '../../config/config';

export default function NewRequest(props) {
    const [forAFriend, setForAFriend] = useState(false);
    const [differentAddress, setDifferentAddress] = useState(false);
    const [previousOnly, setPreviousOnly] = useState(false);

    const { t } = useTranslation();
    const { register, handleSubmit, errors } = useForm();

    function onSubmit() {
        // setTimeout(() => {
            props.hide();
        // }, 5000);
        // props.onSubmit();
    }
    return (
        <div className="register-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>{t('Choose Category')}</label>
                <select name="category" ref={register({ required: true, validate: value => value !== undefined })}>
                    <option value={undefined}>---</option>
                    {Config.categories.length ? Config.categories.map((category, index) => <option key={index} value={category}>
                        {t(category)}
                    </option>) : ''}
                </select>

                <label>{t('Urgency')}</label>
                <select name="urgency" ref={register}>
                    <option value={t('Urgent')}>
                        {t('Urgent')}
                    </option>
                    <option value={t('Whenever')}>
                        {t('Whenever')}
                    </option>
                </select>
                {/* TODO: Add whenever in hours..? */}

                <Form.Check
                    type="checkbox"
                    id="forAFriend"
                    label={t('Open For A Friend')}
                    value={forAFriend}
                    checked={forAFriend}
                    onChange={(event) => setForAFriend(event.target.checked)}
                />

                {(forAFriend) ?
                    // TODO: margin
                    <div className="for-a-friend">
                        <label>{t("Friend's name")}</label>
                        <input name="friendsName" type="text" placeholder={t("Enter friend's name")} ref={register} />
                        {forAFriend && errors.friendsName && <p>{t("Friend's name is required")}</p>}

                        <label>{t("Friend's phone number")}</label>
                        <input name="friendsPhoneNumber" type="text" placeholder={t("Enter friend's phone number")} ref={register} />
                        {forAFriend && errors.friendsPhoneNumber && <p>{t("Friend's phone number is required")}</p>}

                    </div>
                    : ''}

                <label>{t("Address")}</label>
                <input name="address" type="text" readOnly={!differentAddress} disabled={!differentAddress} placeholder={t("Enter Address")} ref={register} />
                {errors.address && <p>{t('Address is required')}</p>}

                <Form.Check
                    type="checkbox"
                    id="differentAddress"
                    label={t('Use a different address')}
                    value={differentAddress}
                    checked={differentAddress}
                    onChange={(event) => setDifferentAddress(event.target.checked)}
                />

                <Form.Check
                    type="checkbox"
                    id="previousOnly"
                    label={t('Open request to previous helpers only')}
                    value={previousOnly}
                    checked={previousOnly}
                    onChange={(event) => setPreviousOnly(event.target.checked)}
                />
                {/* TODO: Add option to release to public after x hours */}

                <input type="text" name="comments" placeholder={t("Description")} />

                <input value={t('Create Request')} type="submit" />
            </form>
        </div>
    );
}