import { useSwr } from "./useSWR";

export function Swr() {
  const { users, error } = useSwr();
  return (
    <div>
      {error && <h3>An error has occured</h3>}
      {users && (
        <ul>
          {users.map((user) => (
            <li key={user.login}>{user.login}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
