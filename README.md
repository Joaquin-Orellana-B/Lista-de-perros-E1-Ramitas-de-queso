# Lista de perros 🐶

La idea de este proyecto es dar un pequeño repaso sobre conexiones a una API y sobre eventos. Es una pequeña aplicación web que muestra imágenes de perros aleatorias (obtenidas desde [dog.ceo](https://dog.ceo/dog-api/)) y permite marcarlas como "me gusta" o "no me gusta".

Evaluación Parcial N°1 de Ingeniería DevOps (DOY0101).

---

## 🚀 Cómo levantar el proyecto localmente

No requiere instalación de dependencias. Basta con abrir `index.html` en el navegador, o servirlo con cualquier servidor estático simple, por ejemplo:

```bash
npx serve .
```
Una vez iniciado el servidor, se debe acceder a la dirección indicada por la consola, normalmente:

http://localhost:3000
---

## 🌳 Estrategia de ramificación
>Optamos por Trunk-based development ya que minimiza la divergencia de código entre ambos desarrolladores, reduciendo drásticamente el riesgo de merge conflicts complejos al sincronizar el trabajo diariamente.
>Para organizar el trabajo se utilizaron ramas de corta duración asociadas a funcionalidades o correcciones específicas. Una vez terminados los cambios, estos se integraron a la rama principal mediante Pull Requests.

---

## 📝 Convenciones de commits

> y por qué eligieron ese formato.

---

## 🔀 Convenciones de naming de ramas
Adoptamos el estándar de Conventional Commits con la siguiente estructura: <tipo>: <descripción corta en presente>.

Tipos utilizados
feat: Nueva funcionalidad (ej. feat: agrega botones de me gusta y no me gusta).

fix: Corrección de errores (ej. fix: corrige fallo al cargar la imagen inicial).

docs: Cambios exclusivamente en documentación (ej. docs: actualiza el README con instrucciones).

Se decidió utilizar esta convención porque facilita comprender rápidamente qué cambio se realizó en cada commit y ayuda a mantener un historial de Git más organizado.
---

## 🔍 Estrategia de revisión (Pull Requests)

> ✏️ **A completar por la pareja.**
Los cambios realizados por los integrantes fueron revisados mediante Pull Requests antes de ser incorporados a la rama main.

Para aprobar un Pull Request se consideraron los siguientes puntos:

El código debía cumplir con la funcionalidad solicitada.
La aplicación debía ejecutarse correctamente.
Los cambios debían ser coherentes con la estructura existente del proyecto.
Los commits debían seguir las convenciones establecidas.
El proceso utilizado fue:

Crear rama
    ↓
Realizar cambios
    ↓
Commit
    ↓
Push de la rama
    ↓
Crear Pull Request
    ↓
Revisión del código
    ↓
Correcciones (si eran necesarias)
    ↓
Aprobación
    ↓
Merge a main

La revisión mediante Pull Requests permitió detectar errores antes de integrar los cambios y mantener una versión estable del proyecto.
---

## ⚙️ Automatización (CI/CD)

Para este proyecto se implementó una automatización básica mediante GitHub Actions, con el objetivo de validar automáticamente los cambios antes de integrarlos a la rama principal.

El flujo de trabajo considera:

Ejecutar validaciones cuando se realiza un push.
Ejecutar validaciones al crear o actualizar un Pull Request hacia main.
Verificar que los archivos principales del proyecto estén presentes.
Realizar comprobaciones básicas sobre HTML, CSS y JavaScript.
Evitar que cambios con errores evidentes sean integrados a la versión estable.

La automatización permite detectar problemas de forma temprana y reduce la necesidad de realizar todas las verificaciones manualmente.

Flujo CI/CD
Desarrollador
     ↓
Commit
     ↓
Push
     ↓
GitHub
     ↓
GitHub Actions
     ↓
Validaciones automáticas
     ↓
   ¿Correcto?
    ↙      ↘
  Sí        No
  ↓          ↓
Pull       Corregir
Request     errores
  ↓
Revisión
  ↓
Merge
  ↓
 main



---

## 📁 Estructura de carpetas

```
Lista-de-perros/
├── index.html
├── index.js
├── style.css
└── README.md
```

> ✏️ **A completar por la pareja.**
> Si agregan nuevas carpetas o archivos durante el desarrollo (ej. `.github/workflows/`), actualicen este diagrama.

---

## 👥 Autores

- Integrante 1 — Valentina Cortez 
- Integrante 2 — Joaquín Orellana
- Integrante 3 - Bastián Sandoval

*Repaso de conexión a API y manejo de eventos en JavaScript. Adaptado como base para la Evaluación Parcial N°1, DOY0101 — Ingeniería DevOps.*
