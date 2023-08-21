import { ChangeEvent, useState } from "react"
import useSync from "../hooks/useSync";

type FormDataType = {
    name: string, age: number | undefined
}

const SyncPage = () => {

    const [formData, setFormData] = useState<FormDataType>({
        name: "",
        age: undefined
    });

    const [setShouldSync] = useSync<FormDataType>(formData, "https://syncurl.com");

    const onFormDataChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        setFormData((prevData) => {
            return {
                ...prevData,
                [target.name]: target.value
            }
        })
    }

    const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setShouldSync(false);

    }

    return <div>
        <h1>Sync Page</h1>
        <form onSubmit={(event) => onFormSubmit(event)}>
            <input name="name" value={formData.name} onChange={(event) => onFormDataChange(event)} />
            <input name="age" value={formData.age} onChange={(event) => onFormDataChange(event)} />
            <input type="submit" value={"Submit"}/>
        </form>
        <h2>Name: {formData.name}</h2>
        <h2>Age: {formData.age}</h2>
        <button onClick={() => setShouldSync(true)}>Edit</button>
    </div>
}

export default SyncPage;