import React, { Component } from 'react';
import './main.scss';
import Map from '../../components/Map/map';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';

class MainPage extends Component {
    render() {
        const { t } = this.props;
        return (
            <div className="main-container">
                {this.props.seekers.map((seeker, index) =>
                    <div key={seeker.id} className="seeker">
                        {seeker.name}
                    </div>
                )}
                {t('Welcome to React')}
                <Map />
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