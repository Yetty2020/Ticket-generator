import { useState } from "react";

export default function TicketNumber() {
  const [selected, setSelected] = useState("");

  const handleChange = (event) => {
    setSelected(event.target.value);
  };
  return (
    <section className="flex flex-col text-white">
      <h4 className= "self-start text-base">Number of Tickets:</h4>
      <div className=" ">
        <select value={selected} onChange={handleChange} className="w-full bg-primary-color p-[12px] rounded-[12px] border border-border-color">
          <option value="option1"> 1</option>
          <option value="option2"> 2</option>
          <option value="option3"> 3</option>
        </select>
      </div>
    </section>
  );
}
