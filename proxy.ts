import { NextRequest, NextResponse } from "next/server";
import { userServie } from "./services/user.service";

export async function proxy(request: NextRequest) {
    //     console.log(request.url);
    let isAuthecticated = false;
    let isAdmin = false;
    const { data } = await userServie.getSession();
    if(data){
      isAuthecticated = true;
      // isAdmin = data.user.role === ""
    }
    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard"],
};
