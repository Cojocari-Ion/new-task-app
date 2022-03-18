import React from 'react';
import './NameGrid.css';
import { dataNames } from '../../../data';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';



const NameGrid = ({query}) => {
    const { id } = useParams()
  return (
    <div className='NameGrid'>
        <ul>
        {dataNames.filter(name => name.includes(id)).map(filteredName => (
            <li>
                {filteredName}
            </li>
        ))}
        </ul>
    </div>
  )
}

export default NameGrid