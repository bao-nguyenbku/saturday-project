import React, { useState, useEffect } from 'react';
import AccommodationCard from './AccommodationCard';
import { getAllAccommodation } from '../services/accommodation';

export default function AccommodationGridView() {
  const [accommodationList, setAccommodationList] = useState([]);

  useEffect(() => {
    getAllAccommodation().then(response => setAccommodationList(response.data));
  }, []);
  return (
    <>
    <p className="text-3xl font-bold">Danh sách nhà trọ</p>
    <div className='grid grid-cols-4 mt-9 gap-[20px]'>
      {accommodationList.map(item => {
        return (
          <AccommodationCard key={item.id} data={item}/>
        )
      })}
    </div>
    </>
  )
  // return (
  //   <Box sx={{ flexGrow: 1 }}>
  //     <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
  //       {mockData.map((item) => (
  //         <Grid item xs={2} sm={4} md={3} key={item.id}>
  //           <Item>
  //               <AccommodationCard data={item}/>
  //           </Item>
  //         </Grid>
  //       ))}
  //     </Grid>
  //   </Box>
  // );
}
