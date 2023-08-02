const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Post extends Model {
        static associate(models) {

        }
    }

    Post.init(
        {
            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            post: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            imageUrl: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            usersRead:{
                type: DataTypes.ARRAY(DataTypes.INTEGER),
                allowNull: false,
            }
        },
        {
            sequelize,
            modelName: 'Post',
        }
    );
    return Post;
};