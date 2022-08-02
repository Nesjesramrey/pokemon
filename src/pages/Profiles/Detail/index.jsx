import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { retrieve as retrieveUser } from "../../../services/characters";

// CSS
import "./Detail.css";

export default function ProfileDetail() {
  // Local state
  const [user, setUser] = useState(null);

  // RRD
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const data = await retrieveUser(id);
      setUser(data);
    };

    getUser();
  }, [id]);

  console.log(id);

  return (
    <div>
      <h2>Detail</h2>
      {!user ? (
        <p>Loading</p>
      ) : (
        <div>
          <img alt="profile" src={user.photoURL} />
          <p>
            {user.firstName} {user.lastName}
          </p>
          <p>{user.email}</p>
          <p>{user.birthdate}</p>
          <button onClick={() => navigate(-1)}>Regresar</button>
        </div>
      )}
    </div>
  );
}
