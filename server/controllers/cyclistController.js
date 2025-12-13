exports.getAllCyclists = (req, res) => {
  res.send("Get all cyclists");
};

exports.getCyclistById = (req, res) => {
  res.send(`Get cyclist with id ${req.params.id}`);
};

exports.createCyclist = (req, res) => {
  res.send("Create cyclist");
};

exports.updateCyclist = (req, res) => {
  res.send(`Update cyclist with id ${req.params.id}`);
};

exports.deleteCyclist = (req, res) => {
  res.send(`Delete cyclist with id ${req.params.id}`);
};
