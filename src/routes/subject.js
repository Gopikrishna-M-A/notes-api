import express from 'express';
const router = express.Router();
import { getSubject, getAllSubjects, addSubject, deleteSubject, updateSubject, getSubjectBySemester }  from '../controllers/subject.js';


router.get("/:id", getSubject)
router.get("/",getAllSubjects)
router.get("/sem/:id",getSubjectBySemester)
router.post("/", addSubject)
router.delete("/:id", deleteSubject)
router.patch("/:id", updateSubject)


export default router;
