# Proxy
___

Un proxy es un objeto que controla el acceso a otro objeto denominado sujeto.

El proxy y el sujeto tienen una interfaz idéntica y esto nos permite transparentemente
intercambiar uno por el otro; De hecho, el nombre alternativo para este
Patrón es sustituto. Un proxy intercepta todas o algunas de las operaciones que son
ejecutadas sobre el sujeto, aumentando o complementando su comportamiento.


Un proxy es útil en varias circunstancias, por ejemplo, considere las siguientes:

• Validación de datos: el proxy valida la entrada antes de reenviarla
  al sujeto
• Seguridad: El proxy verifica que el cliente está autorizado a realizar la
  operacion antes de pasar la solicitud al sujeto.
• Inicialización perezosa: Si la creación del objeto es caro, el proxy
  puede retrasarlo a cuando es realmente necesario
• Registro: El proxy intercepta las invocaciones del método y los
  parámetros, recodificándolos si es necesario.
• Objetos remotos: un proxy puede tomar un objeto que se encuentra remotamente,
  e interactuar de forma que parezca que el objeto remoto es un objeto local.
