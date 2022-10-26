import './MenuToggle.css'



const MenuToggle = props => {

    const cls = [
        'MenuToggle',
        'fa',
    ]

    if (props.isOpen) {
        cls.push('fa-times')
        cls.push('MenuToggle open')
    } else {
        cls.push('fa-bars')
    }


    return (
        <i className={cls.join(' ')}
           onClick={props.onToggle}></i>
    )
}






export default MenuToggle