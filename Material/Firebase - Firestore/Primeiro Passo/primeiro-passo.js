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

let db = firebase.firestore();

//Ler todos os dados de uma coleção
// db.collection("Turma-A").get()
// .then((sanpshot) => {
//   sanpshot.forEach((doc) => {
//     let aluno = doc.data()
//     console.log(aluno.)
//   })
// })

let docRef = db.collection("Turma-A").doc("7XpoP5xgkvwgXUqj9MSR")

docRef.get().then((doc) => {
  console.log(doc.data().nome);
})