export const Button = ({val,classname,fn}) =>{
    const clicked =()=> {
        fn(val); //Parent fn call and passs val(+,-)
        console.log('Clicked Happen',val);
    }
    return(<button onClick = {clicked} className = {classname}>{val}</button>)
}