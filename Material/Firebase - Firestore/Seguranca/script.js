// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const auth = firebase.auth();

function ler() {
  db.collection("Turma-A")
    .get()
    .then((spanshot) => {
      snapshot.forEach((turma) => {
        console.log(turma.data());
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

function escrever() {
  db.collection("Turma-A")
    .add({ title: "Novo OBJ", numero: Math.random() })
    .then(() => {
      console.log("Deu Certo");
    })
    .catch((err) => {
      console.log(err);
    });
}

escrever();
