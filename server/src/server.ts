import app, { extractCsvData } from './app';
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || '8000';

app.listen(port, async function onListen() {
  await extractCsvData();
  console.log(`Server is up and running on port ${port}`);
});
