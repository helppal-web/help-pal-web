import React, { Component, } from 'react';
import { connect } from 'react-redux';
import Table from '../../components/UI/Table/Table';
import { withTranslation } from 'react-i18next';
import CancelButton from "../../assets/Cancel-bt.png"
import { statusToColor, requestStatuses } from '../../helpers';
import ActionsBar from '../../components/ActionsBar/ActionsBar';


class ActiveRequest extends Component {

    constructor(props) {
        super(props);
        this.actions = [
            {
                icon: () => <img alt="cancel" src={CancelButton} />,
                tooltip: 'Cancel',
                onClick: (event, rowData) => console.log(rowData)
            }
        ];
    }


    parseData = (user, requests) => {
        const data = [];

        requests.forEach((request) => {
            if (request.ownerProfile &&
                user && request.ownerProfile.id === user.id &&
                (
                    request.status === requestStatuses.OPEN ||
                    request.status === requestStatuses.IN_PROGRESS ||
                    request.status === requestStatuses.ASSIGNED ||
                    request.status === requestStatuses.IN_DISPUTE
                )
            ) {
                //let createdFormat = new Intl.DateTimeFormat('en-GB').format(new Date(created));
                const { created, category, priority, description, status } = request;
                data.push({ created, category, priority, description, status })
            }
        });
        return data;
    }

    render() {
        const { currentUser, requests, t } = this.props;
        if (requests && currentUser) {
            let data = this.parseData(currentUser, requests);
            let title = t('Active Requests')
            const columns = [
                { title: t("DATE"), field: "created" },
                { title: t("CATEGORY"), field: "category" },
                { title: t("PRIORITY"), field: "priority" },
                { title: t("DESCRIPTION"), field: "description" },
                { title: t("STATUS"), field: "status", cellStyle: (rowData) => ({ color: statusToColor(rowData) }) }
            ];
            return (
                <>
                    <ActionsBar />
                    <Table title={title} data={data} columns={columns} actions={this.actions}></Table>
                </>
            )
        } else {
            return ('');
        }
    }
}



const mapStateToProps = (store) => {
    const { requests, user } = store;
    return {
        requests: requests.requests,
        currentUser: user.currentUser
    }
}

export default connect(mapStateToProps)((withTranslation())(ActiveRequest));