import { useState, FC, ChangeEvent } from 'react';

interface AddTodoFormProps {
  onAdd: (text: string) => void;
}

const AddTodoForm: FC<AddTodoFormProps> = ({ onAdd }) => {
  const [newTodo, setNewTodo] = useState<string>('');

  const handleAddClick = () => {
    onAdd(newTodo);
    setNewTodo('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="New todo"
        value={newTodo}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setNewTodo(e.target.value)
        }
      />
      <button onClick={handleAddClick}>Add</button>
    </div>
  );
};

export default AddTodoForm;
