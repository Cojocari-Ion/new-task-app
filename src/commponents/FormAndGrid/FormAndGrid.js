import React from 'react';
import './FormAndGrid.css';
import { useState, useEffect } from 'react';
import { setQuery } from '../../store/slices/searchValueSlice'
import { useDispatch, useSelector } from 'react-redux';
import NameGrid from './NameGrid/NameGrid';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const FormAndGrid = () => {

    const [text, setText] = useState();
    const [currentQuery, setCurrentQuery] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    
    const dataQuery = useSelector(state => state.query);
    

    const getQueryText = (e) => {
        setText(e.target.value);
    }
    
    const getCurrentQUery = async () => {
        setCurrentQuery(dataQuery.searchQuery.searchQuery)
    }

    useEffect(() => {
        dispatch(setQuery({
            searchQuery: text
        }));
        
    }, [text])

  return (
    <div className='FormAndGrid'>
        <form  onSubmit={(e) => {e.preventDefault(); getCurrentQUery(); navigate(`/${text}`)}}>
            <div className='input-button-container'>
                <input type="text" onChange={getQueryText} />

                <button type='submit' className="search-button">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>

            </div>

            <button className='clear-button' >
                clear
            </button>
        </form>

        <NameGrid query={currentQuery} />

    </div>
  )
}

export default FormAndGrid