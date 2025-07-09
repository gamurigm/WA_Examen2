# Instrucciones Docker para la Calculadora de IMC

## Construir la imagen

```bash
docker build -t tuusuario/imc-angular .
```

## Ejecutar el contenedor

```bash
docker run -d -p 8080:80 tuusuario/imc-angular
```

> Cambia `tuusuario` por tu usuario real de Docker Hub si vas a publicar la imagen.
