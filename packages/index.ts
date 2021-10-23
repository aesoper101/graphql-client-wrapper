import { App } from "vue";
import { ClientOptions } from "@urql/vue";
import { setupGraphqlClient, useGraphqlClient } from "./client";

const GraphqlClientPlugin = {
  install: (app: App, options: ClientOptions) => {
    setupGraphqlClient(options);
  },
};

export default GraphqlClientPlugin;
export { setupGraphqlClient, useGraphqlClient };
