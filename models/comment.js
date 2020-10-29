module.exports = function(sequelize, DataTypes) {
    var Comment = sequelize.define("Comment", {
      comment: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1-200]
        }
      },
      imageURL: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      animal: {
        type: DataTypes.STRING,
        defaultValue: "Other"
      }
    });

    Comment.associate = function(models) {
      Comment.belongsTo(models.Post, {foreignKey: { allowNull: false }})
      Comment.belongsTo(models.User, {foreignKey: { allowNull: false }})
      
    };

    return Comment;
  };
  