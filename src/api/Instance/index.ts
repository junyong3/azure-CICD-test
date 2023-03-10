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
    console.log("π¬", config);

    // μμ²­μ λ³΄λ΄κΈ° μ μ μνν  μΌ
    // ...
    return config;
  },
  function (error) {
    // μ€λ₯ μμ²­μ λ³΄λ΄κΈ°μ  μνν  μΌ
    // ...
    return Promise.reject(error);
  },
);

// μλ΅ μΈν°μν° μΆκ°
Instance.instance.interceptors.response.use(
  function (response) {
    console.log("π", response);
    // μλ΅ λ°μ΄ν°λ₯Ό κ°κ³΅
    // ...
    return response;
  },
  function (error) {
    // μ€λ₯ μλ΅μ μ²λ¦¬
    // ...
    return Promise.reject(error);
  },
);
