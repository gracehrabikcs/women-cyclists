const mongoose = require("mongoose");

const CyclistSchema = new mongoose.Schema(
  {
    ID_coureuse: Number,
    nom: String,
    prenom: String,
    surnom: String,
    dateNaiss: String,
    dateMort: String,
    fonctions: String,
    ID_club: Number,
    ID_comite: String,
    remarque_coureuse: String
  },
  {
    collection: "cyclists"   // 👈 IMPORTANT
  }
);

module.exports = mongoose.model("Cyclist", CyclistSchema);
