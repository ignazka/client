import React from 'react';

export function useFetch(handler, dev = []) {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  async function call() {
    try {
      const { data } = await handler();
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }
  React.useEffect(() => {
    call();
  }, dev);

  return {
    data,
    loading,
    error,
  };
}
