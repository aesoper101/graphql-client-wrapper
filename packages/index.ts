import { App } from "vue";
import { ClientOptions } from "@urql/vue";
import { setupGraphqlClient } from "./client";

export * from "./client";

const GraphqlClientPlugin = {
  install: (app: App, options: ClientOptions) => {
    setupGraphqlClient(options);
  },
};

export default GraphqlClientPlugin;
