import React, { Component, } from 'react';
import { connect } from 'react-redux';
import Table from '../../components/UI/Table/Table';
import { withTranslation } from 'react-i18next';
import { statusToColor } from '../../helpers';
import CancelButton from "../../assets/Cancel-bt.png"
class ActiveRequest extends Component {

    constructor(props) {
        super(props);
        this.data = []
        this.title = 'Active Requests'
        this.columns = [
            { title: "DATE", field: "created" },
            { title: "CATEGORY", field: "category" },
            { title: "PRIORITY", field: "priority" },
            { title: "DESCRIPTION", field: "description" },
            { title: "STATUS", field: "status", cellStyle: (rowData) => ({ color: statusToColor(rowData) }) }
        ];

        this.actions = [
            {
                icon: () => <img src={CancelButton} />,
                tooltip: 'Cancel',
                onClick: (event, rowData) => console.log(rowData)
            }
        ];
    }



    parseData = () => {
        this.data = [];
        this.props.requests.forEach((request) => {
            if (request.ownerProfile && this.props.currentUser && request.ownerProfile.email === this.props.currentUser.email && request.status === 'IN_PROGRESS') {
                const { created, category, priority, description, status } = request;
                this.data.push({ created, category, priority, description, status })
            }
        });
    }

    render() {
        this.parseData();
        this.title = this.props.t('Active Requests')
        this.columns = [
            { title: this.props.t("DATE"), field: "created" },
            { title: this.props.t("CATEGORY"), field: "category" },
            { title: this.props.t("PRIORITY"), field: "priority" },
            { title: this.props.t("DESCRIPTION"), field: "description" },
            { title: this.props.t("STATUS"), field: "status" }
        ];
        return (
            <Table title={this.title} data={this.data} columns={this.columns} actions={this.actions}></Table>
        )
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