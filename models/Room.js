const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Room = sequelize.define('Room', {
    RoomID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    RoomName: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    RoomType: {
        type: DataTypes.STRING(50),
        allowNull: true, // Apenas no Servidor de Salas
    },
    ServerAddress: {
        type: DataTypes.STRING(255),
        allowNull: true, // Apenas no Servidor Principal
    },
}, {
    timestamps: false,
});

module.exports = Room;
