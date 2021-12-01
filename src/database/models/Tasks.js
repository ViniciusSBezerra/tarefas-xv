const connection = require('../connection');

const { DataTypes } = require('sequelize');

const Tasks = connection.define('Tasks', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },

    taskName: {
        type: DataTypes.STRING,
        allowNull: false
    },

    task: {
        type: DataTypes.STRING,
        allowNull: false
    }
})


Tasks.sync({ alter: true });

module.exports = Tasks;