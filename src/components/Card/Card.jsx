/* eslint-disable react/prop-types */
import { FiUsers, FiClock, FiTrash, FiEdit } from "react-icons/fi";
import "./card.css";

const Card = ({ index }) => {
  return (
    <div
      className="car-card max-w-[350px] bg-white shadow rounded-md p-6"
      key={index}
    >
      <div className="img-card flex justify-center">
        <img
          src="/src/assets/img/product/image 1.png"
          alt="product1"
          width={303}
        />
      </div>
      <div className="card-detail mb-6 space-y-2">
        <div className="title text-black text-sm">Name/Tipe Mobil</div>
        <div className="price font-bold text-black text-lg ">
          Rp. 500.000/ hari
        </div>
        <div className="category flex items-center gap-2 text-black text-sm">
          <FiUsers />
          6-8 people
        </div>
        <div className="posted flex items-center gap-2">
          <FiClock />
          <span className="text-black text-sm">
            Updated at 4 Apr 2022, 09.00
          </span>
        </div>
      </div>
      <div className="btn-group flex gap-4">
        <div className="btn w-1/3 grow bg-white border-2 border-red-500  text-red-500 font-bold text-md rounded-sm hover:bg-red-500 hover:text-white hover:border-white">
          <FiTrash size={18} strokeWidth={3} />
          Delete
        </div>
        <div className="btn successCol w-1/3 grow text-white border-0 font-bold text-md rounded-sm">
          <FiEdit size={18} strokeWidth={3} />
          Edit
        </div>
      </div>
    </div>
  );
};

export default Card;
