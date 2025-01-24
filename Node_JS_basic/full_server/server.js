import express from 'express';
import controlRoute from './routes/index.js';

const app = express();
const port = 1245;

controlRoute(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
