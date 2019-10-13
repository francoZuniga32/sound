class Producto{

    idProducto:number;
    nombre:string;
    disponible:boolean;

    /**
     * la funcion contruye una instancia de un producto
     * @param argIdProducto el id del producto
     * @param argNombre el nombre del mismo
     * @param argTipo el tipo de producto, o su categoria
     * @param argDisponible si esta disponible, si todavia quedan existencias del mismo
     * @param argMedia el audio del producto
     */
    constructor(argIdProducto:number, argNombre:string, argDisponible:boolean){
        this.nombre = argNombre;
        this.idProducto = argIdProducto;
        this.disponible = argDisponible;
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

    //modificadorees

    set setIdProducto(argIdProducto:number){
        this.idProducto = argIdProducto;
    }

    set setNombre(argNombre:string){
        this.nombre = argNombre;
    }

    set setDisponible(argDisponible:boolean){
        this.disponible = argDisponible;
    } 

    //propias del tipó
}

class sample{
    producto:Producto;
    tipo:string;
    media:string;

    constructor(argProducto:Producto, argTipo:string, argMedia:string){
        this.producto = argProducto;
        this.tipo = argTipo;
        this.media = argMedia;
    }

    //observadores
    get getProducto(){
        return this.producto;
    }

    get getTipo(){
        return this.tipo;
    }

    get getMedia(){
        return this.media;
    }

    //modificadores
    set setProducto(argProducto:Producto){
        this.producto = argProducto;
    }

    set setTipo(argTipo:string){
        this.tipo = argTipo;
    }

    set setMedia(argMedia:string){
        this.media = argMedia;
    }

    //propias de tipo
}

class bloop{

}

class beat{

}

class presets{
    
}

let audio1:Producto = new Producto(1,"bits-sample1","bit",true,"epic.wav");
console.log(audio1.getNombre);
//audio1.setNombre
console.log(audio1.getNombre);
