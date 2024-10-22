const { StatusCodes } = require("http-status-codes");
const path = require("path");
const homepage = async (req, res) => {
  res.sendFile(path.resolve(__dirname, "../public", "index.html"));
};

module.exports = { homepage };
