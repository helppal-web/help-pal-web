import React, { useState } from 'react';
import './ActionsBar.scss';
import { Button, Modal } from 'react-bootstrap';
import FilterListIcon from '@material-ui/icons/FilterList';
import Filters from '../Filters/Filters';
import { useTranslation } from 'react-i18next';

export default function ActionsBar({ showFilter, filtersChanged }) {
    const [showFiltersModal, setFiltersModal] = useState(false);
    const { t } = useTranslation();

    return (
        <>
            <div className="actions-bar d-flex justify-content-between">
                {showFilter ?
                    <Button variant="none" className="mx-4" onClick={() => setFiltersModal(true)}>
                        <FilterListIcon className="filter-icon"></FilterListIcon>
                        {t('Filters')}
                    </Button>
                    : ''
                }
            </div>

            <Modal show={showFiltersModal} centered={true} onHide={() => setFiltersModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <FilterListIcon className="filter-icon" />
                        {t('Filter By')}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Filters onChange={filtersChanged}></Filters>
                </Modal.Body>
            </Modal>
        </>
    );
}