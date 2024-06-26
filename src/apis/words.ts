import { getRequest, postRequest } from "../utils/api";

export const getWordsApi = async () => {
  const endpoint = "/word/list";
  const data = await getRequest(endpoint);
  console.log(data);
  return data as any;
};

export const registerWordApi = async (body: any) => {
  const endpoint = "/word/register";
  const res = await postRequest(endpoint, body);
  return res;
};

export const deleteWordApi = async (body: any) => {
  const endpoint = "/word/delete";
  const res = await postRequest(endpoint, body);
  return res;
};
