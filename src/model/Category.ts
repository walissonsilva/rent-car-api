import { v4 as uuid } from "uuid";

class Category {
  id?: string;
  name: string;
  description: string;
  created_at: Date;

  constructor() {
    if (this.id == null) {
      this.id = uuid();
    }
  }
}

export { Category };
