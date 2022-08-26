
const Button = ({btnName, onClick}) => {
  return (
    <>
      <button className="text-[15px] pl-[12px] pr-[12px] pb-[3px] pt-[3px] text-white bg-pink-400 border border-transparent rounded-[5px]" 
       type="button" onClick={onClick}>{btnName}</button>
    </>
  )
}

export default Button
