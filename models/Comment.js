const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Comment extends Model {};

//define columns
Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        comment_text: {
            type: DataTypes.STRING,
            allowNull: false,   
        },

        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },

        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'post',
                key: 'id'
            }
        }
    },

    // ==============================Object Model ===============================================
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }
)

module.exports = Comment;