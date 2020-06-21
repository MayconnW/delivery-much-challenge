import { giphyApi } from './api';

interface IApiResponse {
  data: {
    embed_url: string;
  };
}

export default async (tag: string): Promise<string> => {
  const {
    data: { data },
  } = await giphyApi.get<IApiResponse>(`/gifs/random?tag=${tag}&rating=g`);

  return data.embed_url;
};
