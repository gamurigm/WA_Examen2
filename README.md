# Calculadora de IMC - Angular 19

Esta aplicación permite calcular el Índice de Masa Corporal (IMC) de forma interactiva y visual, desarrollada con Angular 19.

## Características
- Ajusta el peso con botones o ingresando el valor manualmente (mínimo 40 kg).
- Ajusta la altura manualmente (en metros).
- Calcula el IMC en tiempo real.
- Muestra la categoría del IMC y cambia el color de fondo según la categoría.
- Diseño moderno, responsivo y tipo app.
- Botón para reiniciar el peso a 40 kg.

## Significado de los colores de fondo
- **Azul**: Bajo peso (IMC &lt; 18.5)
- **Verde**: Normal (IMC 18.5 - 24.9)
- **Naranja**: Sobrepeso (IMC 25 - 29.9)
- **Rojo**: Obesidad (IMC ≥ 30)

## Cómo ejecutar localmente

1. Instala las dependencias:
   ```bash
   npm install
   ```
2. Ejecuta la app:
   ```bash
   npm start
   ```
3. Abre en tu navegador: [http://localhost:4200](http://localhost:4200)

## Docker

### Construir la imagen
```bash
docker build -t tuusuario/imc-angular .
```

### Ejecutar el contenedor
```bash
docker run -d -p 8080:80 tuusuario/imc-angular
```

## Autor
Gabriel Murillo

---

> Cambia `tuusuario` por tu usuario real de Docker Hub si vas a publicar la imagen.
