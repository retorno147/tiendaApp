# Iniciar proyecto

Primero clonar el proyecto y aplicar npm install y para compilarlo en local npm start

### `npm start`

Comando para compilar el proyecto.
### `npm test`

Comando para ejecutar los test unitarios creado, está creada la estructura y realizado un par de test unitarios en reducer para ver que funciona.

### `npm run lint`

Comando para formatear el código de nuestra aplicación y ver los fallos de sintaxis según la regla aplicada.

### `npm run build`

Comando para contruir la aplicación.

## Resumen de la app

Para realizar la app, hemos utilizado Hooks, Redux, React Router Dom y varias librerias React como antd para los BreadCrumbs y los Badge.

Tiene dos pantallas que la navegacion se realiza mediante React Router Dom.

He añadido un nabvar para poder situar el contador del carrito, el breadcrumbs y un titulo a la App.

### `Hooks`

Hemos utilizado, useEffect para la inicialización de los componentes.
useMemo para memorizar los valores en el buscador y hacer la lista.

### `Redux`

Para el cambio de estado según la llamada a la Api.

useSelector para extraer los datos que hemos guardado en el store.

useDispatch para retornar la funcion almacenada en redux.

### `React Router Dom`

React Router DOM es un paquete npm que le permite implementar enrutamiento dinámico en una aplicación web.

### `Persitencia de Datos`

Lo he realizado mediante las cookies para poder darle un tiempo de vida, en este caso de 1 hora. Pasada la hora el contador se actualiza y se pone a cero.

