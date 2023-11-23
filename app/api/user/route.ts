import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const users = await prisma.user.findMany();
  try {
    return NextResponse.json({ message: "OK", users });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
  return Response.json({ users });
}
export async function POST(req: Request) {
  const { email, name, password } = await req.json();
  try {
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password,
      },
    });
    return Response.json({ message: "OK", name });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
export async function DELETE(req: Request) {
  const { id } = await req.json();
  try {
    const user = await prisma.user.delete({
      where: {
        id,
      },
    });
    return Response.json({ message: "OK", user });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
export async function PUT(req: Request) {
  const { id, email, name, password } = await req.json();
  try {
    const user = await prisma.user.update({
      where: {
        id,
      },
      data: {
        email,
        name,
        password,
      },
    });
    return Response.json({ message: "OK", user });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
