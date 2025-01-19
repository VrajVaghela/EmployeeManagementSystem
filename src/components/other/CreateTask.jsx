import React, { useContext, useState } from 'react';
import EmployeeDashboard from '../Dashboard/EmployeeDashboard';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [asignTo, setAsignTo] = useState('');
    const [Category, setCategory] = useState('')
    const { employees, setEmployees } = useContext(AuthContext);

    const submitHandler = (e) => {
        e.preventDefault();
        
        // const data = JSON.parse(localStorage.getItem('employees'));

        const newTask = {
            taskId: Date.now(), // Unique timestamp as ID
            title : taskTitle,
            description: taskDescription,
            date: taskDate,
            category: Category,
            active: false,
            newTask: true,
            failed: false,
            completed: false
        };

        // const updatedData = data.map(element => {
        //     if(element.firstname === asignTo){
        //         // Add new task to tasks array
        //         element.tasks = [...element.tasks, newTask];
                
        //         // Update task numbers
        //         element.taskNumbers = {
        //             ...element.taskNumbers,
        //             newTask: (element.taskNumbers.newTask || 0) + 1,
        //             total: (element.taskNumbers.total || 0) + 1
        //         };
        //     }
        //     return element;
        // });

           
        const updatedEmployees = employees.map(employee => {
            if (employee.firstname === asignTo) {
                return {
                    ...employee,
                    tasks: [...employee.tasks, newTask],
                    taskNumbers: {
                        ...employee.taskNumbers,
                        newTask: (employee.taskNumbers?.newTask || 0) + 1,
                        total: (employee.taskNumbers?.total || 0) + 1
                    }
                };
            }
            return employee;
        });

        
        setEmployees(updatedEmployees);

        setTaskTitle('');
        setTaskDate('');
        setAsignTo('');
        setCategory('');
        setTaskDescription('');
        // localStorage.setItem('employees', JSON.stringify(updatedData));


        
    }
    return (
        <div className='p-5 bg-[#1c1c1c] rounded mt-7'>
        <form onSubmit={submitHandler} className='flex flex-wrap w-full items-start justify-between' >
            <div className='w-1/2'>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                    <input
                        value={taskTitle}
                        onChange={(e)=>{
                            setTaskTitle(e.target.value);
                        }}
                    className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Enter Title' />
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                    <input
                    value={taskDate}
                    onChange={(e) => {
                        setTaskDate(e.target.value);
                    }}
                     className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                    <input
                    value={asignTo}
                    onChange={(e) => {
                        setAsignTo(e.target.value);
                    }}
                    className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Employee Name' />
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                    <input
                    value={Category}
                    onChange={(e) => {
                        setCategory(e.target.value);
                    }}
                    className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Job Type' />
                </div>
            </div>
            <div className='w-2/5'>
                <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                <textarea
                value={taskDescription}
                onChange={(e) => {
                    setTaskDescription(e.target.value);
                }}
                className='text-sm h-44 py-2 px-4 w-full rounded outline-none bg-transparent border-[1px] border-gray-400 ' cols="30" rows="10"></textarea>
                <button className='bg-emerald-500 py-3 hover:bg-emeral-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
            </div>


            
        </form>
    </div>
    );
};

export default CreateTask;