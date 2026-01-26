import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function AdminProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_URL + "/api/products")
      .then((response) => {
        setProducts(response.data);
      });
  }, []);

  return (
    
    <div className="w-full h-full p-4">
        <Link to="/admin/Admin-Add-Product" className="fixed right-[50px] bottom-[50px] text-4xl hover:text-pink-900">
            <AiOutlinePlus />
        </Link>
      <div className="overflow-x-auto rounded-xl shadow-lg">
        <table className="w-full text-sm text-center bg-white/80 backdrop-blur-md">
          <thead className="bg-gradient-to-r from-pink-600 to-cyan-500 text-white">
            <tr>
              <th className="p-[5px]">Image</th>
              <th className="p-[5px]">Product ID</th>
              <th className="p-[5px]">Product Name</th>
              <th className="p-[5px]">Price</th>
              <th className="p-[5px]">Label Price</th>
              <th className="p-[5px]">Category</th>
              <th className="p-[5px]">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((item, index) => (
              <tr
                key={index}
                className="border-b hover:bg-pink-200 transition duration-200"
              >
                <td className="p-1">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-14 h-14 mx-auto rounded-lg object-cover shadow"
                  />
                </td>
                <td className="font-medium">{item.productID}</td>
                <td className="p-2">{item.name}</td>
                <td className="text-green-700 font-semibold">
                  Rs. {item.price}
                </td>
                <td className="p-2 line-through text-gray-500">
                  Rs. {item.lablePrice}
                </td>
                <td>{item.category}</td>

                <td>
                  <div className="flex gap-2 justify-center">
                    {/* Edit */}
                    <button
                      title="Edit"
                      className="p-2 rounded-lg bg-green-100 text-green-700 
                                 hover:bg-green-200 transition"
                    >
                      <FaRegEdit size={16} />
                    </button>

                    {/* Delete */}
                    <button
                      title="Delete"
                      className="p-2 rounded-lg bg-red-100 text-red-600 
                                 hover:bg-red-200 transition"
                    >
                      <AiOutlineDelete size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
