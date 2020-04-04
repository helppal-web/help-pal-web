
import { FETCH_SEEKERS } from './types';
export * from './request';
export * from './notifications';
export * from './user';
export * from './logister';

export const fetchAllSeekers = () => {
    return (dispatch) => {
        // TODO: Change according to Backend
        // return axios.post(Config.serverUrl + '/fetch_SEFETCH_SEEKERS', { })
        //  .then(response => {
        //      // TODO: Change according to Backend
        //      dispatch(fetchSeekersSuccess(response.data));
        //  })
        //  .catch(error => {
        //      alert('An error has occured');
        //      throw (error);
        //  });
        let hardCodedSeekers = [
            { id: 1, name: 'Blah Blah', email: 'omerfishman.work@gmail.com', phoneNumber: '0524280879', image: undefined, address: '', coords: { lat: 32.078044, lon: 34.774198 }, language: ['hebrew', 'english'], cases: 7, badge: false, birthYear: undefined, score: 33 },
            { id: 2, name: 'Blue Blue', email: 'omerfishman.work@gmail.com', phoneNumber: '0505123456', image: undefined, address: '', coords: { lat: 32.086044, lon: 34.794198 }, language: ['hebrew', 'english'], cases: 3, badge: true, birthYear: 1995, score: 81 },
            { id: 3, name: 'Omer Fishman', email: 'omerfishman.work@gmail.com', phoneNumber: '0522123456', image: undefined, address: '', coords: { lat: 32.075044, lon: 34.794198 }, language: ['hebrew', 'english'], cases: 2, badge: false, birthYear: 1988, score: 12 },
        ]
        return dispatch(fetchSeekersSuccess({ count: hardCodedSeekers.length, seekers: hardCodedSeekers }));
    }
}

export const fetchSeekersSuccess = (data) => {
    return {
        type: FETCH_SEEKERS,
        seekers: data.seekers,
        count: data.count
    }
};
