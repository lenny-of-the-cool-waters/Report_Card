import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

import data from '../data.json'

let data_array = []
data["student_performance_over_time"].map((item) => {
    let new_object = {
        name: item["exam_name"],
        uv: item["avg_score"]
    }
    data_array.push(new_object)
})

function ResultsGraphics() {
    return (
        <div className="graphicsContainer">
            <BarChart width={600} height={300} data={data_array}>
                <XAxis dataKey="name" stroke=" #0d6813de" />
                <YAxis />
                <Tooltip />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar dataKey="uv" fill=" #0d6813de" barSize={30} />
            </BarChart>
        </div>
    )
}

export default ResultsGraphics
