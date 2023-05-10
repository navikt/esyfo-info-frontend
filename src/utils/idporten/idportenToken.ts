import { NextApiRequest } from "next";

import { isMockBackend } from "../environment";
import { validateToken } from "./verifyIdportenToken";

async function getIdportenToken(req: NextApiRequest) {
    if (isMockBackend()) {
        return "sometoken";
    }

    const bearerToken = req.headers["authorization"];

    if (!bearerToken) {
        throw new Error("loginRequiredError");
    }

    if (!(await validateToken(bearerToken))) {
        throw new Error(
            "Failed to validate bearer token, redirecting to login"
        );
    }

    return bearerToken.replace("Bearer ", "");
}

export default getIdportenToken;
