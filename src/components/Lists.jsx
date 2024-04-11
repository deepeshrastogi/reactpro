import List from "./List";
export default function Lists({ lists }) {
  return (
    <ul>
      {lists.map((list) => (
        <List
          name={list.name}
          email={list.email}
          key={list.email}
          age={list.age}
        />
      ))}
    </ul>
  );
}
