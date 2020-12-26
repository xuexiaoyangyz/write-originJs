// let props = {a:1,b:2,user:'xxy'}

// function changeProps (){
//     props.user = 'xxy2'
// }
let props = 'xxy'

function changeProps (){
    props = 'xxy2'
}
let fn = null
function render() {
    debugger
    const props1 = props

    const showMessage = () => {
      console.log('Followed ' + props1);
    };

    const handleClick = () => {
      setTimeout(showMessage, 3000);
    };

    fn = handleClick;
    
  }

  render()
  fn()
  changeProps()
  