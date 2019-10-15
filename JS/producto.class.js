"use strict";
var Producto = /** @class */ (function () {
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
    function Producto(argIdProducto, argNombre, argPrecio, argDisponible, argTipo, argMedia, argDescripcion) {
        this.nombre = argNombre;
        this.idProducto = argIdProducto;
        this.disponible = argDisponible;
        this.precio = argPrecio;
        this.tipo = argTipo;
        this.media = argMedia;
        this.descripcion = argDescripcion;
    }
    Object.defineProperty(Producto.prototype, "getIdProducto", {
        //observadores
        get: function () {
            return this.idProducto;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Producto.prototype, "getNombre", {
        get: function () {
            return this.nombre;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Producto.prototype, "getDisponible", {
        get: function () {
            return this.disponible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Producto.prototype, "getPrecio", {
        get: function () {
            return this.precio;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Producto.prototype, "getTipo", {
        get: function () {
            return this.tipo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Producto.prototype, "getMedia", {
        get: function () {
            return this.media;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Producto.prototype, "getDescripcion", {
        get: function () {
            return this.descripcion;
        },
        enumerable: true,
        configurable: true
    });
    //modificadorees
    Producto.prototype.setIdProducto = function (argIdProducto) {
        this.idProducto = argIdProducto;
    };
    Producto.prototype.setNombre = function (argNombre) {
        this.nombre = argNombre;
    };
    Producto.prototype.setDisponible = function (argDisponible) {
        this.disponible = argDisponible;
    };
    Producto.prototype.setPrecio = function (argPrecio) {
        this.precio = argPrecio;
    };
    Producto.prototype.setTipo = function (argTipo) {
        this.tipo = argTipo;
    };
    Producto.prototype.setMedia = function (argMedia) {
        this.media = argMedia;
    };
    Producto.prototype.setDescripcion = function (argDescripcion) {
        this.descripcion = argDescripcion;
    };
    return Producto;
}());
