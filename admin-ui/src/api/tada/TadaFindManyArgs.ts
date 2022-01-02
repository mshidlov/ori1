import { TadaWhereInput } from "./TadaWhereInput";
import { TadaOrderByInput } from "./TadaOrderByInput";

export type TadaFindManyArgs = {
  where?: TadaWhereInput;
  orderBy?: TadaOrderByInput;
  skip?: number;
  take?: number;
};
