// eslint-disable-next-line
import react, { useState} from 'react';
// eslint-disable-next-line
import Button from '../../components/Button'
import './styles.css';

const Main = () => {
    const [inputValue, setInputValue] = useState("");
    const [todoList, setTodoList] = useState<string[]>([]);

const handleAddClick = () => {
setTodoList([...todoList, inputValue]);
setInputValue('');
};

const handleClear = () => {
    setTodoList ([])
}


    return (
        <div className="container">
            <h1 className="title">Todo app</h1>
            <div className="form-group">
                <input
                 className="todo-input"
                  type="text" 
                placeholder="Adicione sua nova tarefa"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)} 
                />
                 <button onClick={handleAddClick} className="btn-add">+</button>
                 </div>
                 <div className="todo-list">
                     <ul>
                         {todoList.map((todo) => (
                             <li className="list-item">{todo}</li>
                         ))}
                     </ul>
                     </div>
                     <div className="todo-footer">
                     Você {todoList.length} tarefas pendentes
                     <button onClick ={handleClear}>Limpar tudo</button>
                     </div>
                
            </div>
    );
}

export default Main;