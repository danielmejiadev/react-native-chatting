// Dependencies
import React from 'react';

/**
 * Type definition for async callback.
 */
type CallbackAsync = (...args: never[]) => Promise<unknown>;

/**
 * Override a callback with some extra properties.
 * @param callback The callback to override
 * @returns The callback with extra params.
 */
export function useAsyncCallback<T extends CallbackAsync>(callback: T): [T, boolean, unknown] {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState(undefined);
  const asyncCallback = React.useCallback((...args: never[]) => {
    setLoading(true);
    return callback(...args)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [callback]);

  return [asyncCallback as T, loading, error];
}

export default useAsyncCallback;
