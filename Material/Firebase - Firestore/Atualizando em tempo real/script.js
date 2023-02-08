const firebaseConfig = {
  apiKey: "AIzaSyBn63YbUezqPYKqjMDTmN1inh3viLaVJzY",
  authDomain: "colegio-progbr-25192.firebaseapp.com",
  databaseURL: "https://colegio-progbr-25192-default-rtdb.firebaseio.com",
  projectId: "colegio-progbr-25192",
  storageBucket: "colegio-progbr-25192.appspot.com",
  messagingSenderId: "866242342827",
  appId: "1:866242342827:web:0b617262b88cd06dffecee",
  measurementId: "G-CJ5EMS0S5N",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

//Atualiza em tempo real, e mostra
// db.collection("Turma-A").onSnapshot((snapshot) => {
//   snapshot.forEach((doc) => {
//     let aluno = doc.data();
//     console.log(aluno);
//   });
// });

let docRef = db.collection("Turma-A").doc("r7LSrHElPsx30HGUr3et");

docRef.onSnapshot((callback) => {
  console.log(callback.data());
});
