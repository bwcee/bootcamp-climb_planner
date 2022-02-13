// db is an argument to this function so
// that we can make db queries inside
export default function initRoutesController(db) {
  const index = (request, response) => {
    db.Route.findAll({ attributes: ["id", "name", "difficulty", "tripId"] })
      .then((routes) => {
        response.send(routes);
      })
      .catch((error) => console.log(error));
  };

  const doDeleteRoute = (req, res) => {
    const {id} = req.body;
    db.Route.destroy({ where: { id } })
      .then((result) => res.send(`deleted ${result} rows`))
      .catch((err) => console.log(err));
  };

  // return all methods we define in an object
  // refer to the routes file above to see this used
  return {
    index,
    doDeleteRoute,
  };
}
