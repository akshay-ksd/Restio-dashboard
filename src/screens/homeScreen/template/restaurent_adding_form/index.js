import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { addNewRestaurant } from './api';
function RestaurantAddForm(props) {
    const [load, setLoad] = useState(false)
    const [formData, setFormData] = useState({
        restaurant_id: "",
        name: '',
        address: '',
        number: '',
        email_id: '',
        image_url: null,
        subscription: [],
        is_active: true,
        branches: []
    });

    const handleChange = (e) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [e.target.id]: e.target.value,
        }));
    };

    const handleImageDrop = (acceptedFiles) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            image_url: "https://mykeralafood.com/wp-content/uploads/2022/08/Rooftop-Restaurants-in-Fort-Kochi.jpg",
        }));
    };

    const handleSubmit = async(e) => {
        setLoad(true)
        e.preventDefault();
        const lastSixDigits = formData.number.slice(-6);
        formData.restaurant_id = lastSixDigits
        setFormData(formData)
        const status = addNewRestaurant(formData);
        if(status){
            setLoad(false)
            props.closeForm(true)
        }else{
            setLoad(false)
            alert("Something wrong")
        }
        // Add the formData to an array or perform any desired operations
        // Reset the form
        setFormData({
            restaurant_id: "",
            name: '',
            address: '',
            number: '',
            email_id: '',
            image_url: null,
            subscription: [],
            is_active: true,
            branches: []
        });
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop: handleImageDrop });

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-lg shadow-md w-1/2 h-4/5">
                <button
                    className="absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-800"
                    onClick={() => props.closeForm()}
                >
                    Close
                </button>
                <form
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                    onSubmit={handleSubmit}
                >
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2 font-sans-condensed"
                            htmlFor="name"
                        >
                            Restaurant Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-sans-condensed"
                            id="name"
                            type="text"
                            placeholder="Enter restaurant name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2 font-sans-condensed"
                            htmlFor="address"
                        >
                            Restaurant Address
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-sans-condensed"
                            id="address"
                            type="text"
                            placeholder="Enter restaurant address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2 font-sans-condensed"
                            htmlFor="phone"
                        >
                            Phone Number
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-sans-condensed"
                            id="number"
                            type="text"
                            placeholder="Enter your phone number"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2 font-sans-condensed"
                            htmlFor="email"
                        >
                            Email Address
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-sans-condensed"
                            id="email_id"
                            type="text"
                            placeholder="Enter your email address"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2 font-sans-condensed"
                            htmlFor="image"
                        >
                            Image
                        </label>
                        <div
                            className="w-full h-32 border-2 border-dashed border-gray-300 rounded-lg flex justify-center items-center cursor-pointer"
                            {...getRootProps()}
                        >
                            <input {...getInputProps()} />
                            <p className="text-gray-400">Drag and drop an image or click to browse</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-brand text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline font-sans-condensed"
                            type="submit"
                            onClick={() => props.closeForm()}
                        >
                            Cancel
                        </button>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline font-sans-condensed"
                            type="submit"
                        >
                            {
                                !load ?
                                    "Submit"
                                    :
                                    <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-white"></div>
                            }

                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RestaurantAddForm;
