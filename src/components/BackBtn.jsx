import { useNavigate } from "react-router-dom";

const BackBtn = () => {
  
  const navigate = useNavigate();
  return (
    <button
      onClick={ () => navigate('/') } 
      className="px-5 py-2 flex flex-row items-center justify-between bg-white dark:bg-[#2b3945] dark:text-white shadow rounded hover:drop-shadow-[0_0px_3px_rgba(0,0,0,0.10)]">
      <i className="fa-solid fa-arrow-left-long"></i>
      <span className="ml-2">Back</span>
    </button>
  );
}
 
export default BackBtn;