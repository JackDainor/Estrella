# Puertas Abiertas
### Alquiler de casas en Satélite Norte · Santa Cruz · Bolivia

Sitio **100% estático**. Sin base de datos.  
Solo **GitHub + Vercel**. Herramientas gratis.

Tú eres el intermediario:
1. Alguien llena el formulario → te llega un **correo** con datos y fotos.
2. Tú publicas la casa editando un archivo y subiendo a GitHub.
3. El inquilino contacta al dueño por WhatsApp.
4. Si se alquila, el inquilino te avisa por WhatsApp y tú quitas el anuncio.

---

## Correo donde llegan las publicaciones

`chambiburgoacarlosdainor@gmail.com`

(Usa FormSubmit, servicio gratis. La primera vez confirma el enlace que te llega al correo.)

---

## Archivos importantes

| Archivo | Para qué |
|---------|----------|
| `index.html` | Página de inicio |
| `upload.html` | Formulario (envía a tu correo) |
| `buscar.html` | Lista de casas + ver fotos + WhatsApp |
| `gracias.html` | Mensaje después de enviar el formulario |
| `data/casas.js` | **Aquí publicas y quitas casas** |
| `js/config.js` | Tu número de WhatsApp |
| `casas/` | Carpeta donde pones las fotos |

---

## Cómo publicar una casa (tú)

1. Te llega el correo con los datos y las fotos.
2. Guarda las fotos en la carpeta `casas/` (ej: `casas/casa-juan-1.jpg`).
3. Abre `data/casas.js` y agrega un bloque nuevo, por ejemplo:

```js
{
  id: "casa4",
  titulo: "Casa con patio",
  direccion: "Calle X, Satélite Norte",
  precio: 2200,
  habitaciones: 3,
  banos: 2,
  tamanio: 110,
  tipo: "casa",
  descripcion: "Texto que te enviaron...",
  whatsapp: "5917XXXXXXX",
  nombre: "Nombre del dueño",
  imagenes: [
    "casas/casa-juan-1.jpg",
    "casas/casa-juan-2.jpg"
  ],
  activo: true
}
```

4. Guarda, haz commit y push a GitHub.
5. Vercel actualiza el sitio solo (en 1–2 minutos).

---

## Cómo quitar una casa alquilada

Opción A: borra el bloque completo de esa casa en `data/casas.js`.  
Opción B: pon `activo: false` en esa casa.

Luego commit + push. Listo.

Cuando un inquilino hace clic en **“Ya se va a alquilar (avisar)”**, te llega un WhatsApp con los datos de la casa para que la quites.

---

## Configurar tu WhatsApp

Abre `js/config.js` y cambia:

```js
var WHATSAPP_INTERMEDIARIO = "5917XXXXXXX";
```

---

## FormSubmit (correo gratis)

1. La primera persona que envíe el formulario hará que FormSubmit te mande un correo de confirmación.
2. Abre ese correo y haz clic en confirmar.
3. A partir de ahí todos los envíos te llegan a:
   **chambiburgoacarlosdainor@gmail.com**

En `upload.html` hay un campo `_next`. Cuando tengas tu URL de Vercel, cámbialo así:

```html
<input type="hidden" name="_next" value="https://TU-PROYECTO.vercel.app/gracias.html">
```

---

## Subir a GitHub y Vercel

```bash
git init
git add .
git commit -m "Puertas Abiertas listo"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/puertas-abiertas.git
git push -u origin main
```

En [vercel.com](https://vercel.com) → Importar el repo → Deploy.

---

## Resumen del flujo

```
Dueño → llena formulario → correo a ti
Tú → editas data/casas.js + fotos → push a GitHub
Inquilino → ve la casa → WhatsApp al dueño
Si se alquila → inquilino te avisa por WhatsApp
Tú → quitas la casa de data/casas.js → push
```

¡Listo para usar!
