import axios from "axios";
import React, { useState, useEffect} from "react";

import { Link } from "react-router-dom";

const ListProduct = () => {
    
  const [products, setProducts] = useState([]);
 
 
    useEffect(() =>
    {
        fetchProducts();

     },[])

  const fetchProducts =   async (e) => {
       await axios
         .get(`http://127.0.0.1:8000/api/products`)
           .then(({data}) => {
             setProducts( data);
       
           
         })
           .catch(({ response: { data } }) => {
             console.log(data.message);
         });
     };
    const deleteProduct = async (id) => {
      await axios
        .delete(`http://127.0.0.1:8000/api/products/${id}`)
        .then(({ data }) => {
            setProducts(data);
            fetchProducts();
        })
      
    };
 

  return (
    <div className="containe">
      <div className="row ">
        <div className="col-12">
          <Link className='btn btn-primary float-end' to={"product/create"}>create</Link>
          <div className="col-12">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">image</th>
                                  <th scope="col">setting</th>
                                  
                </tr>
              </thead>
              <tbody>
               
                              {
                                  products.length > 0 && (
                                      products.map((row, key) => {
                                          const { title, description, image, id } = row;
                                          return (
                                            <>
                                              <tr id={key}>
                                                <td>{title}</td>
                                                <td>{description}</td>
                                                <td>
                                                  <img
                                                    src={`http://127.0.0.1:8000/storage/product/image/${image}`}
                                                    alt={title}
                                                  />
                                                </td>
                                                <td>
                                                  <Link
                                                    className="btn btn-success mb-2 float-end"
                                                              to={`product/edit/${id}`}
                                                  >
                                                    Edit
                                                  </Link>
                                                  <button
                                                    className="btn btn-danger"
                                                    onClick={() =>
                                                      deleteProduct(id)
                                                    }
                                                  >
                                                   
                                                              
                                                    delete
                                                  </button>
                                                </td>
                                              </tr>
                                            </>
                                          );
                                      }
                                  )
                                  )
                              }
               
             
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};




export default ListProduct