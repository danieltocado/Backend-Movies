const { Movie } = require('../models');

const MovieController = {
    async getAllMovies(req,res) {
        try {
            const movies = await Movie.findAll()
            res.status(200).send(movies)
            
        } catch (error) {
            console.log(error)
            res.status(500).send({ message : 'There was a problem trying to get the movies.'})
        }
    },
    async searchtitle(req,res) {
        try {
            const { title } = req.params
            const movie = await Movie.findOne({
                where : {
                    title : title
                }
            });
            if (movie === null){
                res.status(400).send({ message : 'There was a problem trying to get the movie.'});
            }
            res.status(200).send(movie);
        } catch (error) {
            console.log(error)
            res.status(500).send({ message : 'There was a problem trying to create the movie.'})
        }
    },
    async searchid(req,res) {
        try {
            const { id } = req.params;
            const movieId = await Movie.findOne({
                where : {
                    id : id
                }
            })
            if (movieId === null){
                res.status(400).send({ message : 'There was a problem trying to find the movie.'})
            }
            res.status(200).send(movieId);
        } catch (error) {
            console.log(error)
            res.status(500).send({ message : 'There was a problem trying to update the movie.'})
        }
    }
}

module.exports = MovieController;