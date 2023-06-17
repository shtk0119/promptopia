declare namespace NodeJS {
   // 環境変数名の定義
   interface ProcessEnv {
    /** 現在の Node.js 実行環境 */
    readonly NODE_ENV: 'development' | 'production' | 'test';

    /** Google CLIENT ID */
    readonly GOOGLE_ID: string;
    /** Google CLIENT SECRET ID */
    readonly GOOGLE_CLIENT_SECRET: string;

    /** MongoDB_URI */
    readonly MONGODB_URI: string;
  }
}