// import EditCars from "../../components/Inputdata/Editdata";
import "./editcar.css";
import Inputfield from "../../components/Inputdata/Inputfield";
import Fotoinput from "../../components/Inputdata/Fotoinput";
import Selectinput from "../../components/Inputdata/Selectinput";

import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

const token = localStorage.getItem("token_Admin");
const EditCar = () => {
  //untuk ambil nilai ID dari link menggunakan params
  const params = useParams();

  // untuk link
  const navigate = useNavigate();

  // get data mobil
  // const [dataMobil, setDataMobil] = useState({});
  useEffect(() => {
    async function getData() {
      // const {idOrder} = JSON.parse(localStorage.getItem("dataOrder"));
      const response = await axios.get(
        `https://api-car-rental.binaracademy.org/admin/car/${params.id}`,
        {
          headers: {
            access_token: token,
          },
        }
      );
      const data = response.data;
      setValues({
        name: data.name,
        harga: data.price,
        file: data.image,
        kategori: data.category,
      });
      console.log(response.data);
    }
    getData();
  }, [params.id]);

  // nilai kosong untuk ngambil data componen
  const [values, setValues] = useState({
    name: "",
    harga: "",
    file: {},
    kategori: "",
  });

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
      const response = await axios.put(
        `https://api-car-rental.binaracademy.org/admin/car/${params.id}`,
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
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <a
              href="/cars"
              className="inline-flex items-center  font-bold text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              Cars
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <FiChevronRight color="black" />
              <a
                href="/cars"
                className="ms-1  font-bold text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >
                List Cars
              </a>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <FiChevronRight color="black" />
              <span className="ms-1  font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                Edit Car
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <div className="cars-section mt-10">
        <h1 className="text-black font-bold text-xl mb-4">Edit Car</h1>

        {/*  isi content  */}
        {/* <EditCars /> */}

        <form onSubmit={handleSubmit}>
          <div className="bg_putih gap-16px">
            <Inputfield
              label="Nama / Tipe Mobil*"
              value={values.name}
              // onchange -> apabila variabel berubah
              onChange={(e) => {
                console.log({ ...values, name: e.target.value });
                // untuk mengambil perubahan data, kenapa pakek {...} karena diambil objek
                setValues({ ...values, name: e.target.value });
              }}
              inputProps={{
                type: "text",
                placeholder: "Input Nama/Tipe Mobil",
              }}
            />

            <Inputfield
              label="Harga*"
              value={values.harga}
              onChange={(e) => {
                console.log({ ...values, harga: e.target.value });
                // untuk mengambil perubahan data, kenapa pakek {...} karena diambil objek
                setValues({ ...values, harga: e.target.value });
              }}
              inputProps={{
                type: "text",
                placeholder: "Input Harga Sewa Mobil",
              }}
            />
            <Fotoinput
              label="Foto*"
              // value={values.file}
              // onchange -> apabila variabel berubah
              onChange={(e) => {
                console.log({ ...values, file: e.target.files });
                // untuk mengambil perubahan data, kenapa pakek {...} karena diambil objek
                setValues({ ...values, file: e.target.files });
              }}
              inputProps={{
                type: "file",
                placeholder: "Input Nama/Tipe Mobil",
              }}
            />

            <Selectinput
              label="Kategori*"
              // defaultValue={values.kategori}

              value={values.kategori}
              // defaultValue={values.kategori}
              onChange={(e) => {
                // console.log({...values, kategori: e.target.value});
                // untuk mengambil perubahan data, kenapa pakek {...} karena diambil objek
                setValues({ ...values, kategori: e.target.value });
              }}
              inputProps={{
                type: "text",
                placeholder: "Input Nama/Tipe Mobil",
              }}
            />
          </div>

          <Link to="/cars">
            <button
              className="cancel_button bg-white cursor-pointer hover:bg-slate-200"
              type="button"
            >
              Cancel
            </button>
          </Link>

          <input
            className="save_button bg-blue-900 cursor-pointer hover:bg-blue-600"
            type="submit"
            value="Edit"
          />
        </form>
      </div>
    </div>
  );
};

export default EditCar;
