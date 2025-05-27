export const UserCard = ({ picture, name, email, location }) => {
  return (
    <article className="userCard">
      <img
        src={picture.large}
        title={`${name.first} ${name.last}`}
        alt={`${name.first} ${name.last}`}
      />
      <div className="userInfo">
        <h3>{`${name.first} ${name.last}`}</h3>
        <p>{email}</p>
        <p>{`${location.city}, ${location.country}`}</p>
      </div>
    </article>
  );
};
