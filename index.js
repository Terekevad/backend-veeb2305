const express = require('express');
const cors = require('cors');
const pool = require('./config');

const app = express();
app.use(express.json());
app.use(cors({
  origin: '*'
}));

app.get('/', (req, res) => {
  res.send('Simple API homepage');
});

app.get('/api/treks', async (req, res) => {
  try {
    const rows = await pool.query(
      'SELECT * FROM treks ORDER BY id;'
    );
    res.json({ rows });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message })
  }
});

app.post('/api/treks', async (req, res) => {
  console.log(req.body);
  try {
    const { rows } = await pool.query(`
    INSERT INTO treks (
      name,
      latitude,
      longitude,
      price,
      image_url,
      start_time,
      end_time,
      description
    ) VALUES (
    '${req.body.name}',
    '${req.body.latitude}',
    '${req.body.longitude}',
    '${req.body.price}',
    '${req.body.imageUrl}',
    '${req.body.startTime}',
    '${req.body.endTime}',
    '${req.body.description}'
    ); 
    `);
    res.status(201).json(rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message })
  }
});

app.put('/api/treks/:trekId', async (req, res) => {
  const trekId = req.params.trekId;
  console.log(trekId, req.body);
  try {
    const { rows } = await pool.query(`
      UPDATE treks 
      SET 
        name = $1,
        latitude = $2,
        longitude = $3,
        price = $4,
        image_url = $5,
        start_time = $6,
        end_time = $7,
        description = $8
    WHERE id = $9
    `, [
        req.body.name,
        req.body.latitude,
        req.body.longitude,
        req.body.price,
        req.body.imageUrl,
        req.body.startTime,
        req.body.endTime,
        req.body.description,
        trekId
    ]);
    res.json(rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/treks/:trekId', async (req, res) => {
  const trekId = req.params.trekId;
  console.log('deleting with id:', trekId);
  try {
    const { rows } = await pool.query(`
     DELETE FROM treks WHERE id = ${trekId};
    `);
    res.json(rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
})

app.listen(10000, () => {
  console.log("Server running on port 10000");
});