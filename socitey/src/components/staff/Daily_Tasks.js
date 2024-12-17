import Resact from 'react';
import { useState } from 'react';
import '../staff/css/daily_tasks.css';

export default function Daily_Tasks() {
    const [tasks, setTasks] = useState([
        { id: 1, task: 'Inspect common area cleanliness', completed: false },
        { id: 2, task: 'Verify visitor logs', completed: false },
        { id: 3, task: 'Check inventory levels', completed: true },
      ]);
    
      const [newTask, setNewTask] = useState('');
    
      // Toggle the completion status of a task
      const toggleTaskCompletion = (taskId) => {
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
          )
        );
      };
    
      // Add a new task to the list
      const handleAddTask = () => {
        if (newTask.trim() !== '') {
          setTasks([
            ...tasks,
            { id: tasks.length + 1, task: newTask, completed: false },
          ]);
          setNewTask('');
        }
      };
    
      // Remove a task from the list
      const handleRemoveTask = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
      };
    
      return (
        <div className="daily-tasks">
          <h2>Daily Tasks</h2>
    
          {/* Task List */}
          <table className="tasks-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Task</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr key={task.id}>
                  <td>{index + 1}</td>
                  <td>{task.task}</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTaskCompletion(task.id)}
                    />
                    {task.completed ? ' Completed' : ' Pending'}
                  </td>
                  <td>
                    <button
                      className="btn-remove"
                      onClick={() => handleRemoveTask(task.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
    
          {/* Add New Task */}
          <div className="add-task">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Enter a new task"
            />
            <button className="btn-add" onClick={handleAddTask}>
              Add Task
            </button>
          </div>
        </div>
      );
}