import React from "react";
import { useTranslation } from 'react-i18next';
import Table from "../../components/UI/Table/Table";
import { useSelector } from "react-redux";
import ActionsBar from "../../components/ActionsBar/ActionsBar";
import { connect } from 'react-redux';



function RequestsHistory(props) {

    const { t } = useTranslation();
    const tableColumns = [
        { title: t('DATE'), field: "created" },
        { title: t('CATEGORY'), field: "category" },
        { title: t("PRIORITY"), field: "priority" },
        { title: "DESCRIPTION", field: "description" },
        { title: "STATUS", field: "status" }
    ]

    const fn = (state) => {
        return state.requests.requests.filter(request => request.ownerProfile && props.currentUser && request.ownerProfile.email === props.currentUser.email && request.status === 'CLOSED'
       )
    }
    const requests = useSelector(state => state.requests.requests.filter(request => request.ownerProfile && props.currentUser && request.ownerProfile.email === props.currentUser.email && request.status === 'CLOSED'
    ));

    function onFiltersChangeHandler(filters) {
        const { radius, category, time, previousCallers, badge } = filters;

    }
    return (
        <>
            <ActionsBar showFilter={true} filtersChanged={onFiltersChangeHandler.bind(this)} />
            <Table title={t('Requests History')} data={requests} columns={tableColumns}></Table>
        </>
    )
}

const mapStateToProps = (store) => {
    const { user } = store;

    return {
        currentUser: user.currentUser
    }
}

export default connect(mapStateToProps)(RequestsHistory);