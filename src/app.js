const yargs = require("yargs");
const { sequelize } = require("./db/connection");
const {
  createMovie,
  findMovie,
  updateTitle,
  updateActor,
  deleteMovie,
  findMovie2,
} = require("./movie/function");

const app = async (yargsObj) => {
  // await sequelize.sync({ alter: true });
  if (yargsObj.create) {
    await createMovie({ title: yargsObj.title, actor: yargsObj.actor });
    //add movie to db
  } else if (yargsObj.read) {
    await findMovie({ title: yargsObj.title }); 
    //list movies from db
  } else if (yargsObj.readAll) {
    await findMovie2(); 

  } else if (yargsObj.updateTitle) {
    const updateObj = { title: yargsObj.newTitle };
    const filterObj = { title: yargsObj.title };
    await updateTitle(updateObj, filterObj);
    //update a movie from db
  } else if (yargsObj.updateActor) {
    const updateObj = { actor: yargsObj.newActor };
    const filterObj = { actor: yargsObj.actor };
    await updateActor(updateObj, filterObj);
    //update a movie from db
  }
  
  else if (yargsObj.delete) {
    await deleteMovie({ actor: yargsObj.title });
    //delete movie from db
  } else {
    console.log("Incorrect command");
  }
};

app(yargs.argv);
