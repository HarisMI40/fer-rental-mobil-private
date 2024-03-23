/* eslint-disable react/prop-types */
import "./Inputdata.css";
const Selectinput = ({label, inputProps, onChange, value, defaultValue}) => {
  return (
    <>
      <div className="flex mb-4 ">
        <div className="w-1/5  text_div">
          <label className="text_inputan">{label}</label>
        </div>
        <div className="w-1/2 ">
          <select
            className="inputan"
            {...inputProps}
            onChange={onChange}
            value={value}
            defaultValue={defaultValue}
            // name="nama"
          >
            <option className="inputan" value="">
              Pilih Kategori Mobil
            </option>
            <option className="inputan" value="small">
              Small
            </option>
            <option className="inputan" value="medium">
              Medium
            </option>
            <option className="inputan" value="large">
              Large
            </option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Selectinput;
