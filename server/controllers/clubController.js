const Club = require("../models/Club");
const Cyclist = require("../models/Cyclist"); 

// Get all clubs
exports.getAllClubs = async (req, res) => {
  try {
    const clubs = await Club.find();
    res.json(clubs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get club by ID
exports.getClubById = async (req, res) => {
  try {
    const club = await Club.findOne({ ID_club: req.params.id });
    if (!club) return res.status(404).json({ message: "Club not found" });
    res.json(club);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createClub = async (req, res) => {
  const { nom_club, date_crea = 0, date_disp = 0, mixite_club, ID_comite = "" } = req.body;

  try {
    // Find the current highest ID_club
    const lastClub = await Club.findOne().sort({ ID_club: -1 });
    const newID = lastClub ? lastClub.ID_club + 1 : 1;

    // Create new club with auto-incremented ID_club
    const club = new Club({
      ID_club: newID,
      nom_club,
      date_crea,
      date_disp,
      mixite_club,
      ID_comite,
    });

    const newClub = await club.save();
    res.status(201).json(newClub);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to create club" });
  }
};


exports.updateClub = async (req, res) => {
  try {
    const club = await Club.findOneAndUpdate(
      { ID_club: req.params.id },
      req.body,
      { new: true }
    );
    if (!club) return res.status(404).json({ message: "Club not found" });
    res.json(club);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteClub = async (req, res) => {
  try {
    const cyclists = await Cyclist.find({ ID_club: req.params.id });
    if (cyclists.length > 0) {
      return res.status(400).json({ message: "Cannot delete club with cyclists" });
    }

    const deleted = await Club.findOneAndDelete({ ID_club: req.params.id });
    if (!deleted) return res.status(404).json({ message: "Club not found" });
    res.json({ message: "Club deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};