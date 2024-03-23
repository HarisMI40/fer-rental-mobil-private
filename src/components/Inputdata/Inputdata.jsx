import axios from "axios";
import { useState } from "react";
import "./Inputdata.css";
import iconfoto from "../../../src/assets/img/inputimage/fi_upload.png";
import { useNavigate } from "react-router-dom";

const Inputdata = () => {
  const navigate = useNavigate();

  // buat simpan file
  const [file, setFile] = useState([]);
  const [nama, setNama] = useState();
  const [harga, setHarga] = useState();
  const [category, setCategory] = useState();

  const handleSubmit = async (e) => {
    // ini untuk handle biar gak redirect link
    e.preventDefault();
    console.log(e);
    // fail;

    try {
      const formData = new FormData();
      // formData.append("name", "mobil kencang");
      formData.append("name", nama);
      formData.append("category", category);
      formData.append("price", harga);
      formData.append("status", "false");
      formData.append("image", file[0]);
      const response = await axios.post(
        "https://api-car-rental.binaracademy.org/admin/car",
        formData,
        {
          headers: {
            access_token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc",
          },
        }
      );

      console.log(response);
      alert("Berhasil Input Data");
      navigate("/cars");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg_putih gap-16px">
        <div className="flex mb-4 ">
          <div className="w-1/5  text_div">
            <label className="text_inputan">Nama / Tipe Mobil*</label>
          </div>
          <div className="w-1/2 ">
            <input
              className="inputan"
              // name="nama"
              onChange={(e) => {
                console.log(e.target.value);
                setNama(e.target.value);
              }}
              placeholder="Input Nama/Tipe Mobil"
            />
          </div>
        </div>
        <div className="flex mb-4 ">
          <div className="w-1/5  text_div">
            <label className="text_inputan">Harga*</label>
          </div>
          <div className="w-1/2 ">
            <input
              className="inputan"
              // name="harga"
              onChange={(e) => {
                console.log(e.target.value);
                setHarga(e.target.value);
              }}
              placeholder="Input Harga Sewa Mobil"
            />
          </div>
        </div>

        <div className="flex mb-4 ">
          <div className="w-1/5  text_div">
            <label className="text_inputan">Foto*</label>
          </div>
          <div className="fileUploadInput">
            <input
              type="file"
              onChange={(e) => {
                console.log(e.target.files);
                setFile(e.target.files);
              }}
              // name="foto"
              placeholder="Upload Foto Mobil"
            />

            <button>
              <img src={iconfoto} alt="user photo" />
            </button>
          </div>
        </div>

        <div className="flex mb-4 ">
          <div className="w-1/5  text_div">
            <label className="text_inputan">Kategori*</label>
          </div>

          <div className="w-1/2 ">
            <select
              className="inputan"
              // name="kategori"
              onChange={(e) => {
                console.log(e.target.value);
                setCategory(e.target.value);
              }}
              placeholder="Pilih Kategori Mobil"
            >
              <option value="">Pilih Kategori Mobil</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
        </div>

        <div className="flex mb-4 ">
          <div className="w-1/5  text_div">
            <label className="text_inputan">Created at*</label>
          </div>
          <div className="w-1/2 ">-</div>
        </div>
        <div className="flex mb-4 ">
          <div className="w-1/5  text_div">
            <label className="text_inputan">Update at*</label>
          </div>
          <div className="w-1/2 ">-</div>
        </div>
      </div>
      <button
        className="cancel_button bg-white"
        type="button"
        onClick={navigate("/cars")}
      >
        Cancel
      </button>

      <input className="save_button bg-blue-900" type="submit" value="Save" />
    </form>
  );
};

export default Inputdata;
