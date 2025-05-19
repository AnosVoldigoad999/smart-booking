import { IoChevronDown } from "react-icons/io5";

const Select = ({ label, options, value, icon: Icon, onChange, theme }) => (
    <div className="relative">
      <label className={`block text-sm font-medium ${theme==="light"?"text-gray-700":"text-white"} mb-2 flex items-center`}>
        <Icon className="mr-2 text-teal-500 text-lg" /> {label}
      </label>
      <select
        value={value}
        onChange={onChange}
        className={`w-full p-3 ${theme==="light"?"bg-gray-50 text-gray-800 border-gray-200":"bg-gray-600 text-gray-50 border-gray-500"} border-2  rounded-lg focus:border-teal-500  transition-all duration-200 outline-none appearance-none cursor-pointer`}
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none mt-6">
        <IoChevronDown className="text-gray-400 w-5 h-5" />
      </div>
    </div>
  );
  
  export default Select;