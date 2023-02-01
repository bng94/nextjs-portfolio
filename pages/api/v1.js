import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "GET") {
    const client = await MongoClient.connect(
      process.env.NEXT_PUBLIC_DB_CONNECTION_URL
    );
    try {
      const db = client.db();
      const commonInfo = await db.collection("common").findOne({});
      const experiences = await db.collection("experiences").find({}).toArray();
      const projects = await db.collection("projects").find({}).toArray();
      const noteworthy = await db.collection("noteworthy").find({}).toArray();

      client.close();

      res.status(201).json({
        message: "Successfully Retrieved Data",
        data: {
          role: commonInfo.role,
          aboutInfo: commonInfo.summary,
          technologies: commonInfo.technologies,
          src: commonInfo.src,
          experiences,
          projects,
          noteworthy,
        },
      });
    } catch (e) {
      console.log(e);

      res.status(500).json({
        message: "Internal Server Error!",
        error: e.message,
      });
    }
    return;
  } else {
    res.status(404).json({ message: "Request Not Found" });
    return;
  }
}

export default handler;
