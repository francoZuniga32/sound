class Producto{

    idProducto:number;
    nombre:string;
    precio:number;
    disponible:boolean;
    tipo:string;
    media:string;
    descripcion:string;

    /**
     * Contructor de la clase productos
     * @param argIdProducto el id del producto identificador unico
     * @param argNombre 
     * @param argPrecio 
     * @param argDisponible 
     * @param argTipo 
     * @param argMedia 
     * @param argDescripcion 
     */
    constructor(argIdProducto:number, argNombre:string,argPrecio:number, argDisponible:boolean, argTipo:string, argMedia:string, argDescripcion:string){
        this.nombre = argNombre;
        this.idProducto = argIdProducto;
        this.disponible = argDisponible;
        this.precio = argPrecio;
        this.tipo = argTipo;
        this.media = argMedia;
        this.descripcion = argDescripcion;

    }
    //observadores
    get getIdProducto() {
        return this.idProducto;
    }

    get getNombre() {
        return this.nombre;
    }

    get getDisponible() {
        return this.disponible;
    }

    get getPrecio() {
        return this.precio;
    }

    get getTipo(){
        return this.tipo;
    }

    get getMedia(){
        return this.media;
    }

    get getDescripcion(){
        return this.descripcion;
    }
    //modificadorees

    setIdProducto(argIdProducto:number){
        this.idProducto = argIdProducto;
    }

    setNombre(argNombre:string){
        this.nombre = argNombre;
    }

    setDisponible(argDisponible:boolean){
        this.disponible = argDisponible;
    } 

    setPrecio(argPrecio:number){
        this.precio = argPrecio;
    }

    setTipo(argTipo:string){
        this.tipo = argTipo;
    }

    setMedia(argMedia:string){
        this.media = argMedia;
    }

    setDescripcion(argDescripcion:string){
        this.descripcion = argDescripcion;
    }
    //propias del tipó
}
