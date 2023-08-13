import React from "react";
import elements from "@/constants/dropdow";
interface MyFormModalProps {
  onDismiss: () => void;
}

function MyFormModal({ onDismiss }: MyFormModalProps) {
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
        <form className="text-white  ">
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
                className="mt-2 rounded p-1 pl-3 text-sm"
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
                className="mt-2 rounded p-1 pl-3 text-sm"
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
                className="mt-2 rounded p-1 pl-3 text-sm"
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
                className="mt-2 rounded p-1 pl-3 text-sm"
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
              <select>
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
              <textarea rows={8} className="mt-2 rounded p-1 text-sm" />
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
                className="mt-2 rounded p-1 pl-3 text-sm "
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <label>Carbon Captured</label>
              <input
                type="text"
                placeholder="Carbon Captured"
                className="mt-2 rounded p-1 pl-3 text-sm"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MyFormModal;
