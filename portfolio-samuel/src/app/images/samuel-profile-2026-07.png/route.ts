export function GET(request: Request) {
  return Response.redirect(new URL("/images/samuel-profile.png", request.url), 307);
}
