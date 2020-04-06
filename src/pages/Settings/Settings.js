import React, { useState } from "react"
import { Select, FormControl, InputLabel, MenuItem } from '@material-ui/core';
import * as Config from "../../config/config";
import { useTranslation } from 'react-i18next';
import "./Settings.scss"

export default function Settings() {

    const { t, i18n } = useTranslation();
    const [mySettings, setSettings] = useState({ langauge: 'en-US', notifications: 'on' });

    const onSaveHandler = () => {
        debugger;
        if (mySettings.langauge !== i18n.language) {
            localStorage.setItem('i18nextLng', mySettings.langauge);
            i18n.changeLanguage(mySettings.langauge);
            document.body.style.direction = i18n.dir();
        }
    }

    return (
        <div className="settings-wrapper ml-5 mr-5 mt-3">
            <div className='mb-1'>
                <FormControl >
                    <InputLabel> {t('Languages')}</InputLabel>
                    <Select className="select" onChange={(event) => setSettings({ ...mySettings, langauge: event.target.value })} label={t('Language')} value={mySettings.langauge}>
                        {Config.languages.map(l => <MenuItem value={l.code}> {t(l.text)}</MenuItem>)}
                    </Select>
                </FormControl>
            </div>

            <div className="mb-4">
                <FormControl >
                    <InputLabel> {t('Notifications')}</InputLabel>
                    <Select className="select" onChange={(event) => setSettings({ ...mySettings, notifications: event.target.value })} label={t('Notifications')} value={mySettings.notifications}>
                        <MenuItem value="on"> {t('On')} </MenuItem>
                        <MenuItem value="off"> {t('Off')}</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="mb-2 link-wrapper">
                <a href="#">  {t('Privacy')}</a>
            </div>
            <div className="mb-2 link-wrapper">
                <a href="#">{t('Terms&Conditions')}</a>
            </div>
            <div className="mb-4 link-wrapper">
                <a href="#">{t("About")} </a>
            </div>
            <div className="d-flex justify-content-end">
                <button onClick={onSaveHandler} className="btn-save">{t('SaveChanges')}</button>
            </div>
        </div>
    )
}