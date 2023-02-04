//*  inicialize FireBase
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
const turma = "Turma-A";

//*Existe jeitos mais faceis
/* db.collection(turma).add({
   nome: "Igor",
   notas: {
     "nota-1": 5.0,
     "nota-2": 7.0,
   }
 }).then(doc => {
   console.log("Documento inserido com sucesso: ", doc)
 }).catch(err => {
   console.log(err);
 })  */

//!cuidado que o SET reescreve o documento inteiro
/*
db.collection(turma)
  .doc("aluno01")
  .set({
    nome: "Mariana",
    notas: {
      "nota-1": 5.0,
      "nota-2": 7.0,
    },
  })
  .then(() => {
    console.log("Documento inserido com sucesso: ", doc);
  })
  .catch((err) => {
    console.log("Ocorreu um erro: ", err);
  });
*/

//* Essa maneiro sobe, sem apagar nada UPDATE, podemos criar novos DOC
//! Com array ele pode apagar todo os dados do array e sobre-escrever

db.collection(turma)
  .doc("Vro24kKCD7FcH56q9twH")
  .update({
    // cidades: ["São Paulo", "Santo André", "Diadema"],
    cidades: firebase.firestore.FieldValue.arrayRemove("Santo André"),
  })
  .then(() => {
    console.log("Update feito com sucesso");
  })
  .catch((err) => {
    console.log(err);
  });

//* é um coisa mais chata de fazer porque precisa ser bem certinho, então e so pesquisar
//* MyParam: firebase.firestore.FielValue.increment(....) tem mais https://firebase.google.com/docs/reference/js/v8/firebase.firestore.FieldValue
