import { useEffect } from "react";
import { useState } from "react"


const ProjectPage = () => {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        fetch("/json/projectData.json") . then(response => response.json()). then(data => setDatas(data));
    }, []);
  return (
    <>
     <h1 className="text-5x font-bold">Portofolio Beta</h1>
     <p>Berikut ini beberapa project yang telah saya kerjakan secara individu maupun dengan kelompok saya. Silahkan dilihat sapa tau tertarik</p>
    
    <div className="masonry">
        {datas.map((data) => (
            <div className="card masonry-item bg-base-200"key={data.id}>
                <figure>
                    <img src={'https://robohash.org/${data.name}'} alt=""></img>
                </figure>
            <div className="card-body">
                <h3 className="card-title">{data.title}</h3>
                <p className="text-sm">{data.description}</p>
            </div>
            </div>
        ))}
    </div>
    </>
  )
}

export default ProjectPage