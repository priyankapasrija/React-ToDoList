// notice we are destructuring the props here. You could change this to
// bring in props instead and then just add `props.` to todo, onEditClick and onDeleteClick:
// export default function TodoItem(props)
export default function TodoItem({
  // passing the todo as a prop
  todo,
  // notice the name change of the function handleEditClick to onEditClick
  //   onEditClick,
  onHandleEditClick,
  // notice the name change of the function handleDeleteClick to onDeleteClick
  //   onDeleteClick,
  onHandleDeleteClick,
}) {
  return (
    // using the li element as the parent
    <li key={todo.id}>
      {todo.text}
      <button onClick={() => onHandleEditClick(todo)}>Edit</button>
      <button onClick={() => onHandleDeleteClick(todo.id)}>Delete</button>
    </li>
  );
}
