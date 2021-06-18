var firebaseConfig = {
      apiKey: "AIzaSyDc6BEh8Jwwt0CHSaNJ_DwIgn7bkaCDdCU",
      authDomain: "switter-be303.firebaseapp.com",
      databaseURL: "https://switter-be303-default-rtdb.firebaseio.com",
      projectId: "switter-be303",
      storageBucket: "switter-be303.appspot.com",
      messagingSenderId: "958512257600",
      appId: "1:958512257600:web:8839bcec0113e486249da5",
      measurementId: "G-RMG88WNRTG"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
