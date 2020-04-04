import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import Table from '../../components/UI/Table/Table';
import { withTranslation } from 'react-i18next';
import CancelIcon from '@material-ui/icons/Cancel';
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
            { title: "STATUS", field: "status" }
        ];

        this.actions = [
            {
            icon: () => <CancelIcon />,
            tooltip: 'Save User',
            onClick: (event, rowData) => console.log(rowData)
          }
        ];
    }
    


    parseData = () => {
        this.data = [];
        this.props.requests.forEach((request) => {
            const { created, category, priority, description, status } = request;
            this.data.push({ created, category, priority, description, status })
        });

    }

    render() {
        this.parseData();
        return (
           <Table title={this.title} data={this.data} columns={this.columns} actions={this.actions}></Table>
        )
    }
}



const mapStateToProps = (store) => {
    const { requests } = store;
    return {
        requests: requests.requests
    }
}

export default connect(mapStateToProps)((withTranslation())(ActiveRequest));