import { 
     addNewPlayer ,
     getPlayer,
     getPlayerWithID,
     UpdatePlayer,
     deletePlayer
     } from "../controllers/PlayerControllers"

const routes = (app) =>{
    app.route('/players')

    //get endpoint
    .get(getPlayer)

    //post endpoint
    .post(addNewPlayer);

    app.route('/player/:PlayerId')
    // Get specific player
    .get(getPlayerWithID)

    // update specific player
    .put(UpdatePlayer)

    // delete specific player
    .delete(deletePlayer)
}
export default routes;