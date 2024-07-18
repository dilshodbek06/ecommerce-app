// FILE: @/app/database/connection.ts
import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "@/models/User";

const pgConnection = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5433,
  database: "ormdb",
  username: "postgres",
  password: "dilshod777",
  synchronize: true,
  logging: true,
  entities: [User],
  migrations: [],
  subscribers: [],
});

export const getDBConnection = async (): Promise<DataSource> => {
  if (!pgConnection.isInitialized) {
    await pgConnection.initialize();
  }
  return pgConnection;
};
