import { Car } from '../cars/car';

export class Owner {
    id: number;
    name: string;
    type: string;
    image: string;
    cars: Car[];
}
