const express = require("express");
const router = express.Router();
const {
  newComment,
  deleteComment,
  updateComment,
  getAllComment,
  seedComments,
} = require("../controllers/comment");
const { auth } = require("../middleware/user");
const { getUser } = require("../controllers/content");

//create new comment by owner user or other user
router.put("/newComment/:id",auth ,newComment);

//delelte user comment
router.delete("/deleteComment/:id", deleteComment);

//edit user comment
router.patch("/userUpdateComment/:id", updateComment);

//get out all the comment from comment collection
router.get("/getAllComment", getAllComment);

router.get("/seed", seedComments);



module.exports = router;
