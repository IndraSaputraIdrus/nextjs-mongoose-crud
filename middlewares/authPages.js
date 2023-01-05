import jwt from "jsonwebtoken";

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

export function verifyTokenApi(req, res) {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ message: "Not Authorized" });

  const token = auth.split(" ");

  if (token[0] !== "Bearer") {
    return res.status(401).json({ message: "Invalid Token" });
  }

  const tokenValue = token[1];

  try {
    jwt.verify(tokenValue, process.env.PRIVATE_KEY);
  } catch (error) {
    return res.status(401).json({ message: "Invalid Token", error }).end();
  }
}

export function verifyTokenCookie(context) {
  unAuthPages(context);
  const { token } = context.req.cookies;
  try {
    jwt.verify(token, process.env.PRIVATE_KEY);

    return token;
  } catch (error) {
    context.res.writeHead(302, { Location: "/" });
    context.res.end(error);
  }
}
