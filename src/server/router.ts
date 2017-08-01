import express = require("express");
import { topController } from "./controller";

export function create(): express.Router {
    const router = express.Router();
    router.use("/", topController as express.Router);

    return router;
}
