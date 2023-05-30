import { AiOutlinePlus } from "react-icons/ai";


export  function TaskForm(){
    return(
        <div className="card card-body bg-secondary text-black">
            <h1>Agregar Tarea</h1>

            <form>
                <input type="text"
                placeholder="Escribe un titulo"
                name="title"
                className="form-control mb-3 rounded-0 shadow-none border-0 "
                />

                <textarea 
                name="description"
                rows={2}
                placeholder="Escribe una Descripcion"
                className="form-control mb-3 shadow-none border-0">
                </textarea>

                <button className="btn btn-primary">
                    Guardar
                    <AiOutlinePlus/>
                </button>
            </form>
        </div>
    )
}