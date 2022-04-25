import React from "react";
import { useEffect, useState } from "react";

import { BookCard } from "./BookCard";
import styled, { css } from "styled-components";

export const Grid = styled.div`
 add required style here
`;

const Books = () => {
  const [data, setData] = useState([]);
  const getreq= async()=>{
    const res= await fetch(" http://localhost:8080/books")
    const data=  await res.json()
    setData(data)
    
  }

  useEffect(() => {
    getreq()
    // make a GET request to http://localhost:8080/books to get all the books data
  }, []);

  return (
    <>
      <h1>Books</h1>
      <Grid data-testid="books-container">
      <DAT>
        {

          data.map((el)=>{
            return (
             
                <div>
                <h1>{el.title}</h1>
                <p>{el.pageCount}</p>
                <p>{el.Authors}</p>
                <img src={el.thumbnailUrl}/>
               <p>{el.authors}</p>
               <div>
                 {/* {el.Authors.map((ele)=>{
                   return(
                     <h1>{ele}</h1>
                   )
                 })} */}
               </div>
               </div>
           

            )
          })
        }
        {/* {!!data && 

          // map thorugh the data and use <BookCard/> component to display each book
          } */}
             </DAT>
      </Grid>
    </>
  );
};
export default Books;
const DAT = styled.div`
display:grid;
grid-template-columns: repeat(3,1fr);
grid-gap:20px;

`