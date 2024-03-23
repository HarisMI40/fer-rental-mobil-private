/* eslint-disable react/prop-types */
import "./Inputdata.css";
const Inputfield = ({label, inputProps, onChange, value}) => {
  return (
    <>
      <div className="flex mb-4 ">
        <div className="w-1/5  text_div">
          <label className="text_inputan">{label}</label>
        </div>
        <div className="w-1/2 ">
          <input
            className="inputan"
            {...inputProps}
            onChange={onChange}
            value={value}
            // name="nama"
          />
        </div>
      </div>
    </>
  );
};

export default Inputfield;
