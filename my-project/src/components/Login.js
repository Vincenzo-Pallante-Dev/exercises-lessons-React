import { useEffect, useRef, useState } from "react";

export function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleChangeInput(event) {
    const { name, value } = event.target;

    setData((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  }

  function handleSubmit() {
    console.log(data);
  }

  return (
    <div>
      <input
        name="username"
        value={data.username}
        onChange={handleChangeInput}
        placeholder="Username"
        ref={inputRef}
      />
      <input
        name="password"
        type="password"
        value={data.password}
        onChange={handleChangeInput}
        placeholder="Password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
