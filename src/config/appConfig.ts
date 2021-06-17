interface AppConfig {
  port: string | number,
  clientUrl: string,
}

export const appConfig: AppConfig = {
  port: process.env.PORT || 4000,
  clientUrl: process.env.CLIENT_URL || "http://localhost:3000"
};