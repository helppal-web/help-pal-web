export const users = [
    { id: 2, name: 'Carl', email: 'carl@gmail.com', phoneNumber: '0505123456', image: undefined, address: '', coords: { lat: 32.086044, lon: 34.794198 }, language: ['hebrew', 'english'], cases: 3, badge: true, birthYear: 1995, score: 81 },
    { id: 3, name: 'Russel', email: 'russel@gmail.com', phoneNumber: '0505123456', image: undefined, address: '', coords: { lat: 32.086044, lon: 34.794198 }, language: ['hebrew', 'english'], cases: 3, badge: true, birthYear: 1995, score: 81 }

]
export const requests = [
{
    id: 2,
    created: "4/5/20 13:02 pm",
    location: { lat: 32.091180, lon: 34.773975 },
    onlyPreviousHelpers: false,
    status: 'IN_PROGRESS',
    ownerProfile: users[0],
    destProfile: users[1],
    responderProfile: users[1],
    category: 'Groceries',
    priority: 'Medium',
    phoneNumber: '0500171803',
    address: 'Struck 9, Tel Aviv',
    description: "Need basic groceries: bread, vegetables, cheese."
},
{
    id: 3,
    created: "4/5/20 13:05 pm",
    location: { lat: 32.075044, lon: 34.794205 },
    onlyPreviousHelpers: false,
    status: 'IN_PROGRESS',
    ownerProfile: users[0],
    destProfile: users[1],
    responderProfile: users[1],
    category: 'Medicine',
    priority: 'High',
    phoneNumber: '0500171803',
    address: 'Struck 9, Tel Aviv',
    description: "Need my gastro medicine urgently!"
},
{
    id: 4,
    created: "4/5/20 13:05 pm",
    location: { lat: 32.087334, lon: 34.772102 },
    onlyPreviousHelpers: false,
    status: 'IN_PROGRESS',
    ownerProfile: users[0],
    destProfile: users[1],
    responderProfile: users[1],
    category: 'Medicine',
    priority: 'High',
    phoneNumber: '0540922493',
    address: 'Struck 9, Tel Aviv',
    description: "I have to get my asthma medication!"
},

{
    id: 4,
    created: "4/5/20 13:05 pm",
    location: { lat: 32.087334, lon: 34.772102 },
    onlyPreviousHelpers: false,
    status: 'CLOSED',
    ownerProfile: users[0],
    destProfile: users[1],
    responderProfile: users[1],
    category: 'Medicine',
    priority: 'High',
    phoneNumber: '0540922493',
    address: 'Struck 9, Tel Aviv',
    description: "I have to get my asthma medication!"
},

{
    id: 4,
    created: "4/5/20 13:05 pm",
    location: { lat: 32.087334, lon: 34.772102 },
    onlyPreviousHelpers: false,
    status: 'CLOSED',
    ownerProfile: users[0],
    destProfile: users[1],
    responderProfile: users[1],
    category: 'Medicine',
    priority: 'High',
    phoneNumber: '0540922493',
    address: 'Struck 9, Tel Aviv',
    description: "I have to get my asthma medication!"
},
]

