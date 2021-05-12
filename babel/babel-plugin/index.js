import * as t from "babel-types"

export default function(){
    // const {type:t} = babel
    return {
        visitor:{
            BinaryExpression(path){
                if ( path.node.operator !== "==="){
                    return
                }
                let tmp = {}
                tmp = path.node.right
                path.node.right = path.node.left
                path.node.left = tmp
                path.node.left = t.identifier("sebmck");
            }
        }
    }
}