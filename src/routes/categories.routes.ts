import { Router } from "express";

import { Category } from "../model/Category";

const categories: Category[] = [];

export const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const category = new Category();
  Object.assign(category, {
    name,
    description,
    created_at: new Date(),
  });

  categories.push(category);

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  response.status(200).json({ categories });
});
