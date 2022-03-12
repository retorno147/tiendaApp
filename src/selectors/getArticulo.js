export const getArticulo = ( name = '', articulos ) => {

    if ( name === '') {
        return [];
    }

    name= name.toLocaleLowerCase();
    return articulos.filter( articulo => (articulo?.model?.toLocaleLowerCase().includes(name)));
}