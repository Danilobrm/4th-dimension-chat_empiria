const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Room = require('./Room');

const RoomParticipants = sequelize.define('RoomParticipants', {
    RoomID: {
        type: DataTypes.INTEGER,
        references: {
            model: Room,
            key: 'RoomID',
        },
        allowNull: false,
    },
    UserID: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'UserID',
        },
        allowNull: false,
    },
    EncryptedKey: {
        type: DataTypes.BLOB,
        allowNull: false,
    },
}, {
    timestamps: false,
    primaryKey: {
        RoomID: 'RoomID',
        UserID: 'UserID'
    }
});

module.exports = RoomParticipants;
