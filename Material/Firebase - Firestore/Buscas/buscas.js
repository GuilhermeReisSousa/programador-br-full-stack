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
let bancoDanos = firebase.firestore();

bancoDanos
  .collection("Turma-A")
  .where("notas.nota-2", ">=", 7.5)
  .get()
  .then((callback) => {
    callback.forEach((resultado) => {
      let aluno = resultado.data();
      console.log(aluno.nome);
    });
  });
