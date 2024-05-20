const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Room = require('./Room');

const Message = sequelize.define('Message', {
    MessageID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    RoomID: {
        type: DataTypes.INTEGER,
        references: {
            model: Room,
            key: 'RoomID',
        },
        allowNull: false,
    },
    SenderID: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'UserID',
        },
        allowNull: false,
    },
    MessageText: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    SentAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    timestamps: false,
});

module.exports = Message;
