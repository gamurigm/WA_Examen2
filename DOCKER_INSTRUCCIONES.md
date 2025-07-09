# Instrucciones Docker para la Calculadora de IMC

## ¿Qué es el Dockerfile?

El `Dockerfile` contiene las instrucciones para construir la imagen de la aplicación Angular y servirla con NGINX. No se ejecuta directamente, sino que Docker lo usa para crear la imagen.

---

## 1. Construir la imagen localmente (ejecutar el Dockerfile)

Para ejecutar el `Dockerfile` y construir la imagen, usa el siguiente comando en la raíz del proyecto (donde está el Dockerfile):

```bash
docker build -t imc-angular .
```

Este comando le dice a Docker que lea el `Dockerfile` y cree una imagen llamada `imc-angular`.

---

## 2. Etiquetar la imagen (si es necesario)

Si tu imagen no tiene el nombre de usuario correcto, puedes etiquetarla así:

```bash
docker tag imc-angular ryusakizeitan/imc-angular
```

## 3. Iniciar sesión en Docker Hub

```bash
docker login
```

## 4. Subir la imagen a Docker Hub

```bash
docker push ryusakizeitan/imc-angular
```

---

## 5. Usar la imagen desde cualquier máquina

Si la imagen ya está en Docker Hub, puedes descargarla y ejecutarla directamente con:

```bash
docker run -d -p 8080:80 ryusakizeitan/imc-angular
```

La aplicación estará disponible en [http://localhost:8080](http://localhost:8080)

---

**Notas:**
- Cambia el nombre de usuario si usas otro usuario de Docker Hub.
- Asegúrate de tener Docker instalado y en funcionamiento.