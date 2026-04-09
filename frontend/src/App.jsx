import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API_URL);
      setTasks(res.data);
      setError(null);
    } catch (err) {
      setError("Backend connection failed.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchTasks(); }, []);

  const addTask = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    try {
      const res = await axios.post(API_URL, { title });
      setTasks([...tasks, res.data]);
      setTitle('');
    } catch (err) {
      setError("Could not add task.");
    }
  };

  const toggleComplete = async (id) => {
    try {
      const res = await axios.patch(`${API_URL}/${id}`);
      setTasks(tasks.map(t => t.id === id ? res.data : t));
    } catch (err) {
      setError("Update failed.");
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTasks(tasks.filter(t => t.id !== id));
    } catch (err) {
      setError("Delete failed.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.header}>Task Manager</h1>
        
        <form onSubmit={addTask} style={styles.form}>
          <input 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            placeholder="What needs to be done?"
            style={styles.input}
          />
          <button type="submit" style={styles.addButton}>Add Task</button>
        </form>

        {error && <div style={styles.error}>{error}</div>}

        {loading ? <p style={styles.status}>Loading tasks...</p> : (
          <div style={styles.list}>
            {tasks.length === 0 && <p style={styles.status}>No tasks yet. Add one!</p>}
            {tasks.map(task => (
              <div key={task.id} style={styles.taskItem}>
                <span style={{
                  ...styles.taskText,
                  textDecoration: task.completed ? 'line-through' : 'none',
                  color: task.completed ? '#888' : '#fff'
                }}>
                  {task.title}
                </span>
                <div style={styles.actions}>
                  <button 
                    onClick={() => toggleComplete(task.id)} 
                    style={{...styles.btn, backgroundColor: task.completed ? '#4a5568' : '#38a169'}}
                  >
                    {task.completed ? 'Undo' : 'Done'}
                  </button>
                  <button 
                    onClick={() => deleteTask(task.id)} 
                    style={{...styles.btn, backgroundColor: '#e53e3e'}}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// Modern Dark UI Styles
const styles = {
  container: {
    backgroundColor: '#1a202c',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#fff'
  },
  card: {
    backgroundColor: '#2d3748',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
    width: '100%',
    maxWidth: '450px'
  },
  header: {
    textAlign: 'center',
    marginBottom: '1.5rem',
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#63b3ed'
  },
  form: {
    display: 'flex',
    gap: '10px',
    marginBottom: '1.5rem'
  },
  input: {
    flex: 1,
    padding: '12px',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#4a5568',
    color: '#fff',
    outline: 'none'
  },
  addButton: {
    padding: '12px 20px',
    backgroundColor: '#4299e1',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: '0.3s'
  },
  taskItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px',
    backgroundColor: '#384152',
    borderRadius: '8px',
    marginBottom: '10px',
    transition: '0.2s'
  },
  taskText: {
    fontSize: '1rem',
    maxWidth: '60%',
    wordBreak: 'break-all'
  },
  actions: {
    display: 'flex',
    gap: '8px'
  },
  btn: {
    padding: '6px 12px',
    border: 'none',
    borderRadius: '4px',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '0.85rem'
  },
  error: {
    color: '#feb2b2',
    fontSize: '0.9rem',
    marginBottom: '1rem',
    textAlign: 'center'
  },
  status: {
    textAlign: 'center',
    color: '#a0aec0'
  }
};

export default App;