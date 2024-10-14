// src/routes/users.routes.js

import { Router } from "express";
import {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
  loginUser,
} from "../controllers/users.controllers.js";

const router = Router();

router.get("/users", getUsers);

router.get("/users/:id", getUser);

router.post("/users", createUser);

router.post("/login", loginUser);

router.delete("/users/:id", deleteUser);

router.put("/users/:id", updateUser);

export { router };
