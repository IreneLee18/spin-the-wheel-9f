import ClipLoader from "react-spinners/ClipLoader";
const css={
  borderColor:`rgb(240, 190, 255) rgb(240, 190, 255) transparent`,
  position: 'absolute',
  top:'47%',
  left:'47%',
  borderWidth:'10px'
}
function Loading(){
  return(
    <>
    <div style={{position:'relative',height:'calc(100vh - 80px - 84.5px)'}}>
      <ClipLoader size={150} cssOverride={css}/>
    </div>
    </>
  )
}
export default Loading