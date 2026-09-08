// ============================================
// CONFIGURACIÓN DE FIREBASE
// ============================================
// 1. Ve a https://console.firebase.google.com/
// 2. Crea un proyecto nuevo
// 3. Activa Firestore Database (modo de prueba)
// 4. Activa Storage
// 5. En Configuración > General > Tus apps > Web
// 6. Copia los datos y pégalos abajo

const firebaseConfig = {
  apiKey: "AIzaSyBSWtUWWdKf-xxFd2-aJAwwqxHD1nFaYTg",
  authDomain: "puertasabiertas-a040f.firebaseapp.com",
  projectId: "puertasabiertas-a040f",
  storageBucket: "puertasabiertas-a040f.firebasestorage.app",
  messagingSenderId: "658833525151",
  appId: "1:658833525151:web:1f1d55fc5908cb095655aa"
};

// Iniciar Firebase
firebase.initializeApp(firebaseConfig);

// Base de datos y almacenamiento
const db = firebase.firestore();
const storage = firebase.storage();

// Colección donde se guardan las casas
const propertiesRef = db.collection("propiedades");

// Número de WhatsApp del INTERMEDIARIO (tú)
// Cambia este número por el tuyo (con código de país 591)
const WHATSAPP_INTERMEDIARIO = "59163614354";

// Contraseña simple para la página de administrador
// Cámbiala por una que solo tú sepas
const CLAVE_ADMIN = "admin123";
 
