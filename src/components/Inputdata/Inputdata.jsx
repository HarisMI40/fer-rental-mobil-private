import "./Inputdata.css";

const Inputdata = () => {
  return (
    <form>
      <div className="bg_putih gap-16px">
        <div className="flex mb-4 ">
          <div className="w-1/5  text_div">
            <label className="text_inputan">Nama / Tipe Mobil*</label>
          </div>
          <div className="w-1/2 ">
            <input
              className="inputan"
              name="nama"
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
              name="harga"
              placeholder="Input Harga Sewa Mobil"
            />
          </div>
        </div>
        <div className="flex mb-4 ">
          <div className="w-1/5  text_div">
            <label className="text_inputan">Foto*</label>
          </div>
          <div className="w-1/2 ">
            <input
              className="inputan"
              name="harga"
              placeholder="Upload Foto Mobil"
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
              name="harga"
              placeholder="Input Harga Sewa Mobil"
            />
          </div>
        </div>
        <div className="flex mb-4 ">
          <div className="w-1/5  text_div">
            <label className="text_inputan">Kategori*</label>
          </div>

          <div className="w-1/2 ">
            <select
              className="inputan"
              name="kategori"
              placeholder="Pilih Kategori Mobil"
            >
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
        </div>

        <div className="flex mb-4 ">
          <div className="w-1/5  text_div">
            <label className="text_inputan">Kategori*</label>
          </div>
          <div className="w-1/2 ">
            <input
              className="inputan"
              name="kategori"
              placeholder="Pilih Kategori Mobil"
            />
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
      <button className="cancel_button bg-white" type="button">
        Cancel
      </button>

      <input className="save_button bg-blue-900" type="submit" value="Save" />
    </form>
  );
};

export default Inputdata;
