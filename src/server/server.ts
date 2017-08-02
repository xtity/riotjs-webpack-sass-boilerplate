import * as config from "config";
import * as path from "path";
import * as http from "http";
import * as express from "express";
import * as ect from "ect";
import * as router from "./router";
import { ServerConfig } from "../common/type";

const serverConfig = config.get("server") as ServerConfig;
const viewDir = "../../../src/client/view";
const publicDir = "../../../public";
const routes = router.create();
const ectConfig: any = {
    root: path.resolve(__dirname, viewDir),
    ext: ".ect"
};

export class Server {
    private _server: http.Server;

    public start(): express.Application {
        const app = express();

        if (app.get("env") === "development") {
            const browserSync = require("browser-sync");
            const bs = browserSync({
                "proxy": "http://" + serverConfig.host + ":" + serverConfig.port,
                "injectChanges": "true",
                "files": [
                    path.resolve(__dirname, publicDir, "**/*"),
                    path.resolve(__dirname, viewDir, "**/*"),
                ],
                "watchOptions": {
                    "ignored": "node_modules"
                },
                "ws": true,
                "open": false
            });
            app.use(require("connect-browser-sync")(bs));

            // ect cache is disabled when development.
            ectConfig.cache = false;
        }

        app.set("views", path.resolve(__dirname, viewDir));
        app.set("view engine", "ect");
        app.engine("ect", ect(ectConfig).render);
        app.use("/", routes);
        app.use(express.static("public"));

        const server = app.listen(serverConfig.port, () => {
            console.log("Listening on port " + serverConfig.port);
            // process.send is defined only when it's executed as the child process.
            if (process.send) {
                // send ready signal to PM2
                // @see http://pm2.keymetrics.io/docs/usage/signals-clean-restart/#graceful-start
                process.send("ready");
            }
        });

        // gracefulShutdown on SIGINT signal
        process.on("SIGINT", async () => {
            console.log("Received kill signal, shutting down gracefully.");
            try {
                await this.close();
            } catch (err) {
                console.error("An error occurred while closing connection, continuing to shutting down", err);
            } finally {
                console.log("Closed out remaining connections.");
                process.exit();
            }
        });

        this._server = server;
        return app;
    }

    public async close(): Promise<void> {
        if (!this._server) {
            return;
        }
        await this._server.close();
    }
}
