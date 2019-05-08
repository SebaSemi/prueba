// ----------Esto refleja el database  momentaneamente ---------//
const users = document.querySelector("#userList");


function renderUsers(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let email = document.createElement('span');


    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    email.textContent = doc.data().email;

    li.appendChild(name);
    li.appendChild(email);

    users.appendChild(li);
}


// Para obtener la data 
db.collection('admin').get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {
      // console.log(doc.data()) //Data hace que se vea la informacion
      renderUsers(doc); 
    })
})


function ingreso(){

    var email2 = document.getElementById("email2").value;
    var password2 = document.getElementById("contrasena2").value;

    firebase.auth().signInWithEmailAndPassword(email2, password2)
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        
        console.log(errorCode);
        console.log(errorMessage);
      });
      
}

function registrar(){

  var email = document.getElementById("email").value;
  var password = document.getElementById("contrasena").value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
  .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
}


function observador(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log("Existe usuario activo");
            aparece();
            
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          // ...
        } else {
          // User is signed out.
          console.log("No existe usuario activo");
          // ...
        }
      });
}
observador();




function aparece(){

    var contenido = document.getElementById("contenido");
    contenido.innerHTML = `<button onclick="cerrar()">Cerrar sesion</button>`

}


function cerrar(){
    firebase.auth().signOut()
    .then (function(){
        window.open("index.html", "_self")
    })
    .catch(function(error){
        console.log(error);
    })
}

