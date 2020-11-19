import './App.css'

import StudentDetails from './Components/StudentDetails.jsx'
import ResultsTable from './Components/ResultsTable.jsx'
import ResultsGraphics from './Components/ResultsGraphics.jsx'


function App() {
  return(
    <div className="App">
      <div className="App-header">
        <h1>Shule Academy</h1>
        <h3>Education, Wisdom, Wit</h3>
      </div>
      <div>
        <StudentDetails />
        <ResultsTable />
        <ResultsGraphics />
      </div>
    </div>
  )
}

export default App