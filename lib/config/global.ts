interface GlobalEnv {
  WECHAT_APPID: string;
  WECHAT_SECRET: string;
  WECHAT_TEMPLATE_ID: string;
  WECHAT_TOUSER: string;
}

const {
  WECHAT_APPID,
  WECHAT_SECRET,
  WECHAT_TEMPLATE_ID,
  WECHAT_TOUSER
} = process.env as unknown as GlobalEnv;

export {
  WECHAT_APPID,
  WECHAT_TEMPLATE_ID,
  WECHAT_SECRET,
  WECHAT_TOUSER
}