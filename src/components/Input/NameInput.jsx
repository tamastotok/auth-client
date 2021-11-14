import person_black_24dp from "../../assets/person_black_24dp.svg";

export default function NameInput() {
  return (
    <div className="input-container">
      <img src={person_black_24dp} alt="mail-icon" />
      <input type="text" name="name" placeholder="Name" required />
    </div>
  );
}
