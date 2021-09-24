import axios from "axios";
import fetch from "node-fetch";
import https from "https";
import { getSession } from "next-auth/client";
import { signOut } from "next-auth/client";
import { toast } from "react-toastify";
import fetchJsonp from "fetch-jsonp";

export const getJsonpRequest = async (url, params = null) => {
  var url = await new URL(url)
  params = { ...params }
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

  return fetchJsonp(url.toString())
    .then(function (response) {
      return response.json()
    })
    .catch(function (ex) {
      toast.error(
        customErrorMessage || "Something went wrong please try again!"
      );
    })
}

export const getRequest = async (
  url,
  params = null,
  accessToken = null,
  customErrorMessage = null
) => {
  const session = await getSession();
  var token;
  accessToken
    ? (token = accessToken)
    : (token = session ? session.accessToken : null);

  const instance = axios.create({
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
    headers: {
      Authorization: `Bearer ${token}`,
      ApplicationId: parseInt(process.env.appId),
      'Access-Control-Allow-Origin': '*'
    },
  });

  return instance
    .get(url, { params: { ...params } })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      if (
        error.response &&
        error.response.status &&
        error.response.status === 401
      ) {
        toast.error("Session expired");
        if (typeof window != "undefined") {
          signOut();
        }
      } else if (
        error.response &&
        error.response.status &&
        (error.response.status < 200 || error.response.status >= 300)
      ) {
        toast.error(
          error.response.data || "Something went wrong please try again!"
        );
      } else {
        toast.error(
          customErrorMessage || "Something went wrong please try again!"
        );
      }
    });
};

export const postRequest = async (
  url,
  requestBody,
  accessToken = null,
  customErrorMessage = null
) => {
  const session = await getSession();
  var token;
  accessToken
    ? (token = accessToken)
    : (token = session ? session.accessToken : null);

  const instance = axios.create({
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
    headers: {
      Authorization: `Bearer ${token}`,
      ApplicationId: parseInt(process.env.appId),
      'Access-Control-Allow-Origin': '*'
    },
  });

  return instance
    .post(url, requestBody)
    .then(function (response) {
      if (response.status === 401) {
        toast.error("Session expired");
        if (typeof window != "undefined") {
          signOut();
        }
      } else {
        return response.data;
      }
    })
    .catch((error) => {
      if (
        error.response &&
        error.response.status &&
        error.response.status === 401
      ) {
        toast.error("Session expired");
        if (typeof window != "undefined") {
          signOut();
        }
      } else if (
        error.response &&
        error.response.status &&
        (error.response.status < 200 || error.response.status >= 300)
      ) {
        toast.error(
          error.response.data || "Something went wrong please try again!"
        );
      } else {
        toast.error(
          customErrorMessage || "Something went wrong please try again!"
        );
      }
    });
};

export const putRequest = async (
  url,
  payload,
  accessToken = null,
  customErrorMessage = null
) => {
  const session = await getSession();
  var token;
  accessToken
    ? (token = accessToken)
    : (token = session ? session.accessToken : null);

  const instance = axios.create({
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
    headers: {
      Authorization: `Bearer ${token}`,
      ApplicationId: parseInt(process.env.appId),
      'Access-Control-Allow-Origin': '*'
    },
  });

  return instance
    .put(url, payload)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      if (
        error.response &&
        error.response.status &&
        error.response.status === 401
      ) {
        toast.error("Session expired");
        if (typeof window != "undefined") {
          signOut();
        }
      } else if (
        error.response &&
        error.response.status &&
        (error.response.status < 200 || error.response.status >= 300)
      ) {
        toast.error(
          error.response.data || "Something went wrong please try again!"
        );
      } else {
        toast.error(
          customErrorMessage || "Something went wrong please try again!"
        );
      }
    });
};

export const deleteRequest = async (
  url,
  payload,
  accessToken = null,
  customErrorMessage = null
) => {
  const session = await getSession();
  var token;
  accessToken
    ? (token = accessToken)
    : (token = session ? session.accessToken : null);

  const instance = axios.create({
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
    headers: {
      Authorization: `Bearer ${token}`,
      ApplicationId: parseInt(process.env.appId),
      'Access-Control-Allow-Origin': '*'
    },
  });

  return instance
    .delete(url, { data: payload })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      if (
        error.response &&
        error.response.status &&
        error.response.status === 401
      ) {
        toast.error("Session expired");
        if (typeof window != "undefined") {
          signOut();
        }
      } else if (
        error.response &&
        error.response.status &&
        (error.response.status < 200 || error.response.status >= 300)
      ) {
        toast.error(
          error.response.data || "Something went wrong please try again!"
        );
      } else {
        toast.error(
          customErrorMessage || "Something went wrong please try again!"
        );
      }
    });
};

export const fetcher = (url) =>
  fetch(url).then(async (res) => {
    const result = await res.json();
    if (res.status !== 200) {
      return Promise.reject(result);
    } else {
      return result;
    }
  });

export const postBARequest = async (
  url,
  requestBody,
  apiKey = null,
  customErrorMessage = null
) => {
  const session = await getSession();
  var token;
  //   accessToken
  //     ? (token = accessToken)
  //     : (token = session ? session.accessToken : null);

  const instance = axios.create({
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
    headers: {
      Authorization: `Basic ${btoa(apiKey + ":")}`,
      //   ApplicationId: parseInt(process.env.appId),
    },
  });

  return instance
    .post(url, requestBody)
    .then(function (response) {
      if (response.status === 401) {
        toast.error("Session expired");
        if (typeof window != "undefined") {
          signOut();
        }
      } else {
        return response.data;
      }
    })
    .catch((error) => {
      if (
        error.response &&
        error.response.status &&
        error.response.status === 401
      ) {
        toast.error("Session expired");
        if (typeof window != "undefined") {
          signOut();
        }
      } else if (
        error.response &&
        error.response.status &&
        (error.response.status < 200 || error.response.status >= 300)
      ) {
        toast.error(
          error.response.data || "Something went wrong please try again!"
        );
      } else {
        toast.error(
          customErrorMessage || "Something went wrong please try again!"
        );
      }
    });
};
