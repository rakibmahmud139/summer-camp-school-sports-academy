import Title from "../../../Components/Title";
import { useForm } from "react-hook-form";


const AddAClass = () => {

    const { register, handleSubmit, } = useForm();
    const onSubmit = data => console.log(data);

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
                        <option>Popular</option>
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