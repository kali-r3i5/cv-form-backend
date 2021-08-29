const Candidate = require("../models/Candidate");

module.exports = {
  async register(req, res) {
    const {
      name,
      job,
      status,
      address,
      neighborhood,
      city,
      cep,
      cel,
      phone,
      phone2,
      contact,
      email,
      rg,
      cpf,
    } = req.body;

    const newCandidate = new Candidate();

    newCandidate.name = name;
    newCandidate.job = job;
    newCandidate.status = status;
    newCandidate.address = address;
    newCandidate.neighborhood = neighborhood;
    newCandidate.city = city;
    newCandidate.cep = cep;
    newCandidate.cel = cel;
    newCandidate.phone = phone;
    newCandidate.phone2 = phone2;
    newCandidate.contact = contact;
    newCandidate.email = email;
    newCandidate.rg = rg;
    newCandidate.cpf = cpf;

    newCandidate.save((err, savedCandidate) => {
      if (err) {
        console.log(err);
        return res.status(500).send("ERRO : falha ao cadastrar candidato!");
      }
      console.log("success!");
      return res.status(200).send(savedCandidate);
    });
  },
};
