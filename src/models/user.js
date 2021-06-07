module.exports = function(sequelize, DataTypes){
    const User = sequelize.define('User', {
      firebase_id: {
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
        password: {
          type: DataTypes.STRING,
      },
    });
  
    return User;
}