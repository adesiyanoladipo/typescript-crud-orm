import { Express, Request, Response } from 'express';
import { allPostHandler, createPostHandler, editPostHandler } from '../controller/post.controller';
import { createPostSchema } from '../schema/post.schema';
import validateRequest from '../middleware/validateRequest';

export default function (app: Express){
	app.get("/post/all", allPostHandler);
	app.post("/post/create", validateRequest(createPostSchema), createPostHandler);
	app.patch("/post/edit/:id", editPostHandler);
}