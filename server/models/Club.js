const mongoose = require("mongoose");

const ClubSchema = new mongoose.Schema(
  {
    ID_club: {
      type: Number,
      required: true,
      unique: true
    },
    nom_club: {
      type: String,
      required: true
    },
    date_crea: {
      type: Number,
      default: 0
    },
    date_disp: {
      type: Number,
      default: 0
    },
    mixite_club: {
      type: String,
      enum: ["Oui", "Non"],
      default: "Oui"
    },
    ID_comite: {
      type: String,
      default: null
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Club", ClubSchema);
