import firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: (process.env.FIREBASE_PROJECT_ID),
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_MESSAGING__APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').push({
//     description: 'expense 1',
//     note: '',
//     amount: 1350,
//     createdAt: 1000
// })

// database.ref('expenses').on('value',(snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses);
// })

// database.ref('expenses').on('child_changed',(snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })


// database.ref().set({
//     name: 'Matan Cotton', 
//     age: 23,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     isSingle: true,
//     location: {
//         city: 'Tel aviv',
//         country: 'Israel'
//     } 
// }).then(() => {
//     console.log('Data is saved!')
// }).catch((e) => {
//     console.log('This was failed', e)
// })

// database.ref('isSingle').remove()
// .then(() => {
//     console.log('isSingle was deleted succesfuly!');
// }).catch((e) => {
//     console.log('isSingle failed to delete with an error ',e)
// })

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// database.ref().on('value', (snapshot) => {
//     let {name, job} = snapshot.val();
//     console.log(`${name} is a ${job.title} at ${job.company}`);
// },(e) => {
//     console.log('Error: ', e);
// })

// setTimeout(() => {
//     database.ref().update({
//         'job/title': 'manager'
//     })
// }, 3000);