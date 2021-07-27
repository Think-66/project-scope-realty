import { agentImages } from "../utils/agentImages";
import { getRequest } from "./coreApiServices";

export const getAgents = () => {
  return getRequest(
    `https://api.realtymx.com/agents/search/?apikey=4e6d6261566c3179`
  );
};

export const getAgentById = (id) => {
  return getRequest(
    `https://api.realtymx.com/agents/` + id + `/?apikey=4e6d6261566c3179`
  );
};

export const getAgentImageById = (id) => {
  const am = agentImages.filter(x => x.id === id);
  return am.length > 0 ? am[0].path : "";
}

export const setSequence = (id) => {
  const am = agentImages.filter(x => x.id === id);
  if (am.length > 0) {
    console.log(id, "-> sequence: ", am[0].sequence);
    return am[0].sequence === undefined ? 1000 : am[0].sequence;
  }
  return 1000;
}