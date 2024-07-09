Backend TypeScript con MySQL
Este proyecto implementa un backend utilizando TypeScript que se conecta a una base de datos MySQL. Proporciona una API para gestionar productos.

Requisitos previos
Asegúrate de tener instalado Node.js y npm (Node Package Manager) en tu máquina.

Configuración
Clonar el repositorio:

bash
Copiar código
git clone https://github.com/Angela199cv/TestLinkTIC.git
Instalar dependencias:

bash
Copiar código
npm install
Configurar la base de datos:

Asegúrate de tener MySQL instalado y en funcionamiento en tu máquina.
ingresa los siguientes datos en mySQL workbreach para poder tener en tu maquina la base de datos 
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=dbroot2024
DB_DATABASE=products_linkTic
DB_PORT=3300
Asegúrate de ajustar los valores según tu configuración de MySQL.

Ejecutar el servidor
Para iniciar el servidor, ejecuta el siguiente comando:

bash
Copiar código
npm run dev
Esto iniciará el servidor en el puerto especificado.

Uso
Endpoints disponibles
GET /v1/products: Obtiene todos los productos.
GET /v1/products/:id: Obtiene un producto por su ID.
POST /v1/products: Crea un nuevo producto.
PUT /v1/products/:id: Actualiza un producto existente.
DELETE /v1/products/:id: Elimina un producto existente.
Formato del cuerpo de la solicitud
Los endpoints que requieren datos del producto esperan un cuerpo de solicitud en formato JSON con los siguientes campos:

La documentación swagger la puede encontrar escriendo el siguiente link en el navegador una vez el servidor este corriendo

http://localhost:4000/api/v1/docs

Nuestro puerto por defecto es el puerto: 4000

json
Copiar código
{
  "name": "Nombre del producto",
  "description": "Descripción del producto",
  "price": "Precio del producto",
  "img_url": "URL de la imagen del producto"
}
Ejemplo de solicitud
Para crear un nuevo producto:

bash
Copiar código
curl -X POST http://localhost:4000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Producto de ejemplo",
    "description": "Descripción del producto de ejemplo",
    "price": "19.99",
    "img_url": "https://ejemplo.com/imagen.jpg"
  }'
