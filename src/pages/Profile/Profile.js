import React, { Component } from 'react';
import './Profile.scss';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';

class Profile extends Component {

    render() {
        return {
        }
    }
}

const mapStateToProps = (store) => {
    const { state } = store;
    return {
        user: state.currentUser
    }
}

export default connect(mapStateToProps)(withTranslation()(Profile));