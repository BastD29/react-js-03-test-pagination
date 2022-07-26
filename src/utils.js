const paginate = (rooms) => {
    const itemsPerPage = 10
    const numberOfPages = Math.ceil(rooms.length / itemsPerPage)
  
    const newRooms = Array.from({ length: numberOfPages }, (_, index) => {
      const start = index * itemsPerPage
      return rooms.slice(start, start + itemsPerPage)
    })
  
    return newRooms
  }
  
  export default paginate;
  