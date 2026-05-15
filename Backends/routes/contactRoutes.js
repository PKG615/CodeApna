import express from "express";

import {
  getContacts,
  // getContactById,
  createContact,
  updateContact,
  deleteContact
} from "../controllers/contactController.js";

const router = express.Router();
router.post("/", createContact);
router.get("/", getContacts);
router.put("/:id", updateContact);
router.delete("/:id", deleteContact);

export default router;