import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Inputdata from "../../components/Inputdata/Inputdata";
import "./addcar.css";

const AddCar = () => {
  return (
    <div className="content w-full min-h-screen bg-slate-100">
      <Breadcrumb />
      <div className="cars-section mt-10">
        <h1 className="text-black font-bold text-xl mb-4">Add New Car</h1>
        {/*  isi content  */}
        <Inputdata />
        {/* <form>
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
          <button className="cancel_button" type="button">
            Cancel
          </button>
          <input className="save_button" type="submit" value="Save" />
        </form> */}
      </div>
    </div>
  );
};

export default AddCar;
