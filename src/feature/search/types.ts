export interface GraphQLResponse<T> {
  data: T;
}

// TypeScript type/interface for an episode
export interface Episode {
  id: string;
}

export interface CharacterResult {
  name: string;
  image: string;
  episode: Episode[];
}

export interface ApiResponse {
  data?: {
    characters: {
      results: CharacterResult[];
    };
  };
}

export interface Opt {
  value: string | undefined;
  label: string;
  name: string;
  image: string;
  episodeLength: number;
}
