import {
  createClient,
  dedupExchange,
  cacheExchange,
  fetchExchange,
  ClientOptions,
} from "@urql/vue";
import { retryExchange } from "@urql/exchange-retry";
import { RetryExchangeOptions } from "@urql/exchange-retry/dist/types/retryExchange";

const options: RetryExchangeOptions = {
  initialDelayMs: 1000,
  maxDelayMs: 15000,
  randomDelay: true,
  maxNumberAttempts: 1,
  // @ts-ignore
  retryIf: (err) => err && err.networkError,
};

let client = createClient({
  url: "/graph/query",
  requestPolicy: "network-only",
  exchanges: [
    dedupExchange,
    cacheExchange,
    retryExchange(options), // Use the retryExchange factory to add a new exchange
    fetchExchange,
  ],
});

export const setupGraphqlClient = (opts: ClientOptions) => {
  client = createClient(opts);
};

export const useGraphqlClient = () => {
  return client;
};

export default client;
