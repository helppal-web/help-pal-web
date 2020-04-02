import { FETCH_NOTIFICATIONS } from './types';
import * as Config from '../config/config';
import axios from 'axios';

export const fetchNotifications = () => {
    return (dispatch) => {
        // TODO: Change according to Backend
        // return axios.post(Config.serverUrl + '/fetch_notifications', { })
        //  .then(response => {
        //      // TODO: Change according to Backend
        //      dispatch(fetchNotificationsSuccess(response.data));
        //  })
        //  .catch(error => {
        //      alert('An error has occured');
        //      throw (error);
        //  });
        const hardCodedNotifications = [
            {
                text: 'Your request was submitted',
                date: 'Jan 9, 2014'
            },
            {
                text: 'Volunteer is ready to fill your request',
                date: 'July 20, 2014'
            },
            {
                text: 'Volunteer is sent to you',
                date: 'July 21, 2014'
            }
        ]
        return dispatch(fetchNotificationsSuccess({ count: hardCodedNotifications.length, notifications: hardCodedNotifications }));
    }
}

export const fetchNotificationsSuccess = (data) => {
    return {
        type: FETCH_NOTIFICATIONS,
        notifications: data.notifications,
        count: data.count
    }
};
