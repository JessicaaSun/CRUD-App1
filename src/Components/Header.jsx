import Button from "./Button"

const Header = ({title, showTask, showAdd}) => {
  return (
    <div className="flex justify-between mb-[30px]">
      <h1 className="text-[30px] font-medium">{title}</h1>
      <Button onClick={showTask} btnName={showAdd? 'Close' : 'Show' }/>
    </div>
  )
}

Header.defaultProps = {
  title: "ToDo List"
}
export default Header
