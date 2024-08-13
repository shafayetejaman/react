import React from "react";

export function TextForm({ })
{
    return (
        <main className='container'>
            <section className='m-auto my-5'>
                <textarea className='w-100 bg-dark text-white border-0 rounded-3 fs-5' rows={10}></textarea>
                <div className='d-flex gap-1'>

                    <span className="btn btn-success">
                        <i className="fa-solid fa-wand-sparkles text-white"></i>
                        <button className="border-0 p-0 text-white ps-1 bg-transparent">Formate</button>
                    </span>
                    <span className="btn btn-primary">
                        <i className="fa-solid fa-clipboard"></i>
                        <button className="border-0 p-0 text-white ps-1 bg-transparent">Copy</button>
                    </span>
                    <span className="btn btn-danger">
                        <i className="fa-solid fa-broom"></i>
                        <button className="border-0 p-0 text-white ps-1 bg-transparent">Clear</button>
                    </span>
                </div>
            </section>
            {/* TODO text output */}
            <section>

            </section>
        </main>
    );
}   
