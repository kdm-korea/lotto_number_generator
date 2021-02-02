export default (sequelize, DataTypes) => {
  const UserLottoScore = sequelize.define(
    'UserLottoScore',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    },
    {
      freezeTableName: true,
    }
  );

  UserLottoScore.associate = (models) => {
    models.UserLottoScore.hasMany(models.User, {
      foreignKey: {
        name: 'user_id',
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      as: 'users',
    });

    models.UserLottoScore.hasMany(models.LottoScore, {
      foreignKey: {
        name: 'lottoScore_id',
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      as: 'lottos',
    });
  };

  return UserLottoScore;
};
