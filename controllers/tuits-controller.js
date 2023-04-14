import * as dao from "../db/tuiter/tuits/tuits-dao.js";

const TuitController = (app) => {
  const findTuits = async (req, res) => {
    const tuits = await dao.findTuits();
    res.json(tuits);
  };

  const findTuitById = async (req, res) => {
    const tuit = await dao.findTuitById(req.params.id);
    res.json(tuit);
  };

  const createTuit = async (req, res) => {
    const newTuit = await dao.createTuit(req.body);
    res.json(newTuit);
  };

  const updateTuit = async (req, res) => {
    const status = await dao.updateTuit(req.params.id, req.body);
    res.send(status);
  };

  const deleteTuit = async (req, res) => {
    const status = await dao.deleteTuit(req.params.id);
    res.send(status);
  };

  app.get("/api/tuits", findTuits);
  app.get("/api/tuits/:id", findTuitById);
  app.post("/api/tuits", createTuit);
  app.put("/api/tuits/:id", updateTuit);
  app.delete("/api/tuits/:id", deleteTuit);
};

export default TuitController;