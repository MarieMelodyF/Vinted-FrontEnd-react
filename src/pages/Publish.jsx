import { Link, useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Publish = ({ token, setToken }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [etat, setEtat] = useState("");
  const [taille, setTaille] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [picture, setPicture] = useState(); //   state pour image
  const [imgCloudinary, setImgCloudinary] = useState(""); //   stage pour image sur cloudinary
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("brand", brand);
      formData.append("color", color);
      formData.append("etat", etat);
      formData.append("taille", taille);
      formData.append("price", price);
      formData.append("picture", picture);
      formData.append("imgCloudinary", imgCloudinary);
      console.log("test");
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setImgCloudinary(response.data.product_image.secure_url);
      //   console.log("log response.data", response.data);
    } catch (error) {
      console.log("aie");
      console.log(error.response);
    }
  };

  return token ? (
    <div className="publish-container">
      <h1>Vends ton article</h1>
      <form onSubmit={handleSubmit}>
        {/* file */}
        <div className="file-select">
          <label
            htmlfor="file"
            className="label-file"
            onChange={(event) => {
              console.log("log event", event);
              setPicture(event.target.files[0]);
            }}
          >
            <div className="text-label">
              <span> + </span>
              <span>Ajoute une photo</span>
            </div>
          </label>

          <input
            id="file"
            type="file"
            className="input-file"
            onChange={(event) => {
              console.log("log event", event);
              setPicture(event.target.files[0]);
            }}
          />
        </div>

        <section className="text-input-section">
          <div className="text-input">
            {/* titre */}
            <h4>Title</h4>
            <input
              type="text"
              placeholder="Chemise verte"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </div>
          <div className="text-input">
            {/* description */}
            <h4>Descrit ton article</h4>

            <textarea
              name="description"
              rows="5"
              placeholder="ex: porté quelquefois, taille correctement"
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            ></textarea>
          </div>
        </section>

        <section className="text-input-section">
          <div className="text-input">
            {/* Marque */}
            <h4>Marque</h4>

            <input
              type="text"
              placeholder="ex : Zara"
              value={brand}
              onChange={(event) => {
                setBrand(event.target.value);
              }}
            />
          </div>

          <div className="text-input">
            <h4>Taille</h4>
            {/* taille */}
            <input
              type="text"
              placeholder="ex: L/36/42"
              value={size}
              onChange={(event) => {
                setSize(event.target.value);
              }}
            />
          </div>
          <div className="text-input">
            <h4>Couleur</h4>
            {/* Couleur */}
            <input
              type="text"
              placeholder="ex: Fushia, Rayé, ..."
              value={color}
              onChange={(event) => {
                setColor(event.target.value);
              }}
            />
          </div>
          <div className="text-input">
            <h4>État</h4>
            {/* Etat */}
            <input
              type="text"
              placeholder="Ex: bon état, neuf, ..."
              value={etat}
              onChange={(event) => {
                setEtat(event.target.value);
              }}
            />
          </div>
          <div className="text-input">
            <h4>Lieu</h4>
            {/* Lieu */}
            <input
              type="text"
              placeholder="Ex: Paris"
              value={taille}
              onChange={(event) => {
                setTaille(event.target.value);
              }}
            />
          </div>
        </section>
        <section className="text-input-section">
          <div className="text-input">
            <h4>Prix</h4>
            {/* price */}
            <input
              type="text"
              placeholder="Price"
              value={price}
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />
          </div>
          <div></div>
        </section>
        <div className="form-button-div">
          <Link to="/">
            <input
              type="submit"
              className="form-validation"
              placeholder="Register"
            />
          </Link>
        </div>
      </form>
      {imgCloudinary && <img src={imgCloudinary} alt="" />}
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Publish;
