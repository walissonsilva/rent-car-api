import { Router } from "express";

import { CategoriesRepository } from "../modules/repositories/CategoriesRepository";
import { CreateCategoryService } from "../modules/services/CreateCategoryService";

const categoriesRepository = new CategoriesRepository();

export const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);
  createCategoryService.execute({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const categories = categoriesRepository.listCategories();

  response.status(200).json({ categories });
});
