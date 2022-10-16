import { Router } from "express";

import { CategoriesRepository } from "../respositories/CategoriesRepository";

const categoriesRepository = new CategoriesRepository();

export const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  categoriesRepository.createCategory({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const categories = categoriesRepository.listCategories();

  response.status(200).json({ categories });
});
