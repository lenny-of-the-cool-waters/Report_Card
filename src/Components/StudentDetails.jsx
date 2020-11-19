import data from '../data.json'

function StudentDetails() {
    return (
        <div className="detailsContainer">
            <div className="studentImage">
                <img id="studentImage" src={data["student_photo"]} alt="Student" />
            </div>
            <div className="details">
                <ul className="detailsList">
                    <li>NAME: &ensp; {data["student_name"].toUpperCase()}</li>
                    <li>ADMISSION NUMBER: &ensp; {data["student_admission_number"].toUpperCase()}</li>
                    <li>CLASS: &ensp; {data["class_name"].toUpperCase()}</li>
                    <li>EXAM: &ensp; {data["exam_name"].toUpperCase()}</li>
                </ul>
            </div>
        </div>
    )
}

export default StudentDetails
