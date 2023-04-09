import { useState } from "react"

const UseStateArrayPrimitiveExample = () => {

    const [company, setCompany] = useState<string>("");
    const [companies, setCompanies] = useState<string[]>([]);

    const onCompanyAdd = () => {
        setCompanies((prevCompanies) => {
            const updatedCompanies = [...prevCompanies, company];
            return updatedCompanies;
        });
        setCompany("");
    }

    return (
        <div>
            <div>
                <h2>Using Array primitive</h2>
                <h3>Top companies</h3>
                <ol>
                    {
                        companies.map((company, index) => {
                            return (<li key={company + index}>{company}</li>)
                        })
                    }
                </ol>
                <input value={company} onChange={(event) => { setCompany(event.target.value); setCompany(event.target.value); setCompany(event.target.value) }} />
                <button onClick={onCompanyAdd} />
            </div>
        </div>
    );
}

export default UseStateArrayPrimitiveExample;