import React from 'react'

export function Informations(props) {

      return (
         <>
         {console.log(props)}
         <div className="container">
            <div className="row mt-5">
            <div className="text-center mx-auto">
               <form>
               <div className="row mt-4">
            <label>
               <h1 className="text-center mb-2">Name</h1>  
               <input onChange={(event) => {props.saveName(event.target.value)}} className="forminput" type="text" name="name" placeholder="Name..." defaultValue={props.name()} />
            </label>
            </div>
            <div className="row mt-4">
            <label className="mt-5">
                <h1 className="text-center mb-2">Description</h1>  
               <textarea onChange={(event) => {props.saveDescription(event.target.value)}} className="formfield" type="text" name="name" placeholder="Description..." maxLength="500" defaultValue={props.description()}/>
            </label>
            </div>

            <div className="row mt-5">
            <div className="file-drop-area mx-auto" id="file-drop-area">
               <span className="fake-btn">Choose thumbnail</span>
               {/* (IF UPLOAD NAMEFILE.PNG HERE) */}
               <span className="file-msg">Currently using default thumbnail</span>
               <input className="file-input" id="file-input" type="file" accept="image/*"/>
            </div>
            </div>

            <div className="row mt-3">
               <img className="thumbimg" src="http://www.bagherra.eu/wp-content/uploads/2016/11/orionthemes-placeholder-image-1.png" />
            </div>
            </form>
            </div>
            </div>
         </div>
         </>
      )
}