import React from 'react'
import "./architecture.css"
import Today from '../../components/today/Today'
import Week from '../../components/week/Week'
import {
  Architecturetodaypics,
  Architectureweekpics
} from "../../utils/constants";
const Architecture = () => {
  return (
    <div className='architecture'>
      <Today pics={Architecturetodaypics} />
      <Week pics={Architectureweekpics}/>
    </div>
  );
}
export default Architecture