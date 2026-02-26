import { NextRequest, NextResponse } from "next/server";
import { userServie } from "./services/user.service";
import { Roles } from "./constants/role";

export async function proxy(request: NextRequest) {
    //     console.log(request.url);
    const pathName = request.nextUrl.pathname;
    let isAuthecticated = false;
    let isAdmin = false;
    const { data } = await userServie.getSession();
    if (data) {
        isAuthecticated = true;
        isAdmin = data.user.role === Roles.admin;
    }

    if(!isAuthecticated){
      return NextResponse.redirect(new URL("/login", request.url));
    }
    if(isAdmin )
    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard"],
};
