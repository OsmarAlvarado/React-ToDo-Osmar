Ya hemos hecho otras aplicaciones de tareas, pero esta vez vamos a usar React para llevarlas al siguiente nivel. El objetivo es que nuestra ToDo App realice las siguientes tareas:

guardar tareas.
marcar tareas como cumplidas.
eliminar tareas.
guardar fecha de creación de la tarea y fecha de cumplimiento.
ordenar tareas por fecha.
añadir prioridad de tareas con colores predefinidos.
añadir tags o etiquetas personalizadas con colores personalizados.
menú de etiquetas para mostrar sólo las tareas de dicha categoría.
Componentes mínimos
La aplicación debe contar con al menos los siguientes componentes (pueden tener más).

Form: un formulario donde esté el input para introducir las tareas. Deberá conectarse con el estado de la aplicación de React para llenarlo con cada tarea.
ToDoList: el componente que renderizará la lista de tareas (componente ToDo). Esta lista provendrá del estado de la aplicación.
ToDo: cada una de las tareas. Recibirá la información por props desde el componente padre ToDoList.
Iteraciones
Son muchas cosas, por lo que dividiremos el proyecto, como solemos hacer, en varias fases o iteraciones.

La primera iteración es la más básica: crear notas con botón de delete y de done. El primero eliminará la tarea; el segundo la marcará como completada (tachará el texto).
Añadir fechas de creación y de finalización que deben mostrarse en la card de la tarea.
Crear select para añadir prioridades (como mínimo 3: alta, media y baja prioridad). Cada prioridad añadirá un color distintivo a la card de la tarea.
Crear botón para ordenar las notas por fecha (ascendente y descendente). Estos botones estarán en el componente ToDoList.
Añadir un nuevo input que permita generar un sistema de etiquetas. Este input aceptará texto y permitirá darle un nombre a la etiqueta ("trabajo", "clase", etc.). La etiqueta aparecerá dentro de la card de la tarea.
Añade un nuevo componente llamado TagsMenu que contenga todas las etiquetas o categorías de la aplicación. Cuando se haga click en una de ellas, se renderizarán exclusivamente las tareas que contengan dicha etiqueta.
Consejos
Lo primero que deberías hacer es crear el repositorio en GitHub.
Sigue las iteraciones en orden y, por lo que más queráis, leed bien el enunciado.
Sé que esto que voy a decir es como predicar en el desierto, pero deberíais diseñar y planificar la aplicación antes de empezar a programar. Pensad en cómo van a relacionarse los componentes, que props van a pasar y recibir, qué va a hacer cada uno, etc. La mitad de los problemas que vais a tener se pueden solucionar antes de empezar a teclear si os paráis 20 mins a pensar antes.
Las tareas deberán guardarse en un estado de React. Dado que habrá que guardar mucha información (texto, fecha, prioridad, etc.), cada tarea deberá ser un objeto necesariamente. Hazlo así desde el principio y no tendrás problemas más adelante cambiando código en distintos componentes.
Cuenta la leyenda que en lo más recóndito de internet se esconde un repositorio con decenas de ejercicios y ejemplos de JS y React... Lo hizo un sabio de tiempos antiguos cuyo nombre se ha perdido en el transcurrir de los siglos. Si no sabéis cómo hacer algo concreto, no estaría mal echarle un vistazo. El sabio, por cierto, tiene whatsapp (así es él) y puede ser contactado para solicitarle ayuda...
