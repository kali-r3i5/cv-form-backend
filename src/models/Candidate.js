const mongoose = require("mongoose");

const CandidateSchema = new mongoose.Schema(
  {
    name: { type: String, unique: false, required: false },
    job: { type: String, unique: false, required: false },
    status: { type: String, unique: false, required: false },
    address: { type: String, unique: false, required: false },

    neighborhood: { type: String, unique: false, required: false },
    city: { type: String, unique: false, required: false },
    cep: { type: String, unique: false, required: false },
    cel: { type: String, unique: false, required: false },
    phone: { type: String, unique: false, required: false },

    phone2: { type: String, unique: false, required: false },
    contact: { type: String, unique: false, required: false },
    email: { type: String, unique: true, required: false },

    rg: { type: String, unique: true, required: false },
    cpf: { type: String, unique: true, required: false },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Candidate", CandidateSchema);
