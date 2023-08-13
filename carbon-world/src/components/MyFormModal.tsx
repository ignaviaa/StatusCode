"use client";
import React, { useState } from "react";
import elements from "@/constants/dropdow";
import { useRefi } from "@/hooks/useRefi";
interface MyFormModalProps {
  onDismiss: () => void;
}

function MyFormModal({ onDismiss }: MyFormModalProps) {
  const { addProject, projectTest } = useRefi({ typeOfAccount: "NGO" });
  // const [data, setData] = useState([
  //   {
  //     name: "",
  //     year: "",
  //     lead: "",
  //     location: "",
  //     category: "",
  //     desc: "",
  //     image: "",
  //     carbon: "",
  //   },
  // ]);
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [lead, setLead] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [carbon, setCarbon] = useState<number>(0);
  const [funding, setFunding] = useState("");
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="relative h-[70%] w-[50%] overflow-y-scroll rounded-lg bg-[#171819] p-8   ">
        <button
          className="absolute right-0 top-0 p-2 text-white "
          onClick={onDismiss}
        >
          X
        </button>
        {/*<h2 className="text-xl text-white font-semibold mb-4">My Form Modal</h2>*/}
        <form className="text-white">
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "16px",
              }}
            >
              <label>Create a New Project</label>
              <input
                type="text"
                placeholder="Name of the project"
                className="mt-2 rounded p-1 pl-3 text-sm text-black"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "16px",
              }}
            >
              <label>Start Year</label>
              <input
                type="text"
                placeholder="Start Year"
                className="mt-2 rounded p-1 pl-3 text-sm text-black"
                onChange={(e) => setYear(e.target.value)}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "16px",
              }}
            >
              <label>Project Lead</label>
              <input
                type="text"
                placeholder="Project Lead"
                className="mt-2 rounded p-1 pl-3 text-sm text-black"
                onChange={(e) => setLead(e.target.value)}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "16px",
              }}
            >
              <label>Location</label>
              <input
                type="text"
                placeholder="Location"
                className="mt-2 rounded p-1 pl-3 text-sm text-black"
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "16px",
                color: "black",
              }}
            >
              <label className="my-2 text-white">Category</label>
              <select onChange={(e) => setCategory(e.target.value)}>
                {elements.map((element, index) => (
                  <option key={index} value={element.name}>
                    {element.name}
                  </option>
                ))}
              </select>
              {/*<input type="text" placeholder="Project Image"  className="rounded p-1 text-sm mt-2 pl-3 "/>*/}
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "16px",
              }}
            >
              <label>Description</label>
              <textarea
                rows={8}
                className="mt-2 rounded p-1 text-sm text-black"
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <label>Funding Raised</label>
              <input
                type="text"
                placeholder="Funding Raised"
                className="mt-2 rounded p-1 pl-3 text-sm text-black"
                onChange={(e) => setFunding(e.target.value)}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "16px",
              }}
            >
              <label>Project Image</label>
              <input
                type="text"
                placeholder="url"
                className="mt-2 rounded p-1 pl-3 text-sm  text-black"
                onChange={(e) => setImage(e.target.value)}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <label>Carbon Captured</label>
              <input
                type="text"
                placeholder="Carbon Captured"
                className="mt-2 rounded p-1 pl-3 text-sm text-black"
                onChange={(e) => setCarbon(parseInt(e.target.value))}
              />
            </div>
            <div className="mt-6 flex justify-end">
              <button
                className="rounded bg-[#5CC94D] px-4 py-2"
                onClick={(e) => {
                  e.preventDefault();
                  projectTest({
                    idx: 10,
                    nameOfProject: name,
                    startYear: year,
                    projectLead: lead,
                    location: location,
                    category: category,
                    description: desc,
                    fundingRaised: funding,
                    projectImage: image,
                    carbonCaptured: carbon,
                  });
                  onDismiss();
                }}
              >
                Save
              </button>
            </div>
            {/* <p
              onClick={() =>
                console.log(
                  name +
                    " " +
                    year +
                    " " +
                    lead +
                    " " +
                    location +
                    " " +
                    category +
                    " " +
                    desc +
                    " " +
                    funding +
                    " " +
                    image +
                    " " +
                    carbon,
                )
              }
            >
              hi
            </p>
            <p
              onClick={() =>
                projectTest({
                  idx: 10,
                  nameOfProject: name,
                  startYear: year,
                  projectLead: lead,
                  location: location,
                  category: category,
                  description: desc,
                  fundingRaised: funding,
                  projectImage: image,
                  carbonCaptured: carbon,
                })
              }
            >
              hi there
            </p> */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default MyFormModal;
