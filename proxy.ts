import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
//     console.log(request.url);
      const {data} = 
    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard"],
};
