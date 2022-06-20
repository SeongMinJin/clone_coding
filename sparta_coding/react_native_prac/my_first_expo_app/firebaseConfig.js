import firebase from "firebase/compat/app";

// 사용할 파이어베이스 서비스 주석을 해제합니다
//import "firebase/compat/auth";
import "firebase/compat/database";
//import "firebase/compat/firestore";
//import "firebase/compat/functions";
import "firebase/compat/storage";

// Initialize Firebase
//파이어베이스 사이트에서 봤던 연결정보를 여기에 가져옵니다
const firebaseConfig = {
  apiKey: "AIzaSyCEKnMTM_DR5Syp1opzZpQ_zZj7w6W4Huk",
  authDomain: "sparta-react-native-prac.firebaseapp.com",
  projectId: "sparta-react-native-prac",
  storageBucket: "sparta-react-native-prac.appspot.com",
  messagingSenderId: "566497411005",
  appId: "1:566497411005:web:9e8de05a6184ca05111cd4",
  measurementId: "G-F8JVFS2QPJ",
  databaseURL: "https://sparta-react-native-prac-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

//사용 방법입니다. 
//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드로 알아두면 됩니다.
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database()