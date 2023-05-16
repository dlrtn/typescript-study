// This registration token comes from the client FCM SDKs.
import {getMessaging} from "firebase-admin/lib/messaging";

const registrationToken = 'dHcHqYuQThuzC6fSMbpM9R:APA91bETpig00UuvCyJ_PBZU-5dQe74pNRVCZB1EHRrmipEiaXphfV5VDevHkL3EZ4IBs7zZ+S3Dd3NE5caHX3vmYEnXyu000QN3C74skafmr LW2NZBZVJcJJjshnraShq4FaSPwzeSm';

const message = {
    data: {
        title: '졸릴땐',
        body: '담배타임!'
    },
    token: registrationToken
};

// Send a message to the device corresponding to the provided
// registration token.
getMessaging().send(message)
    .then((response) => {
        // Response is a message ID string.
        console.log('Successfully sent message:', response);
    })
    .catch((error) => {
        console.log('Error sending message:', error);
    });
