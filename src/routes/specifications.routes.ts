import { Router } from "express";

import { SpecificationsRepository } from "../modules/repositories/SpecificationsRepository";
import { CreateSpecificationService } from "../modules/services/CreateSpecificationService";

export const specificationsRoutes = Router();

const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const createSpecificationService = new CreateSpecificationService(
    specificationsRepository
  );

  createSpecificationService.execute({ name, description });

  response.status(201).json({});
});
