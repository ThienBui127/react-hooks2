import { useContext } from "react";
import Form from "./Form";
import { ThemeContext } from "../../App";

export default function Panel() {
    const { theme } = useContext(ThemeContext)
    return (
        <div className={`p-4 border ${theme}`}>
            <Form />
        </div>
    )
}