import React, { Component } from 'react';
import './main.scss';
import Map from '../../components/Map/map';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import Header from '../../components/Header/header';

class MainPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container mt-3" >
                    <Map />
                </div>
            </div>

        );
    }
}

const mapStateToProps = (store) => {
    const { state } = store;
    return {
        seekers: state.seekers
    }
}

export default connect(mapStateToProps)(withTranslation()(MainPage));