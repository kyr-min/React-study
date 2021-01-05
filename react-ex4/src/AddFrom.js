import { useState } from 'react'

const AddForm = ({addSubject}) => {

    let [subject, setSubject] = useState('');
    let [score, setScore] = useState('');
    
    const changeSubject = (e) => {
        setSubject(e.target.value);
    }

    const changeScore = (e) => {
        setScore(e.target.value);
    }

    return (
        <div>
            <div>
                <div>
                    과목: <input value={subject} onChange={changeSubject}/>
                </div>
                <div>
                    점수: <input value={score} onChange={changeScore}/>
                </div>
            </div>
            <button onClick={()=> addSubject(subject, score)}>추가</button>
        </div>
    )
};

export default AddForm;