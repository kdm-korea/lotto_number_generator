export default (sequelize, DataTypes) => {
  const LottoWin = sequelize.define(
    'LottoWin',
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

  LottoWin.associate = (models) => {
    models.LottoWin.hasOne(models.LottoRound, {
      foreignKey: {
        name: 'lottoRound_id',
        type: DataTypes.INTEGER,
        allowNull: false,
        uniqueKey: true,
      },
    });
  };

  return LottoWin;
};
