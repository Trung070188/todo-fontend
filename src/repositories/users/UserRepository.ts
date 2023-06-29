
import { BaseRepository } from "../BaseRepository";
import { AxiosResponse } from "axios";

class UserRepository extends BaseRepository {
  constructor() {
    super("/users");
  }
     
}
export { UserRepository };
