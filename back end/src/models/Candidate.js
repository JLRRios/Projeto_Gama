const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    cpf: { type: Number, unique: true, required: true },
    name: { type: String, unique: false, required: true },
    email: { type: String, unique: false, required: true },
    gender: { type: String, unique: false, required: true },
    data_nasc: { type: Date, unique: false, required: true },
    profissao: { type: String, unique: false, required: true },
    celular: { type: Number, unique: false, required: true },
    cep: { type: String, unique: false, required: true },
    logradouro: { type: String, unique: false, required: true },
    numero: { type: Number, unique: false, required: true },
    bairro: { type: String, unique: false, required: true },
    cidade: { type: String, unique: false, required: true },
    estado: { type: String, unique: false, required: true }
}, {
    timestamps: true
});

module.exports = mongoose.model('Candidate', CandidateSchema);
