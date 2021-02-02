export default (sequelize, DataTypes) => {
  const LottoScore = sequelize.define(
    'LottoScore',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      ranking: {
        type: DataTypes.INTEGER,
        allowNull: false,
        min: 1,
        max: 7,
      },
    },
    {
      freezeTableName: true,
    }
  );

  LottoScore.associate = (models) => {
    models.LottoScore.hasMany(models.PredictLotto, {
      foreignKey: {
        name: 'predictLotto_id',
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  };

  return LottoScore;
};
