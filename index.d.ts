declare module 'unlimited-ai' {
  export function generate(
    model: string,
    messages: object,
    raw?: boolean
  ): Promise<string | object>;

  export function models(): Promise<string[]>;

  export function allModels(): Promise<string[]>;

  export function searchModels(word: string, all?: boolean): Promise<string[]>;

  export const config: {
    API_URL: string;
    MODELS_URL: string;
    AVAILABLE_MODELS_URL: string;
    [key: string]: any;
  };
}
