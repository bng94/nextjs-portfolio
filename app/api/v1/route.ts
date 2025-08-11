import { MongoClient } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

// Connection with timeout settings
async function connectToMongoDB() {
  const client = new MongoClient(process.env.DB_MONGODB_URI!, {
    connectTimeoutMS: 10000,
    socketTimeoutMS: 45000,
    serverSelectionTimeoutMS: 5000,
  });

  await client.connect();
  return client;
}

export async function GET(request: NextRequest) {
  let client: MongoClient | null = null;

  try {
    client = await connectToMongoDB();
    const db = client.db();

    const [commonInfo, experiences, projects, noteworthy] = await Promise.all([
      db.collection("common").findOne({}),
      db.collection("experiences").find({}).toArray(),
      db.collection("projects").find({}).toArray(),
      db.collection("noteworthy").find({}).toArray(),
    ]);

    if (!commonInfo || !experiences || !projects || !noteworthy) {
      const missing: string[] = [];
      if (!commonInfo) missing.push("commonInfo");
      if (!experiences) missing.push("experiences");
      if (!projects) missing.push("projects");
      if (!noteworthy) missing.push("noteworthy");

      return NextResponse.json(
        { message: `Missing data sets: ${missing.join(", ")}` },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
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
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Database error:", error);

    return NextResponse.json(
      {
        message: "Internal Server Error!",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  } finally {
    if (client) {
      await client.close();
    }
  }
}
