import React from "react";
import { useTranslation } from 'react-i18next';
import Table from "../../components/UI/Table/Table";
import { useSelector } from "react-redux";



export default function RequestsHistory() {

    const { t } = useTranslation();
    const tableColumns = [
        { title: t('Date'), field: "created" },
        { title: t('Category'), field: "category" },
        { title: "Priority", field: "priority" },
        { title: "Description", field: "description" },
        { title: "Status", field: "status" }
    ]

    const requests = useSelector(state => state.requests.requests);
    return (
        <Table title={t('Requests History')} data={requests} columns={tableColumns}></Table>
    )
}