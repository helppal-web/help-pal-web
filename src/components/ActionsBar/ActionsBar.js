import React, { useState } from 'react';
import './ActionsBar.scss';
import { Button, Modal } from 'react-bootstrap';
import Filters from '../Filters/Filters';
import { useTranslation } from 'react-i18next';
import filterIcon from '../../assets/filter-icon.svg';

export default function ActionsBar({ showFilter, filtersChanged }) {
    const [showFiltersModal, setFiltersModal] = useState(false);
    const { t } = useTranslation();

    function onFiltersHide(filters) {
        setFiltersModal(false);
        filtersChanged(filters);
    }

    return (
        <>
            <div className="actions-bar d-flex justify-content-between">
                {showFilter ?
                    <Button variant="none" className="mx-4" onClick={() => setFiltersModal(true)}>
                        <img className="filter-icon mx-2" alt="" src={filterIcon} width="20" />
                        {t('Filters')}
                    </Button>
                    : ''
                }
            </div>

            <Modal show={showFiltersModal} centered={true} onHide={() => setFiltersModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <img className="filter-icon mx-2" alt="" src={filterIcon} width="20" />
                        {t('Filter By')}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Filters onChange={onFiltersHide}></Filters>
                </Modal.Body>
            </Modal>
        </>
    );
}