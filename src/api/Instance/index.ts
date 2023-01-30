import qs from "qs";
import axios, { AxiosRequestConfig } from "axios";

export default class Instance {
  // Api servers
  static instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      "User-Agent": "Android",
    },
    paramsSerializer: {
      // encode: ,
      serialize: (paramObj) => {
        return qs.stringify(paramObj, { arrayFormat: "brackets" });
      },
    },
  });

  public static async get<ReqParam>(key: string, params?: ReqParam) {
    const { data: res } = await this.instance.get(key, {
      params,
    });
    return res;
  }

  public static async post<ReqParam>(
    key: string,
    params: ReqParam,
    config?: AxiosRequestConfig,
  ) {
    const { data: res } = await this.instance.post(key, params, config);
    return res;
  }

  public static async put<ReqParam>(key: string, params: ReqParam) {
    const { data: res } = await this.instance.put(key, params);
    return res;
  }

  public static async patch<ReqParam>(key: string, params: ReqParam) {
    const { data: res } = await this.instance.patch(key, params);
    return res;
  }

  public static async delete<ReqParam>(key: string, params?: ReqParam) {
    const { data: res } = await this.instance.delete(key, { params });
    return res;
  }

  // public static setAccessToken(token: string) {
  //   this.instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  // }

  // public static setRefreshToken(token: string) {
  //   setItem(LocalStorageKey.REFRESH_TOKEN, token)
  // }
  // public static storybookTokenInject() {
  //   Instance.setAccessToken(import.meta.env.VITE_STORYBOOK_TOKEN)
  // }
}
Instance.instance.defaults.params = {
  _format: "json",
};

Instance.instance.interceptors.request.use(
  function (config) {
    console.log("🍬", config);

    // 요청을 보내기 전에 수행할 일
    // ...
    return config;
  },
  function (error) {
    // 오류 요청을 보내기전 수행할 일
    // ...
    return Promise.reject(error);
  },
);

// 응답 인터셉터 추가
Instance.instance.interceptors.response.use(
  function (response) {
    console.log("🚀", response);
    // 응답 데이터를 가공
    // ...
    return response;
  },
  function (error) {
    // 오류 응답을 처리
    // ...
    return Promise.reject(error);
  },
);
