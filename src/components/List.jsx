export default function list({ name, email, key, age }) {
  return (
    <>
      {age > 2 ? (
        <li key={key}>
          {name} - {email} - {age}
        </li>
      ) : (
        ""
      )}
    </>
  );
}
