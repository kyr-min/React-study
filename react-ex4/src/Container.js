import { useState } from 'react'

import Subject from './Subject'
import AddForm from './AddFrom'

const Container = () => {
    let [subjects, setSubjects] = useState([]);

    const addSubject = (subject, score) => {
        if(isNaN(score)){
            alert("숫자만 입력해주세요");
            return ;
        }
        
        setSubjects([
            ...subjects,
            {subject, score}
        ])
    }

    const calcAver= () => {
        if(subjects.length === 0) return 0;

        let total = 0;
        subjects.forEach(subject => {
            total += Number(subject.score);
        })

        return total / subjects.length;
    }


    
    return (
        <div>
            <AddForm addSubject={addSubject}/>
            <Subject subjects = {subjects}/>

            평균: {calcAver()}
        </div>
    )
}

export default Container;