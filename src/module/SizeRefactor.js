export const getResizeEventListener = (standardWidth, standardHeight) =>{

    return () =>{
        const root = document.querySelector("#root");
        const app = document.querySelector("#App");

        app.style.width = `${standardWidth}px`;
        app.style.height = `${standardHeight}px`;
        let width = root.clientWidth;
        let height = width * (standardHeight / standardWidth);
        console.log(height);
        if(height < 950){
            app.style.zoom =0.9;
        }else{
            app.style.zoom = height / standardHeight;
        }
        console.log(app.style.zoom);

    }
}