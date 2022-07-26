import { useEffect, useState } from 'react';

import Room from './components/Room/Room';

import { useFetch } from './useFetch';

import './App.css';

export default function App() {
  const {loading, data} = useFetch();
  const [page, setPage] = useState(0);
  const [rooms, setRooms] = useState([]);
  
  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1
      if (nextPage > data.length - 1) {
        nextPage = 0
      }
      return nextPage
    })
  }
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1
      if (prevPage < 0) {
        prevPage = data.length - 1
      }
      return prevPage
    })
  }

  const handlePage = (index) => {
    setPage(index)
  }

  useEffect(() => {
    if (loading) return
    setRooms(data[page])
  }, [loading, page])

  return (
    <main>
      <div className='section-title'>
        <div className='underline'></div>
      </div>
      <section className='rooms'>

        <div className='container'>
          {rooms.map((room) => {
            return <Room key={room.id}{...room} />
          })}
        </div>

        {!loading && (
          <div className='btn-container'>
            <button className='prev-btn' onClick={prevPage}>
              prev
            </button>
            {data.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`page-btn ${index === page ? 'active-btn' : null}`}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              )
            })}
            <button className='next-btn' onClick={nextPage}>
              next
            </button>
          </div>
        )}
        
      </section>
    </main>
  )
}
