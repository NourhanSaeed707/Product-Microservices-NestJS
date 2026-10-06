import { IsNotEmpty, IsString } from "class-validator";

export class ProductDTO {
    id?: number;

    @IsString()
    @IsNotEmpty()
    title: string;

    image: string;

    likes?: number;
}