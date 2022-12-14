import { Request, Response } from 'express';
import { omit } from 'lodash';
import { createPost, allPost, editPostService, getPost, deletePost } from '../service/post.service';
import log from '../logger';

export async function createPostHandler(req: Request, res: Response) {
	try {
		const post = await createPost(req.body);
		return res.send(omit(post));
	} catch(e){
		log.error(e);
		return res.status(409).send(e.message);
	}
}

export async function allPostHandler(req: Request, res: Response) {
	try {
		const post = await allPost();
		return res.send(omit(post));
	} catch(e){
		log.error(e);
		return res.status(409).send(e.message);
	}
}

export async function editPostHandler(req: Request, res: Response) {
	try {
		const post = await editPostService(req.body, req.params);
		return res.send(omit(post));
	} catch(e){
		log.error(e);
		return res.status(409).send(e.message);
	}
}

export async function getPostHandler(req: Request, res: Response) {
	try {
		const post = await getPost(req.params.id)
	} catch(e) {
		log.error(e);
		return res.status(409).send(e.message);
	}
}

export async function deletePostHandler(req: Request, res: Response) {
	try {
		const post = await deletePost(req.params.id)
	} catch(e) {
		log.error(e);
		return res.status(409).send(e.message);
	}
}