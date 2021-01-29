import express from 'express';
import a from './component/lottoCrawling';

const app = express();

app.get('/', async (req, res) => {
  const lotto = await a();

  res.send(
    `${lotto[0]}회차 로또 당첨번호는 ${lotto[1]} ${lotto[2]} ${lotto[3]} ${lotto[4]} ${lotto[5]} ${lotto[6]} + ${lotto[7]}`
  );
});

export default app;
