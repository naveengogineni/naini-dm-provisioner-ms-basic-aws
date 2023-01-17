import { IsBoolean, IsNotEmpty, IsObject, IsString } from "class-validator";

export class createThingDto {
    @IsString()
    @IsNotEmpty()
    thingName: string;

    @IsObject()
    attributePayload: {

        attributes: {

        };
    };

    @IsBoolean()
    merge: boolean;

    @IsString()
    billingGroupName: string;

    @IsString()
    thingTypeName: string;
}