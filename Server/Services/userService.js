const User = require("../model/user");

const createUser = async (req) => {
  try {
    const { name, email, age } = req.body;
    if (!name || !email || !age) {
      throw Error("Please FIll the All Data");
    }

    const isUser = await User.findOne({ email });
    if (isUser) {
      throw Error("User already Exist");
    }
    const user = await User.create(req.body);

    return user;
  } catch (error) {
    throw error;
  }
};

const getAllUser = async (req) => {
  try {
    const users = await User.find({});
    if (!users) {
      throw Error("User Not Found");
    }
    return users;
  } catch (error) {
    throw error;
  }
};
const updateUser = async (req) => {
  try {
    const id = req.params.id;

    const isUser = await User.findOne({ _id: id });
    if (!isUser) {
      throw Error("User Not Found");
    }
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    return updatedUser;
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (req) => {
  try {
    const id = req.params.id;

    const isUser = await User.findOne({ _id: id });
    if (!isUser) {
      throw Error("User Not Found");
    }
    const deletedUser = await User.findByIdAndDelete(id);
    return deletedUser;
  } catch (error) {
    throw error;
  }
};

module.exports = { createUser, getAllUser, updateUser, deleteUser };
