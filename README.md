# Event Planner
Desarrollado para La organización juvenil “Impulso Creativo”

## Introducción

Event planner fue desarrollado con el objetivo de ayudar a la organización juvenil de "Impulso Creativo" a poder organizar de una mejor manera los eventos que tienen a cargo a través del desarrollo de una aplicación web donde se pueden registrar los eventos que tienen a cargo y donde se brindan las funcionalidades para poder editarlos para que de esta manera su planificación se agilice y de esta forma la organización pueda dar su máximo potencial competitivo.

## Estudiante
Nombre: Marvin Javier Gutiérrez Coto 

Código: 20230644

Sección: 3° A-2

## Inicialización del Frontend
```
npm create vite@latest
```
Escribimos el nombre del proyecto
```
-seleccionamos react y el "javaScript"  el amarillito
nos vamos a la carpeta del proyecto que se creo y hacemos
```
cd frontend
```
npm i
```
npm run dev 

### Ejecucion del frontend
```
npm run dev
```

### Herramientas Utilizadas ⚙️
### Front-End:

``HTML5``

``CSS``

``JavaScript``

``React``

### Base de Datos:

``MongoDB``

### Herramientas de Control de Versiones:

``Git``

``GitHub``

## Librerías utilizadas:

``react``

``react-dom``

``react-router-dom``

``react-hook-form``

``react-hot-toast``

``lucide-react``

``sweetalert2``

## 🧱 Estructura del Proyecto y Detalles Clave para su Mantenimiento

Este proyecto está estructurado siguiendo una arquitectura modular basada en componentes reutilizables, lo que facilita su escalabilidad y mantenimiento a largo plazo. A continuación se describen los elementos más relevantes:

### 📁 Estructura principal

src/

├── components/ # Componentes reutilizables (Inputs, Botones, Títulos, etc.)

├── hooks/ # Custom hooks para manejar lógica específica (e.g., eventos)

├── pages/ # Vistas principales o pantallas del sistema

├── utils/ # Utilidades y constantes (e.g., opciones de selects, URLs)

├── app/ # Definición de rutas con React Router

└── assets/ # Recursos estáticos como imágenes, íconos, etc.

### 🔁 Buenas prácticas de mantenimiento

- **Componentes desacoplados**: Cada componente cumple una función específica. Si necesitas agregar o modificar una funcionalidad, intenta hacerlo sin afectar otros módulos.
- 
- **Validaciones centralizadas**: Se utilizan hooks personalizados para manejar formularios y validaciones (por ejemplo, `useDataEvent`), lo que permite mantener la lógica aislada y fácilmente testeable.
- 
- **Estilos y UI consistentes**: Se sigue un diseño basado en TailwindCSS y clases utilitarias para una apariencia moderna y coherente.
- 
- **Alertas y feedback del usuario**: Se implementa `react-hot-toast` para mostrar mensajes de validación y acciones importantes al usuario.

### 🧪 Recomendaciones para mantenimiento

- Mantén las dependencias actualizadas utilizando `npm outdated` y `npm update`.
- 
- Documenta los nuevos componentes y hooks personalizados en comentarios o directamente en el README si son clave para el funcionamiento.
- 
- Antes de realizar cambios en lógica central (hooks o servicios), asegúrate de entender cómo están siendo usados en los formularios o vistas.
- 
- Usa `console.log` solo para debug temporal; elimina o reemplázalo con soluciones de monitoreo si es necesario.
