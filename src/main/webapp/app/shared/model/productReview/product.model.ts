export interface IProduct {
  id?: number;
  productId?: string;
  averageReviewScore?: number;
  numberOfReview?: number;
}

export class Product implements IProduct {
  constructor(public id?: number, public productId?: string, public averageReviewScore?: number, public numberOfReview?: number) {}
}
