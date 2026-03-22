import express from 'express';
import authMiddleware from '../middleware/auth.js';
import {
    addExpense,
    getAllExpense,
    updateExpense,
    deleteExpense,
    downloadExpenseExcel,
    getExpenseOverview
} from '../controllers/expenseController.js';

const expenseRouter = express.Router();

expenseRouter.post("/add",authMiddleware,addExpense);
expenseRouter.put("/update/:id",authMiddleware,updateExpense);
expenseRouter.delete("/delete/:id",authMiddleware,deleteExpense);
expenseRouter.get("/get",authMiddleware,getAllExpense);
expenseRouter.get("/downloadexcel",authMiddleware,downloadExpenseExcel);
expenseRouter.get("/overview",authMiddleware,getExpenseOverview);

export default expenseRouter;