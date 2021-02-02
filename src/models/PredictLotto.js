export default (sequelize, DataTypes) => {
  const PredictLotto = sequelize.define(
    'PredictLotto',
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

  PredictLotto.associate = (models) => {
    models.PredictLotto.hasMany(models.LottoRound, {
      foreignKey: {
        name: 'lottoRound_id',
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    });

    models.PredictLotto.hasMany(models.AlgorithmKind, {
      foreignKey: {
        name: 'algorithmKind_id',
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    });
  };

  return PredictLotto;
};
