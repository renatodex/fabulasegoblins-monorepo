import { useState } from 'react';

export default function useCharacterUpdate({ code, token }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const updateCharacter = async (resource, params) => {
    if (!code) {
      setError("No character code provided");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(`/api/characters/${resource.code}/update`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(params)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Error updating character');
      }

      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    data,
    error,
    isLoading,
    updateCharacter, // Return the function to perform the update
  };
}
