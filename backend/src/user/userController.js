var userService = require("./userService");

var getDataControllerfn = async (req, res) => {
  var employee = await userService.getDataFromDBService();
  res.send({ status: true, data: employee });
};

var createUserControllerFn = async (req, res) => {
  var status = await userService.createUserDBService(req.body);
  if (status) {
    res.send({ status: true, message: "User created successfully" });
  } else {
    res.send({ status: false, message: "Error creating user" });
  }
};

var updateUserController = async (req, res) => {
  try {
    const updatedUser = await userService.updateUserDBService(
      req.params.id,
      req.body
    );
    if (updatedUser) {
      res.send({ status: true, data: updatedUser });
    } else {
      res.status(404).send({ status: false, message: "User not found" });
    }
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

var deleteUserController = async (req, res) => {
  console.log(req.params.id);
  var result = await userService.removeUserDBService(req.params.id);
  if (result) {
    res.send({ status: true, message: "User Deleteddd" });
  } else {
    res.send({ status: false, message: "User Deleteddd Faileddddddd" });
  }
};

module.exports = {
  getDataControllerfn,
  createUserControllerFn,
  updateUserController,
  deleteUserController
};
