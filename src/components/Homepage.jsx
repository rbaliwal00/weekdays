import { useEffect, useState } from 'react';
import axios from 'axios';
import JobCards from './JobCards';
import Filters from './Filters';

const Homepage = () => {
    const [data, setData] = useState([]);
    const [role, setRole] = useState([]);
    const [location, setLocation] = useState([]);
    const [company, setCompany] = useState('');
    const [offset, setOffset] = useState(0);

    const [jobs,setJobs] = useState([]);

    useEffect(() => {
        const filteredJobs = data.filter(job => {
            const roleMatch = role.length === 0 || role.map(r => r.toLowerCase()).includes(job.jobRole);
            const locationMatch = location.length === 0 || location.map(l => l.toLowerCase()).includes(job.location);
            // const companyMatch = company.length === 0 || company.trim().toLowerCase() === job
            return roleMatch && locationMatch;
        });
        setJobs(filteredJobs);
    }, [data, role, location]);

    useEffect(() => {
        const fetchJobs = async () => {
            const res = await axios.post("https://api.weekday.technology/adhoc/getSampleJdJSON", 
            {"limit": 10,"offset": offset});
        
            setData([...data,...res.data.jdList]);
            setData([...data,...res.data.jdList]);
        }
        fetchJobs();
    }, [offset]);

    const handleInfiniteScroll = async () => {
        try{
            if(window.innerHeight + document.documentElement.scrollTop + 1 >=  document.documentElement.scrollHeight){
                setOffset(prev => prev + 10);
            }
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleInfiniteScroll);      
        return () => window.removeEventListener("scroll", handleInfiniteScroll);      
    },[]);

    return (
        <div className='p-4'>
            <h2 className='text-center font-bold mb-4'>Search Jobs</h2>
            <Filters 
                role={role} 
                setRole={setRole} 
                location={location} 
                setLocation={setLocation}
                company={company}
                setCompany={setCompany}/>
            <div className='grid grid-cols-3 gap-8'>
                {
                    jobs.map(job => (
                        <JobCards content={job} key={job.jdUid}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Homepage;