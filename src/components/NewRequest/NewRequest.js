import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import * as Config from '../../config/config';

export default function NewRequest(props) {
    const [forAFriend, setForAFriend] = useState(false);
    const [differentAddress, setDifferentAddress] = useState(false);
    const [previousOnly, setPreviousOnly] = useState(false);

    const { t } = useTranslation();
    const { register, handleSubmit, errors } = useForm();
    return (
        <div className="register-container">
            <form onSubmit={handleSubmit(props.onSubmit)}>
                <label>{t('Choose Category')}</label>
                <select name="category" ref={register}>
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

                <input type="checkbox" name="forAFriend" value={forAFriend} onChange={(event) => setForAFriend(event.target.checked)} />
                <label>{t('Open For A Friend')}</label>

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

                <input type="checkbox" name="differentAddress" value={differentAddress} onChange={(event) => setDifferentAddress(event.target.checked)} />
                <label>{t('Use a different address')}</label>


                <input type="checkbox" name="previousOnly" value={previousOnly} onChange={(event) => setPreviousOnly(event.target.checked)} />
                <label>{t('Open request to previous helpers only')}</label>

                {/* TODO: Add option to release to public after x hours */}

                <input type="text" name="comments" placeholder={t("Description")} />

                <input value={t('Create Request')} type="submit" />
            </form>
        </div>
    );
}