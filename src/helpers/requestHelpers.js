
export const requestTypes = {
    HELP: 'Help',
    HELPER: 'Helper'
}

export const responseTypes = {
    CREATED: 'CREATED',
    UPDATED: 'UPDATED',
    ACCEPTED: 'ACCEPTED',
    DIFFERENT: 'DIFFERENT',
    IRRELEVANT: 'IRRELEVANT',
    REOPEN: 'REOPEN',
    REJECT: 'REJECT'
}

export const requestStatuses = {
    OPEN: 'Open',
    ASSIGNED: 'Assigned',
    IN_PROGRESS: 'In Progress',
    DELIVERED: 'Delivered',
    CLOSED: 'Closed',
    IN_DISPUTE: 'In Dispute',
    DISMISSED: 'Dismissed'
}

export const requestStatusCode = {
    'Open': 1,
    'In Progress': 2,
    'Assigned': 3,
    'Delivered': 4,
    'In Dispute': 5,
    'Dismissed': 6,
    'Closed': 7
}

export function statusToColor(status) {
    // TODO: Real colors, to actual statuses
    switch (status) {
        case requestStatuses.ASSIGNED:
        case requestStatuses.IN_DISPUTE:
        case requestStatuses.IN_PROGRESS:
        case requestStatuses.OPEN:
            return '#0cc5c59e';

        case requestStatuses.DELIVERED:
            return '#23c119ad';

        case requestStatuses.CLOSED:
        case requestStatuses.DISMISSED:
            return '#efefef';

        default:
            return 'transparent';
    }
}