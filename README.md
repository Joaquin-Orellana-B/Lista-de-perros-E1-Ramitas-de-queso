# Lista de perros 🐶

La idea de este proyecto es dar un pequeño repaso sobre conexiones a una API y sobre eventos. Es una pequeña aplicación web que muestra imágenes de perros aleatorias (obtenidas desde [dog.ceo](https://dog.ceo/dog-api/)) y permite marcarlas como "me gusta" o "no me gusta".

Evaluación Parcial N°1 de Ingeniería DevOps (DOY0101).



---

## Cómo levantar el proyecto localmente

No requiere instalación de dependencias. Basta con abrir `index.html` en el navegador, o servirlo con cualquier servidor estático simple, por ejemplo:

```bash
npx serve .
```
Una vez iniciado el servidor, se debe acceder a la dirección indicada por la consola, normalmente:

http://localhost:3000
---

## 🌳 Estrategia de ramificación
>Se optó por Trunk-based development ya que minimiza la divergencia de código entre ambos desarrolladores, reduciendo drásticamente el riesgo de merge conflicts complejos al sincronizar el trabajo diariamente.
>Para organizar el trabajo se utilizaron ramas de corta duración asociadas a funcionalidades o correcciones específicas. Una vez terminados los cambios, estos se integraron a la rama principal mediante Pull Requests.

---

##  Convenciones de commits

Adoptamos el estándar de Conventional Commits con la siguiente estructura: <tipo>: <descripción corta en presente>.

Tipos utilizados
feat: Nueva funcionalidad (ej. feat: agrega botones de me gusta y no me gusta).

fix: Corrección de errores (ej. fix: corrige fallo al cargar la imagen inicial).

docs: Cambios exclusivamente en documentación (ej. docs: actualiza el README con instrucciones).

Se decidió utilizar esta convención porque facilita comprender rápidamente qué cambio se realizó en cada commit y ayuda a mantener un historial de Git más organizado.

---

## Convenciones de naming de ramas

Siguiendo la estrategia de _Trunk-based development_, se optó por prescindir de una rama develop global de larga duración y del flujo complejo de ramas propio de Git Flow. En su lugar, la rama main actúa como el tronco central estable, complementada por ramas de corta duración asociadas a cada desarrollador e integración puntual, las cuales se unen a main de forma frecuente mediante Pull Requests.. 

---

##  Estrategia de revisión (Pull Requests)

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

## Automatización (CI/CD)

Para este proyecto se implementó una automatización básica mediante GitHub Actions, con el objetivo de validar automáticamente los cambios antes de integrarlos a la rama principal.

El flujo de trabajo considera:

Ejecutar validaciones cuando se realiza un push.
Ejecutar validaciones al crear o actualizar un Pull Request hacia main.
Verificar que los archivos principales del proyecto estén presentes.
Realizar comprobaciones básicas sobre HTML, CSS y JavaScript.
Evitar que cambios con errores evidentes sean integrados a la versión estable.

La automatización permite detectar problemas de forma temprana y reduce la necesidad de realizar todas las verificaciones manualmente.

```
              Flujo CI/CD
                   ↓
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
              ↙        ↘
            Sí          No
            ↓            ↓
       Pull Request   Corregir errores
            ↓
         Revisión
            ↓
          Merge
            ↓
           main
```



---

## 📁 Estructura de carpetas

```
Lista-de-perros/
├── index.html
├── index.js
├── style.css
└── README.md
```

## Historial de cambios (Changelog)

### [1.0.0] - 2026-09-09
#### Documentación y Ajustes (docs / fix)
- **docs:** Actualiza el `README.md` incorporando la propuesta de estrategia de ramificación y el changelog para revisión del equipo.
- **fix:** Integra la actualización de estilo para el color de fondo (`style.css`) desde la rama hotfix conservando la autoría original.
- **fix:** Resuelve conflictos de integración entre la tabla de contadores y el desplegable de favoritos.

### [0.3.0] - 2026-09-08
#### Funcionalidades y Sincronización (feat / fix)
- **feat:** Agrega menú desplegable de razas de perros favoritas.
- **fix:** Restaura la tabla de estadísticas y sincroniza el recuento con el menú desplegable.

### [0.2.0] - 2026-09-03
#### Funcionalidades y Refactorización (feat / fix)
- **feat:** Agrega tabla interactiva de contadores para likes, dislikes y salteados.
- **fix:** Reestructura la arquitectura del proyecto moviendo los archivos a la raíz del repositorio.

### [0.1.0] - 2026-09-01
####  Inicialización y Configuración (chore / docs)
- Commit inicial con la estructura base del proyecto.
- Crea y redacta la primera versión del `README.md` con la información del equipo y convenciones iniciales.

## 👥 Autores

- Integrante 1 — Valentina Cortez 
- Integrante 2 — Joaquín Orellana
- Integrante 3 - Bastián Sandoval

*la Evaluación Parcial N°1, DOY0101 — Ingeniería DevOps.*
