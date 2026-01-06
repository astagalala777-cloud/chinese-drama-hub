const PROXY_URL = "https://api.codetabs.com/v1/proxy?quest=";
const BASE_URL = "https://dramabox.sansekai.my.id/api/dramabox";

export interface Drama {
  bookId: string;
  bookName: string;
  coverWap: string;
  introduction: string;
  playCount: string;
  tags: string[];
  totalChapterNum: number;
}

export interface Episode {
  chapterId: string;
  chapterName: string;
  videoPath: string;
  cdnList: string[];
}

export type Category = "trending" | "foryou" | "latest" | "randomdrama";

export const fetchDramas = async (category: Category): Promise<Drama[]> => {
  const response = await fetch(`${PROXY_URL}${BASE_URL}/${category}`);
  if (!response.ok) {
    throw new Error("Gagal memuat data drama");
  }
  return response.json();
};

export const fetchEpisodes = async (bookId: string): Promise<Episode[]> => {
  const response = await fetch(`${PROXY_URL}${BASE_URL}/allepisode?bookId=${bookId}`);
  if (!response.ok) {
    throw new Error("Gagal memuat episode");
  }
  return response.json();
};

export const searchDramas = async (query: string): Promise<Drama[]> => {
  const response = await fetch(`${PROXY_URL}${BASE_URL}/search?query=${encodeURIComponent(query)}`);
  if (!response.ok) {
    throw new Error("Gagal mencari drama");
  }
  return response.json();
};
