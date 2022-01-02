import { BlaBlaWhereInput } from "./BlaBlaWhereInput";
import { BlaBlaOrderByInput } from "./BlaBlaOrderByInput";

export type BlaBlaFindManyArgs = {
  where?: BlaBlaWhereInput;
  orderBy?: BlaBlaOrderByInput;
  skip?: number;
  take?: number;
};
