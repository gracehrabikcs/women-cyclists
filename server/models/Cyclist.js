const mongoose = require("mongoose");

const cyclistSchema = new mongoose.Schema({
  ID_coureuse: { type: Number, required: true },
  nom: { type: String, required: true },
  prenom: { type: String, default: "" },
  dateNaiss: { type: String, default: "0" },
  dateMort: { type: String, default: "0" },
  fonctions: { type: String, default: "" },
  ID_club: { type: Number, default: 0 },
  ID_comite: { type: String, default: "" },
  remarque_coureuse: { type: String, default: "" }
}, {
  versionKey: false,   
  timestamps: false  
});


cyclistSchema.set("toJSON", {
  transform: (doc, ret) => {
    delete ret._id;
    return ret;
  }
});

module.exports = mongoose.model("Cyclist", cyclistSchema);
