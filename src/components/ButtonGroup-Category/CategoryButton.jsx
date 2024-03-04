const catItem = [
  {
    name: "All",
    value: "",
  },
  {
    name: "2 - 4 people",
    value: "small",
  },
  {
    name: "4 - 6 people",
    value: "medium",
  },
  {
    name: "6 - 8 people",
    value: "large",
  },
];

const CategoryButton = () => {
  return (
    <div className="category-sort flex py-2 gap-4 mb-7">
      {catItem.map((item, index) => (
        <div key={index}>
          <input
            type="radio"
            name="option"
            id={index}
            defaultChecked={item.value === ""}
            value={item.value}
            className="peer hidden"
          />
          <label
            htmlFor={index}
            className="bg-white ring-2 ring-slate-400 rounded-sm py-2.5 px-3 cursor-pointer text-sm font-bold hover:ring-blue-800 hover:text-blue-800 peer-checked:bg-slate-300 peer-checked:ring-blue-800 peer-checked:text-blue-800"
          >
            {item.name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CategoryButton;
