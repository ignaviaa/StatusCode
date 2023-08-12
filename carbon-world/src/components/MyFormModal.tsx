import React from 'react';
import elements from "@/constants/dropdow";
interface MyFormModalProps {
    onDismiss: () => void;
}

function MyFormModal({onDismiss}: MyFormModalProps) {


    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-[#171819] w-[50%] h-[70%] p-8 rounded-lg relative overflow-y-scroll   ">
                <button className="absolute top-0 right-0 p-2 text-white " onClick={onDismiss}>
                    X
                </button>
                {/*<h2 className="text-xl text-white font-semibold mb-4">My Form Modal</h2>*/}
                <form className="text-white  ">


                    <div>
                        <div style={{display: 'flex', flexDirection: 'column', marginBottom: '16px'}}>
                            <label>Create a New Project</label>
                            <input type="text" placeholder="Name of the project"
                                   className="rounded p-1 text-sm mt-2 pl-3"/>
                        </div>

                        <div style={{display: 'flex', flexDirection: 'column', marginBottom: '16px'}}>
                            <label>Start Year</label>
                            <input type="text" placeholder="Start Year" className="rounded p-1 text-sm mt-2 pl-3"/>
                        </div>

                        <div style={{display: 'flex', flexDirection: 'column', marginBottom: '16px'}}>
                            <label>Project Lead</label>
                            <input type="text" placeholder="Project Lead" className="rounded p-1 text-sm mt-2 pl-3"/>
                        </div>

                        <div style={{display: 'flex', flexDirection: 'column', marginBottom: '16px'}}>
                            <label>Location</label>
                            <input type="text" placeholder="Location" className="rounded p-1 text-sm mt-2 pl-3"/>
                        </div>

                        <div style={{display: 'flex', flexDirection: 'column', marginBottom: '16px', color: 'black'}}>
                            <label className='text-white my-2'>Category</label>
                            <select>
                                {elements.map((element, index) => (
                                    <option key={index} value={element.name}>
                                        {element.name}
                                    </option>
                                ))}
                            </select>
                            {/*<input type="text" placeholder="Project Image"  className="rounded p-1 text-sm mt-2 pl-3 "/>*/}

                        </div>


                        <div style={{display: 'flex', flexDirection: 'column', marginBottom: '16px'}}>
                            <label>Description</label>
                            <textarea rows={8} className="rounded p-1 text-sm mt-2"/>
                        </div>

                        <div style={{display: 'flex', flexDirection: 'column', marginBottom: '16px'}}>
                            <label>Project Image</label>
                            <input type="text" placeholder="url" className="rounded p-1 text-sm mt-2 pl-3 "/>
                        </div>


                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <label>Carbon Captured</label>
                            <input type="text" placeholder="Carbon Captured" className="rounded p-1 text-sm mt-2 pl-3"/>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default MyFormModal;
