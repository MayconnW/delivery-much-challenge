import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/test', (req, res) => {
  return res.json({ hello: 'world' });
});

app.listen(process.env.PORT || 3333, () => console.log('Server Started'));
