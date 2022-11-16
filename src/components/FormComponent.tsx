import React from "react";
import { createPost } from "../services/http";

function FormComponent(props: any) {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");

  const savePost = async (e:any) => {
    e.preventDefault();
    const response = await createPost({ UserId:1, title, body });
    if (response.status === 201) {
      alert("Post created successfully");
    }
    props.setOpen(false);
  };
     

    return (
      <>
        <div>
                    
            <div className="mt-5 md:col-span-2 md:mt-0">
              <form action="#" method="POST">
                <div className="shadow sm:overflow-hidden sm:rounded-md">
                  <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2">
                        <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                          Title
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                         
                          <input
                            type="text"
                            name="company-website"
                            id="company-website"
                            className="text-padding block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 "
                            placeholder="title here"
                            onChange={(e) => setTitle(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
  
                    <div>
                      <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                        Body
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="about"
                          name="about"
                          rows={6}
                          className="text-padding mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="body here"
                          defaultValue={''}
                          onChange={(e) => setBody(e.target.value)}
                        />
                      </div>
                    
                    </div>
  
                  
                  </div>
                  <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={savePost}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          
        </div>
  
       
      </>
    )
  }
  
  export default FormComponent;