import './App.css';

const Pr1 = () => {  
    const data = [
        {name: 'ash', age: 25, gender: 'male', type: 'electric', number: 50, use: 45},
        {name: 'serena', age: 25, gender: 'female', type: 'fire', number:50, use: 34},
        {name: 'iris', age: 28, gender: 'female', type: 'steel', number: 50, use: 26},
        {name: 'brock', age: 30, gender: 'male', type: 'rock', number: 50, use: 32},
        {name: 'dawn', age: 25, gender: 'female', type: 'water', number:50, use: 19},
        {name: 'clemont', age: 23, gender: 'male', type: 'electric', number: 50, use: 29},
        {name: 'may', age: 27, gender: 'female', type: 'fire', number:50, use: 15},
        {name: 'cilan', age: 30, gender: 'male', type: 'grass', number:50, use: 18},
        {name: 'misty', age: 30, gender: 'female', type: 'water', number: 50, use: 10},
        {name: 'cynthia', age: 30, gender: 'female', type: 'ground', number: 50, use: 38},
    ];

    const total = data.reduce((acc, curr) =>{
        return acc + curr.use
    },0)

    const remain_total = data.reduce((acc, curr) =>{
        return acc + (curr.number - curr.use)
    },0)
  return (
    <div className="App">
        <h1>Fictional Characters</h1>
        <div className='main'>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Type</th>
                        <th>Number</th>
                        <th>Use</th>
                        <th>Remaining</th>
                    </tr>
                </thead>
                <tbody>
                    {data.filter((i) => i.age >10 && i.use >=10 ).map((i,index)=>(
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{i?.name}</td>
                            <td>{i?.age}</td>
                            <td>{i?.gender}</td>
                            <td>{i?.type}</td>
                            <td>{i?.number}</td>
                            <td>{i?.use}</td>
                            <td>{i?.number - i?.use}</td>
                        </tr>
                    ))}
                    <tr>
                        <td>Total</td>
                        <td colSpan={5}></td>
                        <td>{total}</td>
                        <td>{remain_total}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  );
}

export default Pr1;
