import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <button className='createTask'><b>Create Task</b></button>
      <h1 className='title'>Tasks</h1>
      <table>
        <tr className='titleTask'>
          <td>Id</td>
          <td>Title</td>
          <td>Description</td>
          <td>Actions</td>
        </tr>
        <tr className='createSubTask'>
          <td>1</td>
          <td>Create an example</td>
          <td>Create an example of how to use the component</td>
          <td>
            <button className='update'>Update</button> <br/>
            <button className='delete'>Delete</button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default App;
