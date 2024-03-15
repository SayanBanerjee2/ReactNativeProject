import { Routes } from "react-router-dom"
import "./App1.css";
import { CiLocationOn } from "react-icons/ci";
import { IoCallSharp } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";


function App() {

    return (
      <>
            <header className="chad  text-3xl font-semibold text-center min-h-[100px] pt-12">Our Services</header>
            <div className="bari  pt-8 pb-8 pl-8 pr-8 min-h-[600px]">

                <div className="room-1 grid grid-cols-3 gap-16  mt-8 pb-8 ml-8 mr-8  min-h-[200px]">
                    <div className="almari bg-gray-50 rounded-3xl">
                        <p className="text-2xl font-semibold pl-6 pt-4 pr-6">CCTV Maintainance (IP Camera & Normal Camera)</p>
                        <p className="font-semibold text-gray-500 pl-6 pt-2 pr-6 pb-4 leading-tight">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className="almari bg-gray-50 rounded-3xl">
                        <p className="text-2xl font-semibold pl-6 pt-4 pr-6">Network Configuration</p>
                        <p className="font-semibold text-gray-500 pl-6 pt-2 pr-6 pb-4 leading-tight">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className="almari bg-gray-50 rounded-3xl">
                        <p className="text-2xl font-semibold pl-6 pt-4 pr-6">Router Configuration</p>
                        <p className="font-semibold text-gray-500 pl-6 pt-2 pr-6 pb-4 leading-tight">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>

                <div className="room-2 grid grid-cols-3 gap-16  mt-8 pb-8 ml-8 mr-8  min-h-[200px]">
                    <div className="almari bg-gray-50 rounded-3xl">
                        <p className="text-2xl font-semibold pl-6 pt-4 pr-6">Desktop Repairing</p>
                        <p className="font-semibold text-gray-500 pl-6 pt-2 pr-6 pb-4 leading-tight">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className="almari bg-gray-50 rounded-3xl">
                        <p className="text-2xl font-semibold pl-6 pt-4 pr-6">Laptop Repairing</p>
                        <p className="font-semibold text-gray-500 pl-6 pt-2 pr-6 pb-4 leading-tight">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className="almari bg-gray-50 rounded-3xl">
                        <p className="text-2xl font-semibold pl-6 pt-4 pr-6">Printer Repairing</p>
                        <p className="font-semibold text-gray-500 pl-6 pt-2 pr-6 pb-4 leading-tight">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>

                <div className="room-3 grid grid-cols-3 gap-16  mt-8 mb-8 ml-8 mr-8  min-h-[200px]">
                    <div></div>
                    <div className="almari bg-gray-50 rounded-3xl">
                        <p className="text-2xl font-semibold pl-6 pt-4 pr-6">Server Maintainance</p>
                        <p className="font-semibold text-gray-500 pl-6 pt-2 pr-6 pb-4 leading-tight">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
            </div>

            <div className=" bhit grid grid-cols-3 bg-black text-white min-h-[270px]">
                <div className="cols span-1 pl-8" >
                    <p className="font-semibold text-4xl pt-8 pl-10 ">Contact Us</p>
                    <p className=" pt-4 pl-10 text-xl flex"><CiLocationOn size="2.5rem" /> 561,Street,City,<br/>District,State,Pin-000000</p>
                    <p className=" pt-4 pl-10 text-xl flex "><IoCallSharp size="2.0rem" /> +91 0000000000</p>
                    <p className=" pt-4 pl-10 text-xl flex"><FaWhatsapp size="2.0rem" /> +91 0000000000</p>
                </div>
                <div></div>
                <div className="cols span-1 pr-16 mt-8">
                    <p className=" pt-4">Submit your contact number our team will contact you soon</p>
                    <input type="number " placeholder="Enter your number" className="mt-4 w-full min-h-[50px] rounded-xl pl-4"/>
                    <input type="submit" value="Submit" className="mt-4  min-h-[50px] rounded-xl  bg-yellow-400 text-black min-w-[150px] text-center font-semibold"/>
                    
                </div>
            </div>
            <footer className="min-h-[100px] bg-black font-semibold text-gray-500 text-center pt-12">Copyright © 2024 | Techtester Infotech </footer>
      </>
    )
}

export default App