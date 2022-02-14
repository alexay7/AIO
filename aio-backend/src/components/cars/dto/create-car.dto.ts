import { Field, ID, Int, ObjectType } from "@nestjs/graphql";

// Aquí se declara el modelo por tercera vez, para poder obtenerlo
@ObjectType()
export class CreateCarDto {
    @Field(() => ID)
    id: string;
    @Field()
    readonly thumbnailSrc: string;
    @Field()
    readonly name: string;
    @Field()
    readonly mileage: string;
    @Field()
    readonly geartype: string;
    @Field(() => Int)
    readonly dailyprice: number;
    @Field(() => Int)
    readonly monthlyprice: number;
    @Field()
    readonly gas: string;
}