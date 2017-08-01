import * as express from "express";

const router = express.Router();

router.get("/", (req: express.Request, res: express.Response, next: () => void) => {
    res.status(200).render(
        "index",
        {
            title: "Top page"
        }
    );
});

module.exports = router;
