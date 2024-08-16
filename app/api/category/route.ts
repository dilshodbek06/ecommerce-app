import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function POST(req: Request) {
  try {
    const { imageUrl, title, description, isPublished } = await req.json();

    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unathorized", { status: 401 });
    }
    const result =
      await sql`INSERT INTO Category (title, imageUrl, description, isPublished)
VALUES ('${title}', '${imageUrl}', '${description}', ${isPublished});
`;
    return NextResponse.json({ result });
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

    return NextResponse.json({});
  } catch (error) {
    console.log("[CREATE_CATEGORY]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
