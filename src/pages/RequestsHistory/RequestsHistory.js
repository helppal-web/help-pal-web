import React from "react";
import { useTranslation } from 'react-i18next';
import Table from "../../components/UI/Table/Table";
import { useSelector } from "react-redux";
import ActionsBar from "../../components/ActionsBar/ActionsBar";
import { requestStatuses } from "../../helpers";



export default function RequestsHistory() {

    const { t } = useTranslation();
    const tableColumns = [
        { title: t('DATE'), field: "created" },
        { title: t('CATEGORY'), field: "category" },
        { title: t("PRIORITY"), field: "priority" },
        { title: "DESCRIPTION", field: "description" },
        { title: "STATUS", field: "status" }
    ]

    let requests = useSelector(state => state.requests.requests);
    const currentUser = useSelector(state => state.user.currentUser);

    if (requests) {
        requests = requests.filter((request) => (
            request.ownerProfile &&
            currentUser && request.ownerProfile.id === currentUser.id &&
            (
                request.status === requestStatuses.CLOSED ||
                request.status === requestStatuses.DELIVERED
            )
        ));
    }

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