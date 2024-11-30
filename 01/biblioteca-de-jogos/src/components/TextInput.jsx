export default function TextInput({ label, value, setValue }){
    return (
        <div>
            <label htmlFor="title">{label}</label>
            <input
                type="text"
                name="title"
                id="title"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    )
}