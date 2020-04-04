import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import Table from '../../components/UI/Table/Table';

class ActiveRequest extends Component {

    constructor(props) {
        super(props);
    }
    columns = [
        { title: "DATE", field: "created" },
        { title: "CATEGORY", field: "category" },
        { title: "PRIORITY", field: "priority" },
        { title: "DESCRIPTION", field: "description" },
        { title: "STATUS", field: "status" },

    ];

    data = [
    ]

    title = 'Active Requests'
    
    parseData = () => {
        this.data = [];
        this.props.requests.forEach((request) => {

            const { created, category, priority, description, status, ...partialObject } = request;
            this.data.push({ created, category, priority, description, status })
        });

    }

    render() {
        this.parseData();
        return (
            <Table title={this.title} data={this.data} columns={this.columns}></Table>
        )
    }
}

const mapStateToProps = (store) => {
    const { requests } = store;
    return {
        requests: requests.requests
    }
}

export default connect(mapStateToProps)(ActiveRequest);