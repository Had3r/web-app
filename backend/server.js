const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser); // Added this line

server.use((req, res, next) => {
    if (req.method === "GET" && req.path === "/accounts") {
        const db = router.db;
        const total = db.get("accounts").size().value();
        res.setHeader("X-Total-Count", total);
    }
    next();
});

server.use((req, res, next) => {
    if (req.method === "POST" && req.path === "/accounts") {
        const db = router.db;
        const accounts = db.get("accounts").value();
        const newOwnerId = req.body.ownerId;

        const isOwnerIdExists = accounts.some(account => account.ownerId.toString() === newOwnerId.toString());

        if (isOwnerIdExists) {
            res.status(400).send({ error: "OwnerId must be unique" });
            return;
        }
    }
    next();
});

server.use(router);
server.listen(3001, () => {
    console.log("JSON Server is running");
});
