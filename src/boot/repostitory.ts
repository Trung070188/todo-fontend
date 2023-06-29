import { UserRepository } from "@/repositories/users/UserRepository";
export default {
  install: (app: any) => {
    // inject a globally available $translate() method
    app.config.globalProperties.$repository = {
      user: new UserRepository(),
    };
    app.provide(
      "repository",
      (name: string) => app.config.globalProperties.$repository[name]
    );
  },
};
