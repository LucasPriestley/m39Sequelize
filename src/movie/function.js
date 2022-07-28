const yargs = require("yargs");
const Movie = require("./table");

exports.createMovie = async (movieObj) => {
  try {
    const newMovie = await Movie.create(movieObj);
    console.log(newMovie);
  } catch (error) {
    console.log(error);
  }
};

exports.findMovie = async (movieObj) => {
  try {
    // console.log(movieObj);
    const findMovie = await Movie.findAll({
        where: movieObj 
    });
    console.log(findMovie);
  } catch (error) {
    console.log(error);
  }
};

exports.updateMovie = async (updateObj, filterObj, movieObj) => {
    try {
      console.log("U");
      const updateMovie = await Movie.update({
        where: movieObj
    });
  
      console.log(updateMovie);
    } catch (error) {
      console.log(error);
    }
  };