import express from "express";
const router = express.Router();

let students = [
  {
    name: "Rishabh Kumar",
    roll: 45,
    course: "B.Tech",
  },
  {
    name: "Sumit Kumar",
    roll: 67,
    course: "B.Com",
  },
];

router.get("/", (req, res) => {
  res.json(students);
});

router.post("/", (req, res) => {
  const student = {
    roll: parseInt(req.body.roll),
    name: req.body.name,
    course: req.body.course,
  };
  const studentExist = students.find(
    (item) => item.roll === parseInt(req.body.roll)
  );
  if (studentExist) {
    return res
      .status(403)
      .json({ msg: "Student with the same roll number already exist" });
  }
  if (!student) return res.sendStatus(403);
  students.push(student);
  res.json(students);
});

router.put("/:roll", (req, res) => {
  const student = students.findIndex(
    (item) => item.roll === parseInt(req.params.roll)
  );
  if (!student) return res.sendStatus(403);

  students[student] = {
    ...students[student],
    ...req.body,
  };

  res.json(students);
});

router.delete("/:roll", (req, res) => {
  const newstudents = students.filter(
    (item) => item.roll !== parseInt(req.params.roll)
  );
  if (newstudents && newstudents.length === students.length) {
    return res.sendStatus(404);
  }
  students = newstudents;
  res.json(newstudents);
});

export default router;
