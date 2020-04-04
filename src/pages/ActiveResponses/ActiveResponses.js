import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '../../components/UI/Table/Table';
import { withTranslation } from 'react-i18next';
import CancelIcon from '@material-ui/icons/Cancel';
import './ActiveResponses.scss';
import { Button } from 'react-bootstrap';
import { statusToColor } from '../../helpers';

class ActiveResponses extends Component {

    constructor(props) {
        super(props);
        this.data = []
        this.title = 'Active Responses'
        this.translate = props.t;
        this.columns = [
            { title: this.translate("DATE"), field: "created" },
            { title: this.translate("CATEGORY"), field: "category" },
            { title: this.translate("PRIORITY"), field: "priority" },
            { title: this.translate("DESCRIPTION"), field: "description" },
            { title: this.translate("STATUS"), field: "status", cellStyle: (rowData) => ({ color: statusToColor(rowData) }) }
        ];

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
                icon: () => <CancelIcon />,
                tooltip: 'Save User',
                onClick: (event, rowData) => console.log(rowData)
            }
        ];
    }



    parseData = () => {
        this.data = [];
        const { requests, currentUser } = this.props;
        requests.forEach((request) => {
            if (currentUser && request.ownerProfile && request.ownerProfile.id !== currentUser.id) {
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
        console.log(this.data)
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