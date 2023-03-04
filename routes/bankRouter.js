const express = require("express");
const {
  createAccount,
  updateAccount,
  depositeAmount,
  withdrawAmount,
  transferMoney,
  printStatement,
} = require("../controllers/bankController");
const router = express.Router();

router.post("/newAccount", createAccount);
router.patch("/updateAccount/:id", updateAccount);
router.patch("/depositeAmount/:id", depositeAmount);
router.patch("/withdrawAmount/:id", withdrawAmount);
router.patch("/transferMoney/:senderId/:recieverId", transferMoney);
router.get("/printStatements/:id", printStatement );

module.exports = router;
