Para implementar un inicio de sesión con Google en una aplicación de React, podes utilizar la biblioteca `react-oauth/google`. 
A continuación te muestro un paso a paso sobre cómo configurarlo:

### 1. Crear un proyecto en Google Cloud

1. **Crear un proyecto:**
   - Ve a [Google Cloud Console](https://console.cloud.google.com/).
   - Crea un nuevo proyecto o selecciona un proyecto existente.

2. **Habilitar la API de Google:**
   - En la barra lateral, ve a "API & Services" > "Library".
   - Busca "Google+ API" y habilítala.

3. **Configurar la pantalla de consentimiento:**
   - Ve a "API & Services" > "OAuth consent screen".
   - Configura la pantalla de consentimiento con la información requerida.

4. **Crear credenciales OAuth 2.0:**
   - Ve a "API & Services" > "Credentials".
   - Crea un ID de cliente OAuth 2.0.
   - Configura las credenciales con el tipo de aplicación como "Web application".
   - Agrega las URI de redirección, por ejemplo: `http://localhost:3000`.

### 2. Instalar dependencias en tu proyecto React

```bash
npm install @react-oauth/google
```

### 3. Configurar `react-oauth/google` en tu proyecto

#### a. Crear un archivo de configuración de Google

Crea un archivo `.env` en la raíz de tu proyecto y agrega tu `client_id` de Google:

```env
REACT_APP_GOOGLE_CLIENT_ID=tu-client-id-de-google
```

#### b. Configurar el componente de autenticación

```jsx
// src/App.js
import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

function App() {
  const handleLoginSuccess = (response) => {
    console.log('Login Success:', response);
    // Aquí puedes enviar el token al backend para verificarlo y autenticar al usuario.
  };

  const handleLoginFailure = (error) => {
    console.log('Login Failed:', error);
  };

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <div className="App">
        <h1>Google Login</h1>
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onFailure={handleLoginFailure}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
```

### 4. Ejecutar tu aplicación

Asegúrate de tener configurado el archivo `.env` correctamente y ejecuta tu aplicación:

```bash
npm start
```

### 5. Manejar el token en el backend

Dependiendo de tu backend (Node.js, Python, Java, etc.), deberás verificar el token enviado por el cliente. Aquí hay un ejemplo en Node.js usando el paquete `google-auth-library`:

```javascript
// server.js
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(CLIENT_ID);

async function verifyToken(token) {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: CLIENT_ID,
  });
  const payload = ticket.getPayload();
  return payload;
}

// Endpoint para verificar el token
app.post('/api/verify-token', async (req, res) => {
  const token = req.body.token;
  try {
    const userData = await verifyToken(token);
    res.json({ userData });
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
});
```