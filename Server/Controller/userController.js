const userServie = require("../Services/userService");

const createUser = async (req, res, next) => {
  try {
    const data = await userServie.createUser(req);
    return res.status(200).json({
      success: true,
      message: "User Created Successfully",
      data,
    });
  } catch (error) {
    next(error);
  }
};

const getAllUser = async (req, res, next) => {
  try {
    const data = await userServie.getAllUser(req);
    return res.status(200).json({
      success: true,
      message: "User Fetched Successfully",
      data,
    });
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const data = await userServie.updateUser(req);
    return res.status(200).json({
      success: true,
      message: "User Updated Successfully",
      data,
    });
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const data = await userServie.deleteUser(req);
    return res.status(200).json({
      success: true,
      message: "User Deleted Successfully",
      data,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { createUser, getAllUser, updateUser, deleteUser };
