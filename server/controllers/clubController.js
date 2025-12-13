exports.getAllClubs = (req, res) => {
  res.send("Get all clubs");
};

exports.getClubById = (req, res) => {
  res.send(`Get club with id ${req.params.id}`);
};

exports.createClub = (req, res) => {
  res.send("Create club");
};

exports.updateClub = (req, res) => {
  res.send(`Update club with id ${req.params.id}`);
};

exports.deleteClub = (req, res) => {
  res.send(`Delete club with id ${req.params.id}`);
};
