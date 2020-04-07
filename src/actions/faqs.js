export const fetchFAQs = (FAQtype, language) => {

    return new Promise((resolve, reject) => {
        const englishHardCodedRequesterFAQs = [
            {
                title: 'Your request was submitted',
                text: 'Your request was submitted',
            },
            {
                title: 'Volunteer is ready to fill your request',
                text: 'Volunteer is ready to fill your request',
            },
            {
                title: 'Volunteer is sent to you',
                text: 'Volunteer is sent to you',
            }
        ];
        const hebrewHardCodedRequesterFAQs = [
            {
                title: 'בקשה',
                text: 'Your request was submitted',
            },
            {
                title: 'Volunteer is ready to fill your request',
                text: 'Volunteer is ready to fill your request',
            },
            {
                title: 'Volunteer is sent to you',
                text: 'Volunteer is sent to you',
            }
        ];
        const englishHardCodedHelperFAQs = [
            {
                title: 'Your help was submitted',
                text: 'Your help was submitted',
            },
            {
                title: 'Volunteer is ready to fill your help',
                text: 'Volunteer is ready to fill your help',
            },
            {
                title: 'Helper is sent to you',
                text: 'Helper is sent to you',
            }
        ];
        const hebrewHardCodedHelperFAQs = [
            {
                title: 'Your בקשת עזרה was submitted',
                text: 'Your help was submitted',
            },
            {
                title: 'Volunteer is ready to fill your help',
                text: 'Volunteer is ready to fill your help',
            },
            {
                title: 'Helper is sent to you',
                text: 'Helper is sent to you',
            }
        ];

        switch (FAQtype) {
            case 'helper':
                switch (language) {
                    case 'en':
                        resolve(englishHardCodedHelperFAQs);
                        break;
                    case 'he':
                        resolve(hebrewHardCodedHelperFAQs);
                        break;

                    default:
                        reject();
                        break;
                }
                break;
            case 'requester':
                switch (language) {
                    case 'en':
                        resolve(englishHardCodedRequesterFAQs);
                        break;
                    case 'he':
                        resolve(hebrewHardCodedRequesterFAQs);
                        break;

                    default:
                        reject();
                        break;
                }
                break;
            default:
                reject();
                break;
        }
    });
}
