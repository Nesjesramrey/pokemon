import { useEffect, useState } from "react";
import { list as listUsers } from "../../../services/characters";
import { useNavigate } from "react-router-dom";

export default function ProfileList() {
  // Local state
  const [users, setUsers] = useState([]);

  // RRD
  const navigate = useNavigate();

  useEffect(() => {
    const list = async () => {
      const data = await listUsers();
      const parsedUsers = Object.keys(data).map((key) => {
        return { id: key, ...data[key] };
      });

      setUsers(parsedUsers);
    };

    list();
  }, []);

  const buildUsers = (user, index) => (
    <div key={index}>
      <p>
        {user.name} {user.url}
      </p>

      <button onClick={() => navigate(user.id)}>Detalle</button>
    </div>
  );

  console.log(users);

  return (
    <div>
      <h2>List</h2>
      {users.map(buildUsers)}
    </div>
  );
}
