export default (sequelize, DataTypes) => {
  const LottoRound = sequelize.define(
    'LottoRound',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      round: {
        type: DataTypes.INTEGER,
        allowNull: false,
        uniqueKey: true,
      },
    },
    {
      freezeTableName: true,
    }
  );

  return LottoRound;
};
