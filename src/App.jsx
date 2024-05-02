import { useEffect, useState } from 'react'
import JobCards from './components/JobCards'
import './index.css'
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await axios.post("https://api.weekday.technology/adhoc/getSampleJdJSON", 
        {"limit": 10,"offset": 0});

      setData(res.data.jdList);
    }
    
    fetchJobs();
  }, []);

  console.log(data);

  return (
    <div className='grid grid-cols-3 gap-8'>
      {
        data.map(job => (
          <JobCards content={job}/>
        ))
      }
    </div>
  )
}

export default App
