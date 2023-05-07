import axios from "axios";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const changeHandler = (e) => {
    setImage(e.target.files[0]);
  };
  const createProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);
    await axios
      .post("http://127.0.0.1:8000/api/products", formData)
      .then(({ data }) => {
        console.log(data.message);
        navigate("/");
      })
      .catch(({ response }) => {
        if (response.status === "424") {
          console.log(response.data.error);
        } else {
          console.log(response.message);
        }
      });
  };

  return (
    <div className="containe">
      <div className="row justifier-content-center">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">create Product</h3>
              <hr></hr>
              <div className="form-warpper">
                <form onSubmit={createProduct}>
                  <div className="form-group">
                    <label>title</label>
                    <input
                      type="text"
                      className="form-control"
                      value={title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                  </div>

                  <div className="form-group">
                    <label>description</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      value={description}
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label>file</label>
                    <input
                      type="file"
                      className="form-control"
                      onChange={changeHandler}
                    />
                    <div className="my-3">
                      <button type="submit" className="btn  btn-primary">
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
