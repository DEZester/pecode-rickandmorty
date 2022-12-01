const MyEpisodesItem = ({
  text,
  handleDeleteClick,
  id,
  toggleComplete,
  isChecked,
}) => {
  const activeItem = isChecked
    ? "myEpisodes__todo-item myEpisodes__todo-item_active"
    : "myEpisodes__todo-item";
  return (
    <li className={activeItem}>
      <input
        type="checkbox"
        className="myEpisodes__todo-checkbox"
        checked={isChecked}
        onChange={() => toggleComplete(id)}
      />
      <span className="myEpisodes__todo-text">{text}</span>
      <button
        className="myEpisodes__todo-delete-btn"
        onClick={() => handleDeleteClick(id)}
      ></button>
    </li>
  );
};

export default MyEpisodesItem;
