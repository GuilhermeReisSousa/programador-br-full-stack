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
let newUserEmail = "novoteste@teste.com";
let newUserPassword = "123abc";

//* Aqui adicionamos um usuario no Firebase
/*auth
  .createUserWithEmailAndPassword(newUserEmail, newUserPassword)
  .then((user) => {
    console.log("Usuário inserido com sucesso");
    console.log(user);
  })
  .catch((err) => {
    console.log(err);
  });
  */

//* Aqui Acessamos o usuario logado ( mas precisamos dessa função)
/*
function login() {
  let UserEmail = "novoteste@teste.com";
  let UserPassword = "123abc";

  auth
    .signInWithEmailAndPassword(UserEmail, UserPassword)
    .then(() => {
      console.log(auth.currentUser);
    })
    .catch((err) => {
      console.log(err);
    });
}
login();

//* Aqui usamos um função do Firebase para facilitar e mostrar a mesma coisa do, de cima ( toda vez que tiver qualquer alteração no usuario ele vai atualizarr a informação e mostrar)

auth.onAuthStateChanged((callback) => {
  if (callback) {
    console.log("Usuario logado");
  } else {
    console.log("Ninguém logado");
  }
});

//! Podemos deslogar o usuario assim:
function signOut() {
  auth
    .signOut()
    .then(() => {
      console.log("Sucesso Usuario deslogado");
    })
    .catch((error) => {
      console.log(error);
    });
}

setTimeout(login, 2000);

*/
