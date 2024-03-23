/* eslint-disable react/prop-types */
import iconfoto from "../../../src/assets/img/inputimage/fi_upload.png";
import "./Inputdata.css";
const Fotoinput = ({label, inputProps, onChange, value}) => {
  return (
    <>
      <div className="flex mb-4 ">
        <div className="w-1/5  text_div">
          <label className="text_inputan">{label}</label>
        </div>
        <div className="fileUploadInput">
          <input
            className="inputan"
            {...inputProps}
            onChange={onChange}
            value={value}
            // name="nama"
          />
          <button>
            <img src={iconfoto} alt="user photo" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Fotoinput;
