export const getArticulo = ( name = '', articulos ) => {

    if ( name === '') {
        return [];
    }
    name= name.toLocaleLowerCase();
    const espacio = name.includes(' ');
    let indice2 = name.indexOf(" ");
    let name2 = name.substring(0, indice2);
    const cadena = espacio ? name2 : name
    const pruebas = articulos.filter( articulo => (articulo?.brand?.toLocaleLowerCase().includes(cadena)))

    if (pruebas.length !== 0 && espacio){
        let indice = name.indexOf(" ");
        let model = name.substring((indice + 1), name.length);
        if(model === ''){
            return pruebas
        } else {
            return pruebas.filter( prueba => (prueba?.model?.toLocaleLowerCase().includes(model)));
        }
    }else if (pruebas.length === 0){
        return articulos.filter( articulo => (articulo?.model?.toLocaleLowerCase().includes(name)))
    }else{
        return pruebas
    }
}