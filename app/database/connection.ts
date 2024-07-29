// FILE: @/app/database/connection.ts
import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "@/models/User";
import { Category } from "@/models/Category";

const pgConnection = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  database: "ormdb",
  username: "postgres",
  password: "dilshod777",
  synchronize: true,
  logging: true,
  entities: [User, Category],
  migrations: [],
  subscribers: [],
});

export const getDBConnection = async (): Promise<DataSource> => {
  if (!pgConnection.isInitialized) {
    await pgConnection.initialize();
  }
  return pgConnection;
};
