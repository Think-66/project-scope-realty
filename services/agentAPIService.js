import { getRequest } from "./coreApiServices";

export const getAgents = () => {
  return getRequest(
    `http://api.realtymx.com/agents/search/?apikey=4e6d6261566c3179`
  );
};

export const getAgentById = (id) => {
  return getRequest(
    `http://api.realtymx.com/agents/` + id + `/?apikey=4e6d6261566c3179`
  );
};
