const Cyclist = require("../models/Cyclist");
const Club = require("../models/Club"); 


// Get all cyclists
exports.getAllCyclists = async (req, res) => {
  try {
    const cyclists = await Cyclist.find();
    res.json(cyclists);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get cyclist by ID
exports.getCyclistById = async (req, res) => {
  try {
    const cyclist = await Cyclist.findOne({ ID_coureuse: req.params.id });
    if (!cyclist) return res.status(404).json({ message: "Cyclist not found" });
    res.json(cyclist);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createCyclist = async (req, res) => {
  const { nom, prenom, ID_club } = req.body;

  try {
    // Validate that the club exists
    const club = await Club.findOne({ ID_club: ID_club });
    if (!club) {
      return res.status(400).json({ message: "Selected club does not exist" });
    }

    // Find the current highest ID_coureuse
    const lastCyclist = await Cyclist.findOne().sort({ ID_coureuse: -1 });
    const newID = lastCyclist ? lastCyclist.ID_coureuse + 1 : 1;

    // Create new cyclist
    const cyclist = new Cyclist({
      ID_coureuse: newID,
      nom,
      prenom,
      ID_club,
      dateNaiss: 0,  
      dateMort: 0,
      fonctions: "",
      remarque_coureuse: ""
    });

    const newCyclist = await cyclist.save();
    res.status(201).json(newCyclist);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to create cyclist" });
  }
};

exports.updateCyclist = async (req, res) => {
  try {
    const cyclist = await Cyclist.findOneAndUpdate(
      { ID_coureuse: req.params.id },
      req.body,
      { new: true }
    );
    if (!cyclist) return res.status(404).json({ message: "Cyclist not found" });
    res.json(cyclist);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


exports.deleteCyclist = async (req, res) => {
  try {
    const deleted = await Cyclist.findOneAndDelete({ ID_coureuse: req.params.id });
    if (!deleted) return res.status(404).json({ message: "Cyclist not found" });
    res.json({ message: "Cyclist deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};