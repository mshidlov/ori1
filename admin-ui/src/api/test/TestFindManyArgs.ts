import { TestWhereInput } from "./TestWhereInput";
import { TestOrderByInput } from "./TestOrderByInput";

export type TestFindManyArgs = {
  where?: TestWhereInput;
  orderBy?: TestOrderByInput;
  skip?: number;
  take?: number;
};
