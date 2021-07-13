class Propietario {
    constructor(nombre, direccion, telefono) {
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono;
    }
    datosPropietario() {
        return `El nombre del dueño es: ${this._nombre}. El domicilio es: ${this._direccion} y el número telefónico de contacto: ${this._telefono} `;
    }
}

class Animal extends Propietario {
    constructor(nombre, direccion, telefono, tipo) {
        super(nombre, direccion, telefono);
        this._tipo = tipo;
    }
    get tipo() {
        return `El tipo de animal es un: ${this._tipo}`;
    }
}

class Mascota extends Animal {
    constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
        super(nombre, direccion, telefono, tipo);
        this._nombreMascota = nombreMascota;
        this._enfermedad = enfermedad;
    }

    get nombreMascota() {
        return this._nombreMascota;
    }

    set nombreMascota(NuevoNombreMascota) {
        this._nombreMascota = NuevoNombreMascota;
    }

    get enfermedad() {
        return this._enfermedad;
    }

    set enfermedad(NuevaEnfermedad) {
        this._enfermedad = NuevaEnfermedad;
    }
}

document.querySelector("#formulario").addEventListener("submit", function (event) {
    event.preventDefault();

    let propietario = document.querySelector("#propietario").value;
    let telefono = document.querySelector("#telefono").value;
    let direccion = document.querySelector("#direccion").value;
    let nombreMascota = document.querySelector("#nombreMascota").value;
    let tipo = document.querySelector("#tipo").value;
    let enfermedad = document.querySelector("#enfermedad").value;

    const mascota = new Mascota(propietario, direccion, telefono, tipo, nombreMascota, enfermedad);

    document.querySelector("#resultado").innerHTML =

        `<ul> 
    <li> 
    ${mascota.datosPropietario()}
    </li>
    <br>   
    <br>
    <li>
    ${mascota.tipo}, mientras que el nombre de la mascota es: ${mascota.nombreMascota} y la enfermedad es: ${mascota.enfermedad}
    </li>
    <ul> `

    document.getElementById("formulario").reset();
    console.log(mascota);
})
