const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Post extends Model {
        static associate(models) {

        }
    }

    Post.init(
        {
            userId: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            post: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            imageUrl: {
                type: DataTypes.STRING,
                allowNull: true,
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