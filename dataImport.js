/** json을 firestore에 업로드 시 사용하는 파일
 *
 * 사용법:
 * 'npm install firestore-export-import' (설치되어 있을 시 skip)
 * json 파일의 형식을 { "컬렉션 이름": [...] } 로 변경해준다.
 * terminal에 'node dataImport.js' 입력
 * 혹시 에러나면 firebase-config.js의 firebaseConfig 제외하고 모두 임시 주석처리하고 하기
 * */

// Imports
const firestoreService = require('firestore-export-import');
const firebaseConfig = require('./src/firebase-config.js');
const serviceAccount = require('./serviceAccount.json');

// JSON To Firestore
const jsonToFirestore = async () => {
  try {
    console.log('Initialzing Firebase');
    await firestoreService.initializeApp(serviceAccount, firebaseConfig.databaseURL);
    console.log('Firebase Initialized');

    // Import File Location
    await firestoreService.restore('./singleplus.json'); // json file 경로 입력
    console.log('Upload Success');
  } catch (error) {
    console.log(error);
  }
};

jsonToFirestore();
