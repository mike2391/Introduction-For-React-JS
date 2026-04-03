import { useImmer } from "use-immer";

const initialData = {
  name: "",
  message: "",
};

export default function App() {
  const [contact, setContact] = useImmer(initialData);
  return (
    <>
      <h1>Contact Form</h1>
      {/* you can use "draft" or change it to another different name | most developer use "draft" for immer variable name */}
      <input type="text" placeholder="Name" onChange={(e) => setContact((draft) => {draft.name = e.target.value; })}value={contact.name}/>
      <br />
      <input type="text" placeholder="Message" onChange={(e) => setContact((prev) => {prev.message = e.target.value; })} value={contact.message} />

      <h1>Contact Information</h1>
      <p>Name: {contact.name}</p>
      <p>Message: {contact.message}</p>
    </>
  );
}
