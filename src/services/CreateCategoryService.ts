import { CategoriesRepository } from "../respositories/CategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

export class CreateCategoryService {
  constructor(readonly categoriesRepository: CategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists =
      this.categoriesRepository.findCategoryByName(name);

    if (categoryAlreadyExists != null) {
      throw new Error(`Category already exists`);
      // return response.status(400).json({ error: "Category already exists." });
    }

    this.categoriesRepository.createCategory({ name, description });
  }
}
