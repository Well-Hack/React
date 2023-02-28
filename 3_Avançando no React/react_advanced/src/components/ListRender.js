import {useState} from 'react';

const ListRender = () => {
    const [list] = useState(['Mateus', 'Pedro', 'Lisa','Luana']);

    const [users] = useState([
      {id:1, name:'Mateus', age:31}, 
      {id:454844, name:'Pedro', age:26},
      {id:254874, name:'Luana', age:29},  
    ]);

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
    </div>
  )
}

export default ListRender