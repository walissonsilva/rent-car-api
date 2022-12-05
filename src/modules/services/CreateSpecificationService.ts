import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

export class CreateSpecificationService {
  constructor(readonly specificationsRepository: ISpecificationsRepository) {}

  execute({ name, description }: IRequest): void {
    this.specificationsRepository.create({ name, description });
  }
}
