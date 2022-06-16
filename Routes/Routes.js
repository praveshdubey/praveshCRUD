import express  from "express";
import { addUser, getUsers, getUser, editUser, deleteUser } from "../Controller/user-controller.js";

const router = express.Router();

router.post('/add',addUser);         // add the records
router.get('/all',getUsers);         // get all the records
router.get('/:id',getUser);          // find the record by id
router.put('/:id',editUser);         // edit the record by id
router.delete('/:id',deleteUser);    // delete the records by ID

export default router;