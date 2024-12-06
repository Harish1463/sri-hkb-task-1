import { useState } from 'react'
import data from './data.json'

const App = () => {

  const [jsonData, setJsonData] = useState(data)

  const handleChange = (e, id) => {
    const updateData = jsonData.map((element) =>
      element.id === id ? { ...element, info: e.target.value } : element
    )
    setJsonData(updateData)
  }


  return (
    <>
      {
        jsonData.map(data => {
          return (
            <div key={data.id}>
              <label>Enter New Data: </label>
              <input type='text' value={data.info} onChange={(e) => handleChange(e, data.id)} />
              <h4>{data.info}</h4>
            </div>
          )
        }
        )
      }
    </>
  )
}

export default App