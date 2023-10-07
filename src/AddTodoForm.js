export default function AddTodoForm({
  // passing the todo as a prop
  todo,
  // notice the name change of the function handleAddFormSubmit to onAddFormSubmit
  onAddFormSubmit,
  // notice the name change of the function handleAddInputChange to onAddInputChange
  onAddInputChange,
}) {
  return (
    <form onSubmit={onAddFormSubmit}>
      <h2>Add Todo</h2>
      <label htmlFor="todo">Create todo: </label>
      <input
        name="todo"
        type="text"
        placeholder="Create new todo"
        value={todo}
        onChange={onAddInputChange}
      />
      <button onSubmit={onAddFormSubmit}>Add</button>
    </form>
  );
}
