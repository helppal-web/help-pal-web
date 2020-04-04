import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '../../components/UI/Table/Table';
import { withTranslation } from 'react-i18next';
import CancelButton from "../../assets/Cancel-bt.png"
import FinishButton from "../../assets/Finish-bt.png"
import './ActiveResponses.scss';
import { Button } from 'react-bootstrap';
import { statusToColor } from '../../helpers';

class ActiveResponses extends Component {

    constructor(props) {
        super(props);
        this.data = []

        this.actions = [
            // {
            //     icon: () => <Button variant="outline-danger">{this.translate('CANCEL')}</Button>,
            //     tooltip: 'Cancel Response',
            //     onClick: (event, rowData) => console.log(rowData)
            // },
            // {
            //     icon: () => <Button variant="helppal">{this.translate('FINISH')}</Button>,
            //     tooltip: 'Finish Response',
            //     onClick: (event, rowData) => console.log(rowData)
            // }
            {
                icon: () => <img src={CancelButton} />,
                tooltip: 'Cancel',
                onClick: (event, rowData) => console.log(rowData)
            },
            {
                icon: () => <img src={FinishButton} />,
                tooltip: 'Finish',
                onClick: (event, rowData) => console.log(rowData)
            }
        ];
    }



    parseData = () => {
        this.data = [];
        const { requests, currentUser } = this.props;
        requests.forEach((request) => {
            // request.responderProfile - Saif
            // request.ownerProfile - Omer
            if (currentUser && request.responderProfile && request.responderProfile.id !== currentUser.id && request.status === 'IN_PROGRESS') {
                const { created, category, priority, description, status } = request;
                let createdFormat = new Intl.DateTimeFormat('en-GB').format(new Date(created));
                let statusTranslated = this.translate(status);
                let categoryTranslated = this.translate(category);
                let priorityTranslated = this.translate(priority);
                this.data.push({ created: createdFormat, category: categoryTranslated, priority: priorityTranslated, description, status: statusTranslated })
            }
        });
    }

    render() {
        this.parseData();
        this.title = this.props.t('Active Responses')
        this.columns = [
            { title: this.props.t("DATE"), field: "created" },
            { title: this.props.t("CATEGORY"), field: "category" },
            { title: this.props.t("PRIORITY"), field: "priority" },
            { title: this.props.t("DESCRIPTION"), field: "description" },
            { title: this.props.t("STATUS"), field: "status", cellStyle: (rowData) => ({ color: statusToColor(rowData) }) }
        ];
        return (
            <div className="active-responses-container px-5">
                <Table title={this.title} data={this.data} columns={this.columns} actions={this.actions}></Table>
            </div>
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

export default connect(mapStateToProps)((withTranslation())(ActiveResponses));