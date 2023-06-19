# growpro-challenge

# Descripción del problema
Vamos a desarrollar una pequeña aplicación de alquiler de bicicletas, que tendrá 3 funcionalidades principales:

- Listar el inventario de bicicletas disponibles
- Calcular el precio de los alquileres
- Crear una solicitud de alquiler.

El precio de los alquileres se basa en el tipo de bicicleta alquilada y en el número de días de duración del alquiler. En el momento del alquiler, los clientes dicen por cuántos días quieren alquilar la bicicleta y en función de eso se calcula el precio para la solicitud.

La tienda ofrece tres tipos de bicicleta:
- Bicicletas eléctricas: El coste del alquiler será el precio base multiplicado por el número de días de alquiler.  
- Bicicletas normales: El coste del alquiler será el precio base por los primeros 3 días y después el precio base por cada día extra.
- Bicicletas antiguas: El coste del alquiler será el precio base por los primeros 5 días y después el precio base por cada día extra.

El precio base es de 10 USD al día, si el alquiler se inicia antes del día 15 de cada mes y de 12 USD al día si se inicia el día 15 o los días posteriores.
Descripción del proyecto
Crea y desarrolla un proyecto en React que permita al usuario realizar las siguientes funciones:

Listado de bicicletas en el que distinga perfectamente el tipo de bicicleta
  - En el listado se mostrará, además del tipo de bicicleta, al menos el nombre y una imagen
  - El listado se obtendría idealmente haciendo una llamada a un endpoint de una API Rest, pero para este ejercicio se pide usar un mock de esa llamada que devuelva un json con al menos 3 bicicletas de cada tipo.
  - Se puede usar un generador de imágenes aleatorias. 
  - Cada uno de los elementos del listado será clicable y al clicar llevará al usuario al formulario de solicitud de esa bicicleta.

Formulario de solicitud de bicicleta
  - En la página se mostrará en algún lugar de forma clara el tipo de bicicleta, el nombre y la imagen
  - El formulario incluirá al menos los siguientes campos: nombre del usuario, email del usuario, teléfono del usuario, fecha de inicio del alquiler, duración en días del alquiler
  - Al darle a enviar solicitud, aparecerá una ventana emergente o popup de confirmación en la que se mostrará el precio calculado para el alquiler que se está solicitando y que tendrá dos botones, uno para cancelar que simplemente cerrará la ventana emergente y otro de confirmar, que guardará los datos de la solicitud en local storage y mostrará un mensaje de confirmación de la solicitud.

No pierdas tiempo en el look&feel de la aplicación ya que no puntuaremos el diseño ni la maquetación; lo que más vamos a valorar es la escalabilidad de la solución, por lo que mejor invierte el tiempo en la estructura del proyecto, la aplicación de patrones de diseño en lugar de if-statements o switch-statements siempre que sea posible, el uso de librerías y cualquier otra cosa que creas que, como líder técnico, te va a diferenciar sobre cualquier otro desarrollador senior. 

Si crees que alguna parte del ejercicio no está clara, no te preocupes, decide por ti mismo lo que sería lógico o
lo que crees que podría aportar valor al proyecto y explica en pocas líneas por qué has tomado la decisión que has tomado. De la misma manera, si quieres añadir alguna funcionalidad que añada valor al proyecto y que creas que puede servir para que valoremos mejor tu experiencia, no dudes en añadirla.

Tómate tu tiempo para el ejercicio, pero sin pasarse. Si envías una solución que está incompleta de alguna manera pero justificas correctamente por qué decidiste enfocarte en otras partes más relevantes, la consideraremos igualmente válida.

Por favor, incluye un archivo README dentro del proyecto con las instrucciones para instalarse el proyecto y en el que además expliques las decisiones que has ido tomando durante el desarrollo, en qué partes has puesto más esfuerzos, en qué partes has puesto menos y por qué.

Deja los scripts necesarios para lanzar el proyecto configurados en el package.json