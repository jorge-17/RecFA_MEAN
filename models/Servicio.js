var mongoose = require('mongoose');

var EsquemaServicio = new mongoose.Schema({
    ruta: String,
    empresa: String,
    domicilio: String,
    contacto: String,
    convenio: Number,
    tel: String,
    obs: String,
    paquetes: Number,
    horario: String,
    paq_r: Number,
    nombre_e: String,
    fecha_registro: Date
});

module.exports = mongoose.model('Servicio' , EsquemaServicio);
