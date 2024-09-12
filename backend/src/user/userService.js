var userModel = require("./userModel");

module.exports.getDataFromDBService = async () => {
  try {
    const result = await userModel.find({}); // Use await to handle the promise
    return result; // Return the result
  } catch (error) {
    console.error("Error fetching data from the database:", error);
    throw new Error("Error fetching data"); // Throw error to be handled by the caller
  }
};

module.exports.createUserDBService = async (userDetails) => {
  try {
    // Validate _id if it's present, otherwise let Mongoose generate it
    if (userDetails._id && !mongoose.Types.ObjectId.isValid(userDetails._id)) {
      throw new Error("Invalid _id format");
    }

    // Create and save the document
    const userModelData = new userModel(userDetails);
    await userModelData.save(); // Save the document
    return true; // Indicate success
  } catch (error) {
    console.error("Error saving user data:", error);
    return false; // Indicate failure
  }
};

module.exports.updateUserDBService = async (id, userDetails) => {
  try {
    // Update the user document and return the updated document
    const updatedUser = await userModel.findByIdAndUpdate(
      id,
      userDetails,
      { new: true } // Option to return the updated document
    );
    return updatedUser;
  } catch (error) {
    console.error("Error updating user data:", error);
    throw new Error("Error updating user"); // Throw error to be handled by the caller
  }
};

module.exports.removeUserDBService = async (id) => {
  try {
    const deletedUser = await userModel.findByIdAndDelete(id);
    return deletedUser;
  } 
  catch(error) {
    console.error("Error deleting data: ", error)
    throw new Error("Error Updating User!")
  } 
// DEPRECATED AS OF SEPT 2024! Use asyc/await instead of callbacks
//   return new Promise(function myFn(resolve, reject) {
//     userModel.findByIdAndDelete(id, function returnData(error, result) {
//       if (error) {
//         reject(false);
//       } else {
//         resolve(result);
//       }
//     });
//   });
};
