const express = require("express");

const MovieCtrl = require('../routes/movie.route')
const router = express.Router();

router.post('/movie', MovieCtrl.createMovie)
router.put('/movie/:id',MovieCtrl.updateMovie)
router.delete('/movie/:id',MovieCtrl.deleteMovie)
router.get('/movie/:id', MovieCtrl.getMovieById)
router.get('/movie', MovieCtrl.getMovies)

module.export = router