import { NextRequest } from "next/server";
import { updateSession } from "./app/lib";

export async function middleware(request: NextRequest) {
 console.log('middleware')
 return await updateSession(request);
}

// this function is run on every request verified with the console.log
// this allows for continuous session updates on every request
// this can also use for authentication and so much more...