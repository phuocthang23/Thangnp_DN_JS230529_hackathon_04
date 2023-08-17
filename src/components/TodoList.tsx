import React, { useState } from "react";

interface TodoItem {
  id: number;
  todo: string;
  status: boolean;
}

function TodoList() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState<TodoItem[]>([]);

  const inputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      const newTaskItem: TodoItem = {
        id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : tasks.length,
        todo: newTask,
        status: false,
      };
      setTasks([...tasks, newTaskItem]);
      setNewTask(""); // Reset the input
    }
  };

  const toggleComplete = (id: number) => {
    const updatedTasks = tasks.map((task) => (task.id === id ? { ...task, status: !task.status } : task));
    setTasks(updatedTasks);
  };

  const deleteItem = (id: number) => {
    console.log(id);
    const deletedTasks = tasks.filter((task) => task.id !== id);
    setTasks(deletedTasks);
  };

  return (
    <div className="wrapper">
      <header className="container">
        <h1>Todo List</h1>
        <p>Get things done, one item at a time</p>
        <div className="hr"></div>
      </header>
      <main>
        {tasks.map((item) => (
          <div className="wrapper-item" key={item.id}>
            <div className="item container">
              <p className={item.status ? "done-task" : ""}>{item.todo}</p>
              <div className="action">
                <input
                  type="checkbox"
                  className="done"
                  checked={item.status}
                  onChange={() => toggleComplete(item.id)}
                />
                <button onClick={() => deleteItem(item.id)}>
                  <i className="bx bx-trash"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </main>
      <footer className="container">
        <p>Add to the todo list </p>
        <div className="add">
          <input type="text" placeholder="Add your list to do ...." value={newTask} onChange={inputValue} />
          <button onClick={addTask}>ADD NOW</button>
        </div>
      </footer>
    </div>
  );
}

export default TodoList;
