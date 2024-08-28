declare module 'unlimited-ai' {
  export function generate(
    model: string,
    messages: object,
    raw?: boolean
  ): Promise<string | any>;

  export const models: string[];

  export function allModels(): Promise<string[]>;

  export const config: {
    API_URL: string;
    MODELS_URL: string;
    [key: string]: any;
  };
}
