export default (sequelize, DataTypes) => {
  const LottoBall = sequelize.define(
    'LottoBall',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      num: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ball: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 45,
        },
      },
      isCorrect: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defalutValue: false,
      },
    },
    {
      indexes: [
        {
          fields: ['predictLotto_id'],
        },
        {
          fields: ['lottoWin_id'],
        },
      ],
    },
    {
      freezeTableName: true,
    }
  );

  LottoBall.associate = (models) => {
    models.LottoBall.belongsTo(models.PredictLotto, {
      foreignKey: {
        name: 'predictLotto_id',
        type: DataTypes.INTEGER,
      },
    });

    models.LottoBall.belongsTo(models.LottoWin, {
      foreignKey: {
        name: 'lottoWin_id',
        type: DataTypes.INTEGER,
      },
    });
  };

  return LottoBall;
};
