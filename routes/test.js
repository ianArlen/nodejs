const express = require('express');
const router = express.Router();

//http://localhost:3001/pruebita/
router.get('/', async (req, res) => {
  res.send('Birds home page');
});

//http://localhost:3001/pruebita/about
router.get('/about', async (req, res) => {
  res.send('About birds');
});


router.get('/test/test', async (req,res) => {
  res.json({pene: 'pene'})
})

module.exports = router;