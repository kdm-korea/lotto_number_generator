export default (sequelize, DataTypes) => {
  const PredictLottoPercent = sequelize.define(
    'PredictLottoPercent',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      ball: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 45,
        },
      },
      percent: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defalutValue: 0.0,
      },
    },
    {
      freezeTableName: true,
    }
  );

  PredictLottoPercent.associate = (models) => {
    models.PredictLottoPercent.hasMany(models.AlgorithmKind, {
      foreignKey: {
        name: 'algorithmKind_id',
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  };

  return PredictLottoPercent;
};
