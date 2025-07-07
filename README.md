# login

--------------------------------------------------------------------------------------------------------------------------------------------------------
INSTITUTO TECNOLOGICO DE OAXACA

INGENIERÍA EN SISTEMAS COMPUTACIONALES 

MATERIA: PROGRAMACIÓN WEB 

DOCENTE: MARTINEZ NIETO ADELINA

ALUMNO: VARELA VERA BIANI BISALUA

GRUPO: VSI

FECHA: LUNES 07 DE JUNIO DE 2025


------------------------------------------------------------------------------------------------------------------------------------------------------

DESCRIPCION:

Por medio del login, va a permitir a los usuarios poder iniciar sesion con un correo y contraseña validos, en caso de que el usuario ingrese un formato no valido de un correo, se le mostrara al usuario un mensaje de error, asi como tambien si la contraseña no es correcta, y en caso de que no se tenga una cuenta registrada, se podra registrarse, de igual manera para el registro, se tiene validado que sea un formato valido de un correo electronico y que la contraseña y confirmacion de la contraseña sean iguales, si ingresa una contraseña que no sea igual a la otra, se le mostrara un mensaje de error al usuario, tanto para iniciar sesion como para registrarse tiene validado que no se puede iniciar sesion o registrarse si presenta algu campo vacio.

Si se desea registrarse, solo basta con darle click en el mensaje que dice "Registrate aqui" y se le desplagara los campos necesarios para poder registrarse los cuales son: correl electronico, contraseña y confirmar contraseña, una vez que se haya registrado se redireccionara de nuevo a la pantalla para iniciar sesion.


> Nota: El login no está conectado a una base de datos; las credenciales válidas están definidas en el código JavaScript, el correo es: biani@gmail.com y la contraseña es: 020624


------------------------------------------------------------------------------------------------------------------------------------------------------

ESTRUCTURA DEL PROYECTO: 

El proyecto esta compuesto del archivo HTML, el cual recibe el nombre de: index.html en donde por medio de ese archivo se trabaja con Bootstrap 5 para el diseño visual del login.

Tambien contiene un archivo llamado: login2.js que es el encargo de toda la parte logica del login, es decir, obtener los datos que se estan ingresando y hacer las respectivas validaciones para poder mandar los mensajes de alerta al usuario e interactuar de manera correcta con el login.

Tambien contiene un archivo llamado login2.css, que es el encargado de darle un diseño boito al login, estabelecer colores para los botones, tipo de letra, tamaño, etc.

Tambien se compone de una carpeta llamada img, en la cual contiene todas las imagenes que se utilizaron para el login
Para poder hacer la simulacion de que se esta iniciando sesion o ingresando a un sistema, cuando se inicia sesion de manera exitosa, se redirecciona a una pagina web de un negocio simulado, en este caso de una joyeria, por lo cual, en el proyecto se visualiza un archivo nombrado pag-bootstrap.html

------------------------------------------------------------------------------------------------------------------------------------------------------

PRINCIPALES METODOS: 

HTML Principal (`index.html`)
-`form#formulario-login`: Formulario de inicio de sesión.
- `form#formulario-registro`: Formulario de registro (oculto al inciio y solo aparece cuando se le da click en el boton Registrate aqui).
- `div.alerta`: Muestra mensajes de alerta al usuario.
- `img.imagen-login`: Imagen decorativa de la tarjeta.


CSS Principal (`css/login2.css`)

- Diseño centrado y responsive usando Flexbox.
- Paleta basada en tonos rojos.
- Campos de entrada estilizados con bordes redondeados.
- Alerta visual para mensajes de error, advertencia o éxito.


JavaScript (`js/login2.js`)

- Controla el cambio entre formularios (login/registro).
- Valida datos antes de enviar:
  - Campos vacíos.
  - Formato de correo válido (expresión regular).
  - Coincidencia de contraseñas.
- Simula autenticación comparandolo con datos fijos:
  usuario === "biani@gmail.com" y contrasena === "020624"

Clases destacadas:
- `.tarjeta`: Contenedor de los formularios.
- `.campo-texto`: Inputs personalizados.
- `.boton-principal`: Botones interactivos.
- `.alerta`: Estilo para mostrar mensajes temporales.

------------------------------------------------------------------------------------------------------------------------------------------------------

CODIGO HTML

![HTML1](https://github.com/user-attachments/assets/7dc29323-219b-43f0-881f-ba8e7525049b)


![HTML2](https://github.com/user-attachments/assets/b4a05094-f4e9-4ec6-a722-31ce857d20f4)

------------------------------------------------------------------------------------------------------------------------------------------------------

CODIGO JS:

![JS1](https://github.com/user-attachments/assets/bf3dcc3f-eed7-4d95-bbd4-b9d05dfbb64e)

![JS2](https://github.com/user-attachments/assets/1ab6d214-3d25-401b-addf-c9ef40fc915e)

![JS3](https://github.com/user-attachments/assets/4e598adc-60e5-41ee-bfb7-cb18fc9e2d38)

![JS4](https://github.com/user-attachments/assets/d37ab4c1-cec1-433b-ae96-54484a531547)


------------------------------------------------------------------------------------------------------------------------------------------------------

CODIGO CSS:

![CSS1](https://github.com/user-attachments/assets/96f22afd-388d-40c7-aa9a-55c138be9a09)

![CSS2](https://github.com/user-attachments/assets/b08a423f-73fb-448e-b350-d3887cf5f0bc)

![CSS3](https://github.com/user-attachments/assets/8c7482ca-a6ae-498f-8db4-9326ce0b3832)

![CSS4](https://github.com/user-attachments/assets/d7199c8a-4325-42cc-aafb-3699f022e2b2)

![CSS5](https://github.com/user-attachments/assets/1955437a-fdcf-444a-a457-d5dd75f8c713)

------------------------------------------------------------------------------------------------------------------------------------------------------

EJECUCIÓN:

![1](https://github.com/user-attachments/assets/d51e7e18-d7a2-45fe-b8ba-bfef731a89da)

![2](https://github.com/user-attachments/assets/258776a5-62d0-498d-babb-3720e393bc04)

![3](https://github.com/user-attachments/assets/71310ccd-c532-4583-999f-ea2b8de6d895)

![4](https://github.com/user-attachments/assets/2534cba1-a71b-4a0a-b752-e6d380c3fb02)

![5](https://github.com/user-attachments/assets/4fc03538-4eca-4fcb-87b5-efd3a76a4528)

![6](https://github.com/user-attachments/assets/20ae3d9d-3443-48c6-8cd1-d5fdb47a2d25)

![7](https://github.com/user-attachments/assets/b97145bb-86c5-4bca-8e65-45f5a3e58233)

![8](https://github.com/user-attachments/assets/67726533-d06b-4993-99c6-677187ceb6f2)

![9](https://github.com/user-attachments/assets/fc523880-cb04-4edb-9f7c-f54b46ee3c86)

![10](https://github.com/user-attachments/assets/c78ba316-5580-42e8-823a-2deb4469738e)

![11](https://github.com/user-attachments/assets/afbffe90-b10e-45fb-a4a8-ef0966f36267)


