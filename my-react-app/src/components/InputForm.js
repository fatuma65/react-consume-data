import { useState } from 'react';

function InputForm ({ addPost, updatePost, initialData}) {
    const [formData, setFormData] = useState(initialData);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData, [name] : value,
        }))
    };

    const handleSubmit = (event) => {
        event.previousDefault();
        if (formData.id) {
            updatePost(formData);
        } else {
            addPost(formData);
        }
        setFormData({id : '', title: '', body: '', userId: ''})
    } 

    return (
        <form onSubmit={handleSubmit}>
            <label>
                title
                <input type="text" name='title' value={formData.title} onChange={handleInputChange}></input>
            </label>
            <label>
                body
                <input type="text" name='body' value={formData.body} onChange={handleInputChange}></input>
            </label>
            <label>
                userId
                <input type="text" name='userId' value={formData.userId} onChange={handleInputChange}></input>
            </label>
            <input type='submit' value='submit'></input>
        </form>
    )
}
export default InputForm;