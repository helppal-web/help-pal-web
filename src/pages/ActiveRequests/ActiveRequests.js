import React, { Component, } from 'react';
import { connect } from 'react-redux';
import Table from '../../components/UI/Table/Table';
import { withTranslation } from 'react-i18next';
import CancelButton from "../../assets/Cancel-bt.png"
import { statusToColor } from '../../helpers';
import ActionsBar from '../../components/ActionsBar/ActionsBar';


class ActiveRequest extends Component {

    constructor(props) {
        super(props);
        this.data = []
        this.title = 'Active Requests'

        this.actions = [
            {
                icon: () => <img alt="cancel" src={CancelButton} />,
                tooltip: 'Cancel',
                onClick: (event, rowData) => console.log(rowData)
            }
        ];
    }


    parseData = () => {
        this.data = [];
        this.props.requests.forEach((request) => {
            if (request.ownerProfile && this.props.currentUser && request.ownerProfile.email === this.props.currentUser.email && request.status === 'IN_PROGRESS') {
                //let createdFormat = new Intl.DateTimeFormat('en-GB').format(new Date(created));
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
            { title: this.props.t("STATUS"), field: "status", cellStyle: (rowData) => ({ color: statusToColor(rowData) }) }
        ];
        return (
            <>
                <ActionsBar />
                <Table title={this.title} data={this.data} columns={this.columns} actions={this.actions}></Table>
            </>
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