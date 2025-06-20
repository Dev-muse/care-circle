// app/api/patients/create/route.ts
import { NextResponse } from "next/server";
import { ID, Query } from "node-appwrite";
import { users } from "@/lib/appwrite.config";
import { parseStringify } from "@/lib/utils";

// Optional: define this interface if not already present
interface CreateUserParams {
  name: string;
  email: string;
  phone: string;
}

export async function POST(req: Request) {
  try {
    const body: CreateUserParams = await req.json();

    const newUser = await users.create(
      ID.unique(),
      body.email,
      body.phone,
      undefined,
      body.name
    );

    return NextResponse.json(parseStringify(newUser), { status: 201 });
  } catch (error: any) {
    console.error("Error creating user:", error);

    // Email already exists
    if (error?.code === 409) {
      const documents = await users.list([
        Query.equal("email", [error.email]),
      ]);
      return NextResponse.json(documents?.users[0], { status: 200 });
    }

    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}
