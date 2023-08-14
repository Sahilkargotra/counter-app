export const Message = ({msg,classname,value = ""}) =>
{
    const myclassName = `${classname} text-center`;
    return(<h2 classname = {myclassName}> {msg} {value}</h2>)
}