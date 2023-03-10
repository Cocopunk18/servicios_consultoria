const mongoose = require('mongoose');
const serviciosconsul_schema = mongoose.Schema ({
    nit: {type: String, required: true, unique: true},
    nombre: {type:String, required:true},
    servicios: {type: Array, required:true},
    precio: {type: Number, required:true},
    encargado: {type: String, required:true},
    fecha_auditoria: {type: Date, required:true},
    resultado_auditoria: {type: Object, required:true,
        opinion_limpia: {type: String, required:true},
        opinion_salvedades: {type: String, required:true},
        opinion_adversa: {type: String, required:true},
        opinion_denegada: {type: String, required:true},
    }
});

module.exports= mongoose.model("ServiciosconsulCollection", serviciosconsul_schema);