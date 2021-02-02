export default (sequelize, DataTypes) => {
  const LottoRound = sequelize.define(
    'AlgorithmKind',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      kind: {
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
