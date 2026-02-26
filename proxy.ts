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
    //user is not authencticated means was not logged in yet
    if (!isAuthecticated) {
        return NextResponse.redirect(new URL("/login", request.url));
    }
    //user is authenticated and role = "ADMIN"
    //ADMIN can not visit user dashboard
    //so red
    if (isAdmin && pathName.startsWith("/dashboard")) {
        return NextResponse.redirect(new URL("/admin-dashboard", request.url));
    }
    // not admin and trying to enter a admin dashboard, so redirecting to user dashboard
    if (!isAdmin && pathName.startsWith("/admin-dashboard")) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard"],
};
