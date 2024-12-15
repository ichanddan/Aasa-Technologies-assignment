import express from "express";
const router = express.Router();


// router.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   res.setHeader("Access-Control-Allow-Credentials", true);
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   if ("OPTIONS" == req.method) {
//     res.sendStatus(200);
//   } else {
//     next();
//   }
// });

router.get("/", (req, res) => {
  res.status(200);
  res.json({ status: "success", message: "API Server Running." });
});


export default router;