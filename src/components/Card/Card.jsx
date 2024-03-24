/* eslint-disable react/prop-types */
import { FiUsers, FiClock, FiTrash, FiEdit } from "react-icons/fi";
import "./card.css";
import { useEffect, useState } from "react";
import { Modal } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../../helper/formatCurrency";
import { fetchCar } from "../../Redux/carSlice";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import axios from "axios";
const token = localStorage.getItem("token_Admin");

const categoryMap = {
  small: "2 - 4 orang",
  medium: "4 - 6 orang",
  large: "6 - 8 orang",
};
const PLACEHOLDER_URL = "https://fakeimg.pl/270x160";
const Card = () => {
  const [openModal, setOpenModal] = useState(false);
  const [deleteId, setdeleteId] = useState(0);
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.car.carList);
  const params = useSelector((state) => state.car.params);

  useEffect(() => {
    dispatch(fetchCar(params));
  }, [dispatch, params]);

  const handleDeleted = (e, idToDelete) => {
    e.preventDefault();
    setdeleteId(idToDelete);

    setOpenModal(true);
  };

  const onDelete = async (e) => {
    e.preventDefault();
    const response = await axios.delete(`https://api-car-rental.binaracademy.org/admin/car/${deleteId}`, {
      headers: {
        access_token: token,
      },
    });

    alert("Berhasil Delete Data");
    setOpenModal(false);
    window.location.reload();
  };

  return (
    <>
      <div className="card-list flex flex-wrap gap-4 shrink mb-12">
        {cars.map((car, index) => (
          <div className="car-card max-w-[350px] bg-white shadow rounded-md  p-6" key={index}>
            <div className="img-card flex justify-center p-4">
              <img src={car.image || PLACEHOLDER_URL} alt={car.name} loading="lazy" className=" w-[270px] h-[160px]" />
            </div>
            <div className="card-detail mb-6 space-y-2">
              <div className="title text-black text-sm">{car.name}</div>
              <div className="price font-bold text-black text-lg ">{formatCurrency(car.price)}</div>
              <div className="category flex items-center gap-2 text-black text-sm">
                <FiUsers />
                {categoryMap[car.category]}
              </div>
              <div className="posted flex items-center gap-2">
                <FiClock />
                <span className="text-black text-sm">Updated at {dayjs(car.updatedAt).format("DD MMM YYYY, HH.mm")}</span>
              </div>
            </div>
            <div className="btn-group flex gap-4">
              <div className="btn w-1/3 grow bg-white border-2 border-red-500  text-red-500 font-bold text-md rounded-sm hover:bg-red-500 hover:text-white hover:border-white" onClick={(e) => handleDeleted(e, car.id)}>
                <FiTrash size={18} strokeWidth={3} />
                Delete
              </div>
              <Link to={`editcar/${car.id}`} className="btn successCol w-1/3 grow text-white border-0 font-bold text-md rounded-sm ">
                <FiEdit size={18} strokeWidth={3} />
                Edit
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="flex flex-col items-center">
            <div className="img">
              <img src="/src/assets/img/dialog-box/img-BeepBeep.png" className="mx-auto mb-4 text-gray-400 dark:text-gray-200" />
            </div>
            <div className="desc w-80 text-center">
              <h3 className=" mb-4 font-bold text-black">Menghapus Data Mobil</h3>
              <p className="text-black text-sm mb-6">Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin menghapus?</p>
            </div>
            <div className="btn-group flex gap-4 justify-center">
              <div className="btn w-5/6 grow py-2 px-3 bg-blue-800 text-white border-0 rounded-sm hover:bg-blue-600" onClick={(e) => onDelete(e)}>
                Ya
              </div>
              <div className="btn w-5/6 grow py-2 px-3 bg-white text-blue-800 border-1 border-blue-800 rounded-sm hover:bg-blue-600 hover:text-white hover:border-white " onClick={() => setOpenModal(false)}>
                Tidak
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Card;
