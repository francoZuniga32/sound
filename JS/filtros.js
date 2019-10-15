"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var productosFiltro = __spreadArrays(productos);
for (var i = 0; i < productosFiltro.length; i++) {
    console.log(productosFiltro[i].getNombre);
    $("#cuerpo").append("<div class=\"card\"><div class=\"card-body\"><p>" + productosFiltro[i].getNombre + "</p><p>" + productos[i].getPrecio + "</p></div></div>");
}
function categorizado() {
    $("#cuerpo").empty();
    productosFiltro = [];
    for (var i = 0; i < productos.length; i++) {
        if (productos[i].getPrecio <= 250) {
            productosFiltro.push(productos[i]);
        }
    }
    for (var i = 0; i < productosFiltro.length; i++) {
        $("#cuerpo").append("<div class=\"card\"><div class=\"card-body\"><p>" + productosFiltro[i].getNombre + "</p><p>" + productos[i].getPrecio + "</p></div></div>");
    }
}
function tageado() {
}
function precios() {
}
function buscado() {
}
function filtros() {
}
