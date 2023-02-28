import {useState} from 'react';

const ListRender = () => {
    const [list] = useState(['Mateus', 'Pedro', 'Lisa','Luana']);

    const [users, setUsers] = useState([
      {id:1, name:'Mateus', age:31}, 
      {id:2, name:'Pedro', age:26},
      {id:3, name:'Luana', age:29},  
    ]);

    const deleteRandom = () =>{
      const randomNumber = Math.floor(Math.random() * 4);

      setUsers((prevUsers) => {
        return prevUsers.filter((user) => randomNumber !== user.id);

        });
    };

  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.id} - {user.name} - {user.age}
            </li>
          ))}
        </ul>

        <button onCLick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender