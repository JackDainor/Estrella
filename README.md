# Puertas Abiertas
Plataforma de alquiler de casas en **Satélite Norte · Santa Cruz de la Sierra · Bolivia**

Tú eres el intermediario. Los precios están en **Bolivianos (Bs)**.

---

## Páginas

| Archivo | Para qué sirve |
|---------|----------------|
| `index.html` | Página de inicio |
| `upload.html` | El dueño publica su casa (1 a 5 fotos) |
| `buscar.html` | El inquilino busca casas, ve todas las fotos y avisa si le interesa |
| `admin.html` | **Tú (intermediario)** entras con clave y quitas las casas ya alquiladas |
| `js/firebase-config.js` | Configuración de Firebase + tu WhatsApp + clave de admin |

---

## Lo que puede hacer cada uno

### Dueño de la casa
- Sube de **1 a 5 fotos**
- Completa título, dirección, precio en Bs, habitaciones, etc.
- Se publica al instante

### Inquilino
- Ve las casas con filtros
- Botón **"Ver fotos"** → abre galería con todas las imágenes
- Botón **"Contactar dueño"** → WhatsApp del propietario
- Botón **"Me interesa (avisar al intermediario)"** → te llega un WhatsApp a ti con los datos de la casa

### Tú (intermediario)
- Entras a `admin.html` con la clave
- Ves todas las casas
- Puedes **marcar como alquilada** (deja de verse en el sitio)
- Puedes **eliminar** la casa por completo

---

## Configuración rápida

1. Abre `js/firebase-config.js`
2. Cambia:
   - Los datos de Firebase (si ya tienes proyecto)
   - `WHATSAPP_INTERMEDIARIO` → tu número (ej: `"5917XXXXXXX"`)
   - `CLAVE_ADMIN` → una contraseña que solo tú sepas (ej: `"miClave2026"`)

3. Sin Firebase también funciona en **modo demo** (guarda en el navegador).

### Firebase (para nube y tiempo real)
1. https://console.firebase.google.com → crear proyecto
2. Activar **Firestore** y **Storage**
3. Copiar la config en `js/firebase-config.js`

Reglas simples de Firestore (para empezar):
```
allow read, write: if true;
```

---

## Subir a GitHub y Vercel

```bash
git init
git add .
git commit -m "Puertas Abiertas listo"
git remote add origin https://github.com/TU_USUARIO/puertas-abiertas.git
git push -u origin main
```

Luego en vercel.com → Importar el repositorio → Deploy.

---

## Contraseña de admin por defecto
`admin123`  
(Cámbiala en `js/firebase-config.js`)

---

¡Listo para usar!
