export function authPages(context) {
  const { token } = context.req.cookies;
  if (token) {
    context.res.writeHead(302, { Location: "/" });
    context.res.end();
  }
}

export function unAuthPages(context) {
  const { token } = context.req.cookies;
  if (!token) {
    context.res.writeHead(302, { Location: "/auth/login" });
    context.res.end();
  }
}
