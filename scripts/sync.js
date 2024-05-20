const sequelize = require("../config/database");
const User = require("../models/User");
const Room = require("../models/Room");
const Message = require("../models/Message").default;
const RoomParticipants = require("../models/RoomParticipants");

const syncDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    // Sync models
    await User.sync();
    await Room.sync();
    await Message.sync();
    await RoomParticipants.sync();

    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  } finally {
    await sequelize.close();
  }
};

syncDatabase();
