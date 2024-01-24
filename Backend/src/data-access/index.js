const { readJson } = require("./readJson");
const { writeJson } = require("./writeJson");
const { deleteAttachment } = require("./deleteAttachment");

const dataAccess = { readJson, writeJson, deleteAttachment };

module.exports = { dataAccess }