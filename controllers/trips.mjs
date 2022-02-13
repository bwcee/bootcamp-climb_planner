// db is an argument to this function so
// that we can make db queries inside
export default function initTripsController(db) {
  const index = (request, response) => {
    db.Trip.findAll({ attributes: ["id", "name"] })
      .then((trips) => {
        response.send({ trips });
      })
      .catch((error) => console.log(error));
  };

  const doTrips =(req, res)=>{
    const {name} = req.body
    db.Trip
    .create({name})
    .then(data=>{
      res.send(data)
    })
    .catch(err => console.log(err))
  }

  // return all methods we define in an object
  // refer to the routes file above to see this used
  return {
    index,
    doTrips
  };
}
