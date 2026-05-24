# SPA WCM

## 1. Solución

Para el planteamiento de la aplicación, se optó por utilizar VueJS junto con Pinia para facilitar el manejo de estados globales y la edición de contenido.

## 2. Decisiones técnicas

Se optó por un panel desplegable lateral al cuál es posible acceder desde cualquier sitio para modificar los textos e imágenes de la web.

En cuanto a las secciones, se aprovechó la componentización de VueJS para crear elementos reutilizables a lo largo de la web.

Adicionalmente, el endpoint para las [imágenes](https://jsonplaceholder.typicode.com/photos) estaba presentando errores, por lo que se utilizó [picsum](https://picsum.photos) en su lugar.

## 3. Mejoras con el tiempo

Eventualmente, la app podría escalar a un sistema más grande, comprendiendo las siguientes mejoras.

- Paginador de la sección Noticias
- Campo editable para ajustar la cantidad de noticias a mostrar
- Slider en lugar de banner en la sección principal
- Campo editable para añadir más de una presentación al slider
- Campos adicionales para editar colores, fuentes, tamaños; entre otros aspectos globales del sitio web.

La versión inicial queda preparada para extender funcionalidades apuntando a un CMS más completo.

## 4. Estimaciones de tiempo

### PARTE 1: MAQUETACIÓN + UX

Se estimaron 2 horas y 30 minutos, el tiempo de ejecución fue de 3 horas.

### PARTE 2: CONSUMO DE API + JS

Se estimaron 45 minutos, el tiempo de ejecución fue de 30 minutos.

### PARTE 3: SIMULACIÓN CMS

Se estimaron 3 horas, el tiempo de ejecución fue de 3 horas y 30 minutos.

### PARTE 4: DOCUMENTACIÓN + ESTIMACIÓN

Se estimaron 1 hora, el tiempo de ejecución fue de 45 minutos.

### Adicional

El tiempo restante se efectuó en refactorización y retoques visuales.

## Instalación del proyecto

A continuación se listan los scripts relevantes para la ejecución del proyecto

### Setup

```sh

pnpm install

```

### Inicializar servidor de desarrollo con actualización automática

```sh

pnpm dev

```

### Compila y minifica los archivos, listo para producción

```sh

pnpm build

```

### Ejecutar [ESLint](https://eslint.org/)

```sh

pnpm lint

```

## Tecnologías usadas

El proyecto fue desarrollado con VueJS para el frontend, Pinia + localStorage para el manejo de estados y persistencia de la información, Tailwindcss + css3 para la estilización de los elementos.
