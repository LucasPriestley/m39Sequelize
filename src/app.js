const yargs = require("yargs");
const { sequelize } = require("./db/connection");
const { createMovie, findMovie, updateMovie, } = require("./movie/function");


const app = async (yargsObj) => {
  await sequelize.sync({ alter: true });
  if (yargsObj.create) {
    await createMovie({ title: yargsObj.title, actor: yargsObj.actor });
    //add movie to db
  } else if (yargsObj.read) {
    await findMovie({ title: yargsObj.title });
    //list movies from db
  } else if (yargsObj.update) {
    const updateObj = { title: yargsObj.newTitle };
    const filterObj = { title: yargsObj.title };
    await updateMovie(updateObj, filterObj);
    //update a movie from db
  } else if (yargsObj.delete) {
    //delete movie from db
  } else {
    console.log("Incorrect command");
  }
};

app(yargs.argv);
