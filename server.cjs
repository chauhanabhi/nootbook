const jsonServer = require("json-server");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const server = jsonServer.create();
const router = jsonServer.router("data/db.json");
const middlewares = jsonServer.defaults();

const SECRET_KEY = "CODEBOOK_SECRET_123"; // move to env later
const EXPIRES_IN = "1h";

server.use(cors());
server.use(middlewares);
server.use(jsonServer.bodyParser);

// 🔐 helper function
const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, email: user.email },
    SECRET_KEY,
    { expiresIn: EXPIRES_IN }
  );
};

// ✅ REGISTER
server.post("/register", (req, res) => {
  const { email, password, name } = req.body;

  const users = router.db.get("users").value();
  const userExists = users.find((u) => u.email === email);

  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const newUser = {
    id: Date.now(),
    name,
    email,
    password // (plain for now — next step is bcrypt)
  };

  router.db.get("users").push(newUser).write();

  const token = generateToken(newUser);

  res.status(201).json({
    user: { id: newUser.id, email, name },
    token
  });
});

// ✅ LOGIN
server.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = router.db
    .get("users")
    .find({ email, password })
    .value();

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = generateToken(user);

  res.json({
    user: { id: user.id, email: user.email, name: user.name },
    token
  });
});

server.use(router);

server.listen(8000, () => {
  console.log("JWT Auth Server running on http://localhost:8000");
});
