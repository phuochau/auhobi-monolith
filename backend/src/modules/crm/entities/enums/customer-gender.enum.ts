import { registerEnumType } from "@nestjs/graphql";

export enum CustomerGender {
  MALE = 1,
  FEMALE,
  UNKNOWN
}

registerEnumType(CustomerGender, {
  name: 'CustomerGender',
});