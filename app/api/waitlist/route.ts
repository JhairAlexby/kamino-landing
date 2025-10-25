import { NextResponse } from "next/server";
import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ ok: false, message: "Email inválido" }, { status: 400 });
    }

    const dir = path.join(process.cwd(), "data");
    const filePath = path.join(dir, "waitlist.json");

    await mkdir(dir, { recursive: true });

    let items: Array<{ email: string; createdAt: string }> = [];
    try {
      const data = await readFile(filePath, "utf-8");
      items = JSON.parse(data);
    } catch {
      // file may not exist on first write; continue
    }

    const exists = items.some((i) => i.email.toLowerCase() === email.toLowerCase());
    if (exists) {
      return NextResponse.json({ ok: true, message: "Ya estás registrado" });
    }

    items.push({ email, createdAt: new Date().toISOString() });
    await writeFile(filePath, JSON.stringify(items, null, 2), "utf-8");

    return NextResponse.json({ ok: true, message: "¡Te registraste a la lista de espera!" });
  } catch (err) {
    return NextResponse.json({ ok: false, message: "Error interno" }, { status: 500 });
  }
}