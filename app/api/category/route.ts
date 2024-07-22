import { getDBConnection } from "@/app/database/connection";
import { Category } from "@/models/Category";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unathorized", { status: 401 });
    }

    const connection = await getDBConnection();
    const newCategory = new Category();
    newCategory.title = data.title;
    newCategory.imageUrl = data.imageUrl;
    newCategory.isPublished = data.isPublished;
    newCategory.description = data.description;

    const response = await connection.getRepository(Category).save(newCategory);
    return NextResponse.json(response);
  } catch (error) {
    console.log("[CREATE_CATEGORY]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unathorized", { status: 401 });
    }

    const connection = await getDBConnection();

    const response = await connection.getRepository(Category).find();
    return NextResponse.json(response);
  } catch (error) {
    console.log("[CREATE_CATEGORY]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
