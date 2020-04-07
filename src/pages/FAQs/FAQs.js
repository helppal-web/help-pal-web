import React, { Component } from 'react';
import { fetchFAQs } from '../../actions';
import FAQ from '../../components/FAQ/FAQ';
import ActionsBar from '../../components/ActionsBar/ActionsBar';
import { withTranslation } from 'react-i18next';

class FAQs extends Component {
    state = {
        FAQs: [],
    }

    componentDidMount() {

        const { FAQtype, i18n } = this.props;
        fetchFAQs(FAQtype, i18n.language).then(res => {
            this.setState({ FAQs: res })
        });
    }

    render() {
        return (
            <>
                <ActionsBar />
                <FAQ FAQs={this.state.FAQs} />
            </>
        )
    }
}

export default withTranslation()(FAQs);