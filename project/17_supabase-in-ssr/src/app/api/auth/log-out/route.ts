import { createClient } from "@/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  const supabase = createClient();

  await supabase.auth.signOut();

  return NextResponse.json({ message: "로그로그아웃" });
}
