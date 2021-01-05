const Subject = ({subjects}) => {
    return (
        <table border="1">
            <thead>
                <tr>
                    <th>과목</th>
                    <th>점수</th>
                </tr>
            </thead>
            <tbody>
                {
                    subjects.map((subject, index) => {
                        return <tr key={index}>
                            <td>{subject.subject}</td>
                            <td>{subject.score}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
};

export default Subject;