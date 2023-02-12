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
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

//!Assim apagamos um Field
/*db.collection("Turma-A")
  .doc("Vro24kKCD7FcH56q9twH")
  .update({
    cidades: firebase.firestore.FieldValue.delete(),
  })
  .then(() => {
    console.log("OK");
  })
  .catch((err) => {
    console.log(err);
  });
*/

//!Assim apagamos o document
db.collection("Turma-A")
  .doc("r7LSrHElPsx30HGUr3et")
  .delete()
  .then((result) => {
    result = console.log("OK");
  })
  .catch((err) => {
    console.log(err);
  });
