const Candidate = require('../models/Candidate');


module.exports = {
    async register(req, res) {

        const { cpf, email, gender, name, data_nasc, profissao, celular, cep, logradouro, numero, bairro, cidade, estado } = req.body;

        const newCandidate = new Candidate();

        newCandidate.cpf = cpf;
        newCandidate.name = name;
        newCandidate.email = email;
        newCandidate.gender = gender;        
        newCandidate.data_nasc = data_nasc;
        newCandidate.profissao = profissao;
        newCandidate.celular = celular;        
        newCandidate.cep = cep;
        newCandidate.logradouro = logradouro;
        newCandidate.numero = numero;
        newCandidate.bairro = bairro;
        newCandidate.cidade = cidade;
        newCandidate.estado = estado;

        newCandidate.save((err, savedCandidate) => {
            if (err) {
                console.log(err);
                return res.status(500).send('CPF já cadastrado');
            }

            return res.status(200).send(savedCandidate);
        });
    },



};