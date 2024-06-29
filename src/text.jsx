import Button from '@mui/material/Button';
import "./text.css"
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';

export default function Text() {
    const [input, setInput] = useState("");
    const [words, setWords] = useState([]);
    const [count, setCount] = useState(0);

    const handleInput = (e) => {
        setInput(e.target.value)
        setCount(e.target.value.length)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (input == "") {
            return setWords([...words])
        }
        setWords([...words, input])
        setInput("")
        setCount(0)
    }

    const handleDelete = (index) => {
        const newValue = words.filter((data, i) => {
            return i !== index;
        })
        setWords(newValue)
    }

    const handleEdit = (index,data) => {
       const newEdit = words.filter((data,i)=>{
        return i !== index;
       })
       setInput(data)
       setWords(newEdit)
    }

    const UpperCase = () => {
        setInput(input.toUpperCase());
    }

    const LowerCase = () => {
        setInput(input.toLowerCase());
    }

    const ClearAll = () => {
        setInput("");
    }

    const ReverseWord = () => {
        let reWord = input.split('').reverse().join('');
        setInput(reWord);
    }

    const ReverseSentence = () => {
        setInput(input.split(' ').reverse().join(' '));
    }



    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="text_card">
                    <h2>Enter Text:</h2>
                    <textarea id="text_area" placeholder="Type Here..." cols="50" rows="8" value={input} onChange={handleInput}></textarea>
                    <span className='counter'>Total Character : {count}</span>
                    <div className="Allbtn">
                        <Button className='btn' variant="outlined" style={{ backgroundColor: "black" }} type="submit" >Add</Button>

                        <Button className='btn' variant="outlined" style={{ backgroundColor: "blue" }} onClick={UpperCase}>UpperCase</Button>

                        <Button className='btn' variant="outlined" style={{ backgroundColor: "#199e19" }} onClick={LowerCase}>LowerCase</Button>


                        <Button className='btn' variant="outlined" style={{ backgroundColor: "darkred" }} onClick={ClearAll}>Clear All</Button>

                        <Button className='btn' variant="outlined" style={{ backgroundColor: "midnightblue" }} onClick={ReverseWord}>ReverseWord</Button>

                        <Button className='btn' variant="outlined" style={{ backgroundColor: "saddlebrown" }} onClick={ReverseSentence}>ReverseSentence</Button>
                    </div>
                </div>
            </form>
            <div className="lists">
                <p style={{ margin: "0" }}>Notes:</p>
                {
                    words.map((data, index) => (
                        <li key={index}>
                            {data}
                            <div className="Delbtn">
                            <button onClick={() => handleEdit(index,data)}><EditIcon /></button>
                            <button onClick={() => handleDelete(index)}><CloseIcon /></button>
                            </div>
                            
                        </li>
                    ))
                }
            </div>

        </>
    )
}