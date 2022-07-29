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
      where: movieObj,
    });
    console.log(findMovie);
  } catch (error) {
    console.log(error);
  }
};

exports.findMovie2 = async (movieObj) => {
  try {
    // console.log(movieObj);
    const findMovie2 = await Movie.findAll({
      where: movieObj,
    });
    console.log(findMovie2);
  } catch (error) {
    console.log(error);
  }
};

exports.updateTitle = async (updateObj, filterObj) => {
  try {
    console.log(updateObj);
    console.log(filterObj);
    const updateTitle = await Movie.update(updateObj, {
      where: filterObj,
    });
 
    console.log(updateTitle);
  } catch (error) {
    console.log(error);
  }
};

exports.updateActor = async (updateObj, filterObj) => {
  try {
    console.log(updateObj);
    console.log(filterObj);
    const updateActor = await Movie.update(updateObj, {
      where: filterObj,
    });

    console.log(updateActor);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteMovie = async (movieObj) => {
    try {
      console.log("Deleted");
      await Movie.destroy({where: movieObj});
    } catch (error) {
      console.log(error);
    }
  };