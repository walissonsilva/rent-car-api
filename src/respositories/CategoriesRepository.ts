import { Category } from "../model/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CategoriesRepository {
  private readonly categories: Category[];

  constructor() {
    this.categories = [];
  }

  createCategory({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();
    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  listCategories(): Category[] {
    return this.categories;
  }

  findCategoryByName(name: string): Category | undefined {
    const categoryFound = this.categories.find(
      (category) => category.name === name
    );
    return categoryFound;
  }
}

export { CategoriesRepository };
