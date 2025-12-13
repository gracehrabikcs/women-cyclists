const mongoose = require("mongoose");

const clubSchema = new mongoose.Schema({
  ID_club: { type: Number, required: true },
  nom_club: { type: String, required: true },
  date_crea: { type: Number, default: 0 },
  date_disp: { type: Number, default: 0 },
  mixite_club: { type: String, default: "Oui" },
  ID_comite: { type: String, default: "" }
}, {
  versionKey: false, 
  timestamps: false  
});


clubSchema.set("toJSON", {
  transform: (doc, ret) => {
    delete ret._id;
    return ret;
  }
});

module.exports = mongoose.model("Club", clubSchema);
