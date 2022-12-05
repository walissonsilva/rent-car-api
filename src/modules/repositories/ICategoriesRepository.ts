import { Category } from "../model/Category";
import { ICreateCategoryDTO } from "./CategoriesRepository";

export interface ICategoriesRepository {
  createCategory: ({ name, description }: ICreateCategoryDTO) => void;
  listCategories: () => Category[];
  findCategoryByName: (name: string) => Category | undefined;
}
