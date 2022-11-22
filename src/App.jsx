import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  const firstContacts = contacts.slice(0, 4);
  const [contactsArray, setContacts] = useState(firstContacts);

  const handleAddRandomContact = () => {
    const copy = [...contactsArray];
    let randomAdd = contacts.filter((contact) => copy.indexOf(contact) === -1);
    randomAdd = randomAdd[Math.floor(Math.random() * (randomAdd.length - 1))];
    copy.push(randomAdd);
    setContacts(copy);
  };

  const handleSortByName = () => {
    const copy = [...contactsArray];
    copy.sort((a, b) => a.name.localeCompare(b.name));
    setContacts(copy);
  };

  const handleSortByPopularity = () => {
    const copy = [...contactsArray];
    copy.sort((a, b) => b.popularity - a.popularity);
    setContacts(copy);
  };

  const handleDeleteOne = (name) => {
    setContacts(contactsArray.filter((contact) => contact.name !== name));
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div className="buttons">
        <button onClick={handleAddRandomContact}>Add random contact</button>
        <button onClick={handleSortByName}>Sort by name</button>
        <button onClick={handleSortByPopularity}>Sort by popularity</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contactsArray.map((contact) => {
            return (
              <tr key={contact.name}>
                <td>
                  <img
                    src={contact.pictureUrl}
                    alt=""
                    style={{ height: "100px" }}
                  />
                </td>
                <td>
                  <strong>{contact.name}</strong>
                </td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td className="award">{contact.wonOscar && "🏆"}</td>
                <td className="award">{contact.wonEmmy && "🌟"}</td>
                <td>
                  <button
                    onClick={() => handleDeleteOne(contact.name)}
                    className="delete-btn"
                  >
                    &#128465;
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
