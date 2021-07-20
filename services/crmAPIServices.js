import { postBARequest } from "./coreApiServices"

export const followUpBoss = (data) => {
    return postBARequest("https://api.followupboss.com/v1/people", data, "41b694e0718fd5b76675f55f9b3ba067cea0d3", "");
}