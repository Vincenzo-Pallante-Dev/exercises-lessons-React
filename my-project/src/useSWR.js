import useSWR from "swr";

export function useSwr() {
  const { data, error } = useSWR(`https://api.github.com/users`);
  return {
    users: data,
    error,
  };
}
