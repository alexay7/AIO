import { Field, ID, InputType, Int } from "@nestjs/graphql";
import { Max, Min } from "class-validator";

// Aquí se declara el modelo por cuarta vez vez, para poder mutarlo
@InputType()
export class CarInput {
    @Field()
    readonly thumbnailSrc: string;
    @Field()
    readonly name: string;
    @Field()
    readonly mileage: string;
    @Field()
    readonly geartype: string;
    @Field(() => Int)
    // Validación
    @Max(1000)
    @Min(10, { message: "Aquí no regalamos los coches caballero" })
    readonly dailyprice: number;
    @Field(() => Int)
    @Max(20000)
    @Min(1500)
    readonly monthlyprice: number;
    @Field()
    readonly gas: string;
}