import { NextRequest } from "next/server";

export function proxy(request: NextRequest){
      console.log(request.url);
}

export const config = {

}