import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Publish = ({ token, setToken }) => {
  const [user, setUser] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [etat, setEtat] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [data, setData] = useState();
  const [picture, setPicture] = useState(); //   state pour image
  const [imgCloudinary, setImgCloudinary] = useState(""); //   stage pour image sur cloudinary
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.defaultPrevented();
    try {
      const formData = new formData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("brand", brand);
      formData.append("color", color);
      formData.append("etat", etat);
      formData.append("city", city);
      formData.append("price", price);
      formData.append("picture", picture);
      formData.append("imgCloudinary", imgCloudinary);

      const response = await axios.post(
        "http://localhost:3000/publish",

        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setImgCloudinary(response.data.secure_url);
      console.log("log response.data", response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* file */}
        <input
          type="file"
          onChange={(event) => {
            // console.log(event);
            setPicture(event.target.files[0]);
          }}
        />
        {/* titre */}
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        {/* description */}
        <input
          type="text"
          placeholder="Describe your article"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        {/* Marque */}
        <input
          type="text"
          placeholder="Brand"
          value={brand}
          onChange={(event) => {
            setBrand(event.target.value);
          }}
        />
        {/* taille */}
        <input
          type="text"
          placeholder="Size"
          value={size}
          onChange={(event) => {
            setSize(event.target.value);
          }}
        />
        {/* Couleur */}
        <input
          type="text"
          placeholder="Color"
          value={color}
          onChange={(event) => {
            setColor(event.target.value);
          }}
        />
        {/* Etat */}
        <input
          type="text"
          placeholder="État"
          value={etat}
          onChange={(event) => {
            setEtat(event.target.value);
          }}
        />
        {/* Lieu */}
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(event) => {
            setCity(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
        <Link to="/">
          <input type="submit" placeholder="Register" />
        </Link>
      </form>
      {imgCloudinary && <img src={imgCloudinary} alt="" />}
    </div>
  );
};

export default Publish;
