import { ApiResponse } from './types';

const endpoint = 'https://rickandmortyapi.com/graphql';
export const getData = ({ input }: { input: string }): Promise<ApiResponse> =>
  fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      query {
        characters(filter: { name: "${input}" }) {
          results {
            name
            image
            episode {
              id
            }
          }
        }
      }`,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error('Error:', error);
      throw error;
    });
