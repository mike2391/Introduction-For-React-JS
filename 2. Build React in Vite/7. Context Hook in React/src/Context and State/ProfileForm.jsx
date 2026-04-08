export default function ProfileForm({ name, setName }) {
    return (
        <>
            <h2>Profile Form</h2>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </>
    )
}