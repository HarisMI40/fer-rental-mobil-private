import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
// import EditCars from "../../components/Inputdata/Editdata";
import "./editcar.css";
import Inputfield from "../../components/Inputdata/Inputfield";
import Fotoinput from "../../components/Inputdata/Fotoinput";
import Selectinput from "../../components/Inputdata/Selectinput";

import axios from "axios";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const EditCar = () => {
  // nilai kosong untuk ngambil data componen
  const [values, setValues] = useState({
    name: "",
    harga: "",
    file: {},
    kategori: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    // ini untuk handle biar gak redirect link
    e.preventDefault();
    console.log(e);
    // fail;

    try {
      const formData = new FormData();
      // formData.append("name", "mobil kencang");
      formData.append("name", values.name);
      formData.append("category", values.kategori);
      formData.append("price", values.harga);
      // formData.append("status", "false");
      formData.append("image", values.file[0]);
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
    <div className="content w-full min-h-screen bg-slate-100">
      <Breadcrumb />
      <div className="cars-section mt-10">
        <h1 className="text-black font-bold text-xl mb-4">Edit Car</h1>
        {/*  isi content  */}
        {/* <EditCars /> */}

        <form onSubmit={handleSubmit}>
          <div className="bg_putih gap-16px">
            <Inputfield
              label="Nama / Tipe Mobil*"
              // value={dataMobil.name}
              // onchange -> apabila variabel berubah
              onChange={(e) => {
                console.log({...values, name: e.target.value});
                // untuk mengambil perubahan data, kenapa pakek {...} karena diambil objek
                setValues({...values, name: e.target.value});
              }}
              inputProps={{
                type: "text",
                placeholder: "Input Nama/Tipe Mobil",
              }}
            />

            <Inputfield
              label="Harga*"
              // value={dataMobil.price}
              onChange={(e) => {
                console.log({...values, harga: e.target.value});
                // untuk mengambil perubahan data, kenapa pakek {...} karena diambil objek
                setValues({...values, harga: e.target.value});
              }}
              inputProps={{type: "text", placeholder: "Input Harga Sewa Mobil"}}
            />
            <Fotoinput
              label="Foto*"
              // value={values.file}
              // onchange -> apabila variabel berubah
              onChange={(e) => {
                console.log({...values, file: e.target.files});
                // untuk mengambil perubahan data, kenapa pakek {...} karena diambil objek
                setValues({...values, file: e.target.files});
              }}
              inputProps={{
                type: "file",
                placeholder: "Input Nama/Tipe Mobil",
              }}
            />

            <Selectinput
              label="Kategori*"
              onChange={(e) => {
                console.log({...values, kategori: e.target.value});
                // untuk mengambil perubahan data, kenapa pakek {...} karena diambil objek
                setValues({...values, kategori: e.target.value});
              }}
              inputProps={{
                type: "text",
                placeholder: "Input Nama/Tipe Mobil",
              }}
            />
          </div>

          <button className="cancel_button bg-white" type="button">
            Cancel
          </button>

          <input
            className="save_button bg-blue-900"
            type="submit"
            value="Save"
          />
        </form>
      </div>
    </div>
  );
};

export default EditCar;
