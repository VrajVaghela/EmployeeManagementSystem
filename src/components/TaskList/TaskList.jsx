import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = ({data}) => {
    return ( 
        <div id="tasklist" className='h-[55%] w-full overflow-auto flex items-center justify-start gap-5 flex-nowrap py-5 mt-10'>
           {data.tasks.map((elem)=>{
                if(elem.active){
                    return <AcceptTask key={elem.taskId} data={elem}/>
                }
                if(elem.newTask){
                    return <NewTask key={elem.taskId} data={elem}/>
                }
                if(elem.completed){
                    return <CompleteTask key={elem.taskId} data={elem}/>
                }
                if(elem.failed){
                    return <FailedTask key={elem.taskId} data={elem}/>
                }
                return null;
           })}
        </div>
     );
}
 
export default TaskList;