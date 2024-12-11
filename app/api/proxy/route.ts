import { NextResponse } from "next/server";

export async function GET() {
  const url = "https://api.monacoprotocol.xyz/2024-11-01-total-points.js";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      return NextResponse.json(
        { error: `Failed to fetch script: ${response.statusText}` },
        // eslint-disable-next-line prettier/prettier
        { status: response.status }
      );
    }

    const scriptText = await response.text();

    // Respond with the fetched JavaScript file
    return new Response(scriptText, {
      headers: {
        "Content-Type": "application/javascript",
      },
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
