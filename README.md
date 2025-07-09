# 🧮 Calculadora de IMC - Angular 19

Esta aplicación permite calcular el Índice de Masa Corporal (IMC) de forma interactiva y visual, desarrollada con Angular 19.

## ✨ Características
- ⚖️ Ajusta el peso con botones o ingresando el valor manualmente (mínimo 40 kg).
- 📏 Ajusta la altura manualmente (en metros).
- 🔄 Calcula el IMC en tiempo real.
- 🟦🟩🟧🟥 Muestra la categoría del IMC y cambia el color de fondo según la categoría.
- 📱 Diseño moderno, responsivo y tipo app.
- ♻️ Botón para reiniciar el peso a 40 kg.

## 🎨 Significado de los colores de fondo
- <span style="color:#2196f3; font-weight:bold;">🟦 Azul</span>: Bajo peso (IMC &lt; 18.5)
- <span style="color:#4caf50; font-weight:bold;">🟩 Verde</span>: Normal (IMC 18.5 - 24.9)
- <span style="color:#ff9800; font-weight:bold;">🟧 Naranja</span>: Sobrepeso (IMC 25 - 29.9)
- <span style="color:#f44336; font-weight:bold;">🟥 Rojo</span>: Obesidad (IMC ≥ 30)

## 🚀 Cómo ejecutar localmente

1. Instala las dependencias:
   ```bash
   npm install
   ```
2. Ejecuta la app:
   ```bash
   npm start
   ```
3. Abre en tu navegador: [http://localhost:4200](http://localhost:4200)

## 🐳 Docker: Uso detallado

Esta app está lista para ejecutarse en un contenedor Docker usando NGINX como servidor web. A continuación se explica el proceso completo:

### 📄 ¿Qué es el Dockerfile?
El `Dockerfile` contiene las instrucciones para construir la imagen de la aplicación Angular y servirla con NGINX. No se ejecuta directamente, sino que Docker lo usa para crear la imagen.

### 🏗️ 1. Construir la imagen localmente (ejecutar el Dockerfile)
Ubícate en la raíz del proyecto (donde está el Dockerfile) y ejecuta:
```bash
docker build -t imc-angular .
```
Esto crea una imagen llamada `imc-angular`.

### 🏷️ 2. Etiquetar la imagen (si es necesario)
Si necesitas cambiar el nombre para Docker Hub:
```bash
docker tag imc-angular ryusakizeitan/imc-angular
```

### 🔑 3. Iniciar sesión en Docker Hub
```bash
docker login
```

### ⬆️ 4. Subir la imagen a Docker Hub
```bash
docker push ryusakizeitan/imc-angular
```

### ▶️ 5. Usar la imagen desde cualquier máquina
Si la imagen ya está en Docker Hub, puedes descargarla y ejecutarla directamente con:
```bash
docker run -d -p 8080:80 ryusakizeitan/imc-angular
```
La aplicación estará disponible en [http://localhost:8080](http://localhost:8080)

---

**Notas:**
- Cambia el nombre de usuario si usas otro usuario de Docker Hub.
- Asegúrate de tener Docker instalado y en funcionamiento.
- El Dockerfile utiliza multi-stage build: primero compila Angular y luego sirve el resultado con NGINX usando el archivo `nginx.conf` personalizado.

## 👤 Autor
Gabriel Murillo

---

> Cambia `tuusuario` por tu usuario real de Docker Hub si vas a publicar la imagen.
