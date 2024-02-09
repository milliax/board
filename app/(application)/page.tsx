import { IoSettingsOutline } from "react-icons/io5";


export default function Home() {

  return (
    <div className="flex flex-col h-screen py-3 px-5">
      <div className="h-8 bg-gray-100 px-3 flex flex-row items-center justify-between">
        <h2>Febuary, 2024</h2>
        <IoSettingsOutline />
      </div>
      Calendar
    </div>
  );
}
