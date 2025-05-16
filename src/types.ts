export interface IProduct {
  id: number;
  titlePart: {
    titlePart1: string;
    titlePart2: string; 
  }
  image: string;
  description: string;
  price: number;
}

export interface IFeedback {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  profession: string;
  feedback: string;
}