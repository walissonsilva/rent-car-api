import { Router } from "express";

interface ICategory {
  name: string;
  description: string;
}

const categories: ICategory[] = [];

export const categoriesRoutes = Router();

categoriesRoutes.post("/categories", (request, response) => {
  const { name, description } = request.body;

  categories.push({
    name,
    description,
  });

  return response.status(201).send();
});

categoriesRoutes.get("/categories", (request, response) => {
  response.status(200).json({ categories });
});
