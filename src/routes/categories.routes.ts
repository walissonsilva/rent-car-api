import { Router } from "express";

import { CategoriesRepository } from "../respositories/CategoriesRepository";

const categoriesRepository = new CategoriesRepository();

export const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const categoryAlreadyExists = categoriesRepository.findCategoryByName(name);

  if (categoryAlreadyExists != null) {
    return response.status(400).json({ error: "Category already exists." });
  }

  categoriesRepository.createCategory({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const categories = categoriesRepository.listCategories();

  response.status(200).json({ categories });
});
