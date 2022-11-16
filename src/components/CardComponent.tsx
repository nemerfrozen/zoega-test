import React from "react";
import { deletePost } from "../services/http";


function CardComponent({ post: { title, body, id } }: any) {

    const deletePostById = async (id: number) => {
        const response = await deletePost(id);
        if (response.status === 200) {
            alert("Post deleted successfully");
        }
    }



    return (
        <>
            <div className="bg-white shadow-md rounded-lg overflow-hidden card">

                <div className="p-4">
                    <h1 className="text-gray-700 font-bold">{title}</h1>
                    <p className="mt-2 text-gray-600">{body}</p>
                </div>
                <div className="flex justify-end p-2">
                    <button className="bg-blue-500 text-white text-xs font-bold px-2 rounded-full" onClick={() => {
                        deletePostById(id);
                    }}>Delete</button>
                </div>
            </div>
        </>

    )
}

export default CardComponent;