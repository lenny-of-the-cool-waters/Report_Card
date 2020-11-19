import data from '../data.json'

function ResultsTable() {
    return (
        <div>
            <div className="tableContainer">
                <table className="resultsTable">
                    <caption className="tableCaption">Exam Results</caption>
                    <tr>
                        <th>Subject</th>
                        <th>Score</th>
                        <th>Grade</th>
                        <th>Deviation</th>
                        <th>Rank</th>
                        <th>Out of</th>
                        <th>Comment</th>
                    </tr>
                    {data["subject_results"].map((item) => {
                        return (
                            <tr>
                                <td>{item["subject_name"]}</td>
                                <td>{item["score"]}</td>
                                <td>{item["grade"]}</td>
                                <td>{item["deviation"]}</td>
                                <td>{item["rank"]}</td>
                                <td>{item["rank_out_of"]}</td>
                                <td>{item["comment"]}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>

            <div className="table2Container">
                <table class="table2">
                    <tr>
                        <th></th>
                        <th>Position</th>
                        <th>Position out of</th>
                        <th>Deviation</th>
                    </tr>
                    <tr>
                        <td><strong>Stream Position</strong></td>
                        <td>{data["stream_position"]["position"]}</td>
                        <td>{data["stream_position"]["position_out_of"]}</td>
                        <td>{data["stream_position"]["deviation"]}</td>
                    </tr>
                    <tr>
                        <td><strong>Stream Position</strong></td>
                        <td>{data["overall_position"]["position"]}</td>
                        <td>{data["overall_position"]["position_out_of"]}</td>
                        <td>{data["overall_position"]["deviation"]}</td>
                    </tr>
                    <tr>
                        <td><strong>Mean marks</strong></td>
                        <td colSpan="2">Average: {data["mean_marks"]["avg_score"]}</td>
                        <td>{data["mean_marks"]["deviation"]}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default ResultsTable
