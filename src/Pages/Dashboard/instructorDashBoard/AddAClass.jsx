import Title from "../../../Components/Title";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxioxSecure";
import toast from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";

const image_hosting = import.meta.env.VITE_image_upload_token;

const AddAClass = () => {
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure()

    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting}`

    const onSubmit = data => {
        const fromData = new FormData();
        fromData.append('image', data.image[0]);

        fetch(img_hosting_url, {
            method: 'POST',
            body: fromData
        })
            .then(res => res.json())
            .then(imgRes => {
                if (imgRes.success) {
                    const imgURL = imgRes.data.display_url;
                    const { name, category, price, instructor, available_seats } = data;
                    const newClass = { name, category, price: parseFloat(price), instructor, available_seats: parseFloat(available_seats), image: imgURL, email: user?.email };


                    axiosSecure.post('/classes', newClass)
                        .then(data => {
                            if (data.data.insertedId) {
                                reset()
                                toast.success('Class upload successful')
                            }
                        })
                }
            })

    };



    return (
        <div className="w-full">
            <Title heading="add a class" />
            <form onSubmit={handleSubmit(onSubmit)} className="text-center bg-gray-50 bg-opacity-5 p-4 rounded-xl shadow-2xl mx-auto">
                <div className="my-4">
                    <label className="label">
                        <span className="label-text pl-12 md:pl-32 font-semibold">
                            Class Name*
                        </span>
                    </label>
                    <input {...register("name", { required: true })}
                        type="text" placeholder="Type here" className="input input-bordered input-info w-3/4 mx-4" />
                </div>
                <div>
                    <label className="label pl-12 md:pl-32">
                        <span className="label-text font-semibold">
                            Category*
                        </span>
                    </label>
                    <select {...register("category", { required: true })}
                        className="select select-accent w-3/4">
                        <option defaultValue={'Football'}>Football</option>
                        <option>Tennis</option>
                        <option>Cricket</option>
                        <option>Popular</option>
                        <option>Volleyball</option>
                        <option>Athletics</option>
                        <option>Badminton</option>
                        <option>Hockey</option>
                        <option>Golf</option>
                        <option>Table Tennis</option>
                        <option>Rugby</option>
                        <option>Skating</option>
                    </select>
                </div>
                <div className="my-4">
                    <label className="label pl-12 md:pl-32">
                        <span className="label-text font-semibold">
                            Price*
                        </span>
                    </label>
                    <input {...register("price", { required: true })}
                        type="number" placeholder="Type here" className="input input-bordered input-success w-3/4" />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text pl-12 md:pl-32 font-semibold">
                            Instructor Name*
                        </span>
                    </label>
                    <input {...register("instructor", { required: true })}
                        type="text" placeholder="Type here" className="input input-bordered input-info w-3/4 mx-4" />
                </div>
                <div className="mt-4">
                    <label className="label">
                        <span className="label-text pl-12 md:pl-32 font-semibold">
                            Available Seats*
                        </span>
                    </label>
                    <input {...register("available_seats", { required: true })}
                        type="number" placeholder="Type here" className="input input-bordered input-info w-3/4 mx-4" />
                </div>
                <div className="my-4">
                    <label className="label">
                        <span className="label-text pl-12 md:pl-32 font-semibold">
                            Class Image*
                        </span>
                    </label>
                    <input {...register("image", { required: true })}
                        type="file" className="file-input file-input-bordered file-input-accent w-3/4" />
                </div>
                <input type="submit" className="btn btn-outline btn-accent border-b-4 border-accent w-3/4 mb-4" />
            </form >
        </div >
    );
};

export default AddAClass;