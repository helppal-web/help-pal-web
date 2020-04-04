import React from "react";
import { useTranslation } from 'react-i18next';
import Table from "../../components/UI/Table/Table";
import { useSelector } from "react-redux";



export default function RequestsHistory() {

    const { t } = useTranslation();
    const tableColumns = [
        { title: t('DATE'), field: "created" },
        { title: t('CATEGORY'), field: "category" },
        { title: t("PRIORITY"), field: "priority" },
        { title: "DESCRIPTION", field: "description" },
        { title: "STATUS", field: "status" }
    ]

    const requests = useSelector(state => state.requests.requests);
    return (
        <Table title={t('Requests History')} data={requests} columns={tableColumns}></Table>
    )
}