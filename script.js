import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBYdKwms_YS97E6BUuSuGdSoRy1dD4lUr4",
    authDomain: "proyectohuertalmms.firebaseapp.com",
    databaseURL: "https://proyectohuertalmms-default-rtdb.firebaseio.com",
    projectId: "proyectohuertalmms",
    storageBucket: "proyectohuertalmms.firebasestorage.app",
    messagingSenderId: "940351629789",
    appId: "1:940351629789:web:b26125b82bb54d0c23ee34"
  }; 

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


let plantaImg = document.getElementById("planta");
let sueloSpan = document.getElementById("suelo");
let aireSpan = document.getElementById("aire");
let tempSpan = document.getElementById("temp");

const refSensores = ref(db, "sensores");

onValue(refSensores, (datos) => {

    let sensor = datos.val();

    let humedadSuelo = sensor.humedadSuelo;
    let humedadAire = sensor.humedadAire;
    let temperatura = sensor.temperatura;

    sueloSpan.textContent = humedadSuelo;
    aireSpan.textContent = humedadAire;
    tempSpan.textContent = temperatura;

   if (humedadSuelo < 30) {
    plantaImg.src = "plantaSeca.png"; 
     document.body.style.background = "#594433";

} else {
    plantaImg.src = "plantaNormal.png"; 
      document.body.style.background = "#9ba657";
}

});

