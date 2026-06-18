export default function Note({ note, toggleImportance }) {
  const label = note.important ? "make not important" : "make impotant";

  return (
    <li className="note">
      {note.content}
      <button onClick={toggleImportance}>{label}</button>
    </li>
  );
}
