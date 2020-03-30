import React, { Component } from 'react';
import './Profile.scss';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import Request from '../../components/Request/Request';
import { CardDeck, Tabs, Tab } from 'react-bootstrap';

class Profile extends Component {
    state = {
        currentTab: 'myRequests'
    }
    render() {

        // TODO: Remove - hardcoded!!!!
        const requests = [
            {
                category: 'Supermarket',
                urgency: 'Whenever',
                forAFriend: false,
                name: 'Omer Fishman',
                friendsName: 'Yosi LoOmer',
                friendsPhoneNumber: '0522424395',
                address: 'King George 68, Tel-Aviv, Israel',
                comments: "Take your Time"
            },
            {
                category: 'Medicine',
                urgency: 'Urgent',
                forAFriend: false,
                name: 'Omer Fishman',
                friendsName: 'Yosi LoOmer',
                friendsPhoneNumber: '0522424395',
                address: 'King George 68, Tel-Aviv, Israel',
                comments: "Be fast please!!"
            }
        ]
        return (
            <div className="container">
                <Tabs
                    id="profile-tab-control"
                    activeKey={this.state.currentTab}
                    onSelect={(k) => this.setState({ currentTab: k })}>

                    <Tab eventKey="myRequests" title="My Requests">
                        <CardDeck className="row mx-auto mt-4" >
                            {requests.map((request) => <Request request={request} />)}
                        </CardDeck>
                    </Tab>
                    <Tab eventKey="history" title="History">
                        TODO: history.... :)
                </Tab>
                </Tabs>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    const { state } = store;
    return {
        user: state.currentUser
    }
}

export default connect(mapStateToProps)(withTranslation()(Profile));