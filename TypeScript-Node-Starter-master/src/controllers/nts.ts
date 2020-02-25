import {Request, Response} from "express";

export const findAllTodos = (req: Request, res: Response) => {
    res.json({
        hello:"world"
    });
};
