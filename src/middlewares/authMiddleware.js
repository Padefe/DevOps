import jwt from "jsonwebtoken";

export function verifiserToken(req, res, next)
{
    console.log("Middleware test")
    try
    {
        console.log("middleware", req.cookies.jwt);
        const token = req.cookies.jwt;

        console.log("middleware", token);

        const decodeToken = jwt.verify(token, process.env.JWT_SECRET,
            {
                audience: "app",
                issuer: "DEVOPS",
            }
        );
        console.log("middleware", decodeToken);
        req.user = decodeToken;
        next();
    }
    catch (error)
    {
        return res.status(403).json({ error: "Ugyldig eller manglende token" });
    }
}