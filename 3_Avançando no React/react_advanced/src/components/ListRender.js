import {useState} from 'react';

const ListRender = () => {
    const [list] = useState(['Mateus', 'Pedro', 'Lisa','Luana']);
  return (
    <div>
        <ul>
            {list.map((item) => (
                <li>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default ListRender