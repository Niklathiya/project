import React from 'react'

const Exam1 = () => {

    const students = [
        { id: 1, name: 'John', age: 21, grade: 'A', gender: 'Male' },
        { id: 2, name: 'Jane', age: 20, grade: 'B', gender: 'Female' },
        { id: 3, name: 'Bob', age: 22, grade: 'C', gender: 'Male' },
        { id: 4, name: 'Sara', age: 19, grade: 'A', gender: 'Female' },
        { id: 5, name: 'Tom', age: 21, grade: 'B', gender: 'Male' },
        { id: 6, name: 'Ava', age: 20, grade: 'A', gender: 'Female' },
        { id: 7, name: 'Mike', age: 22, grade: 'C', gender: 'Male' },
        { id: 8, name: 'Emily', age: 19, grade: 'B', gender: 'Female' },
        { id: 9, name: 'David', age: 21, grade: 'A', gender: 'Male' },
        { id: 10, name: 'Rachel', age: 20, grade: 'B', gender: 'Female' },
        { id: 11, name: 'Chris', age: 22, grade: 'C', gender: 'Male' },
        { id: 12, name: 'Lily', age: 19, grade: 'A', gender: 'Female' },
        { id: 13, name: 'Mark', age: 21, grade: 'B', gender: 'Male' },
        { id: 14, name: 'Sophie', age: 20, grade: 'A', gender: 'Female' },
        { id: 15, name: 'Tim', age: 22, grade: 'C', gender: 'Male' },
        { id: 16, name: 'Anna', age: 19, grade: 'B', gender: 'Female' },
        { id: 17, name: 'Jack', age: 21, grade: 'A', gender: 'Male' },
        { id: 18, name: 'Olivia', age: 20, grade: 'B', gender: 'Female' },
        { id: 19, name: 'Kevin', age: 22, grade: 'C', gender: 'Male' },
        { id: 20, name: 'Mia', age: 19, grade: 'A', gender: 'Female' }
    ];


    const total_age = students.reduce((acc, curr) =>{
        return acc + curr.age
    },0) 
    const avg = students.reduce((acc, curr) =>{
        return acc + curr.age/20
    },0) 

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Grade</th>
                        <th>Gender</th>
                    </tr>
                </thead>

                <tbody>
                    {students.filter((i) => i.gender == 'Female').map((i, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{i?.name}</td>
                            <td>{i?.age}</td>
                            <td>{i?.grade}</td>
                            <td>{i?.gender}</td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan={2}>Total age</td>
                        <td>{total_age}</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>Avg. age</td>
                        <td>{avg}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Exam1
