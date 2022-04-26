import { connect } from "mongoose";

(async () => {
  try {
    const db = await connect(
      "mongodb+srv://playko:komodor11@apidb.lldrd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );
    console.log("Db connectect to", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
