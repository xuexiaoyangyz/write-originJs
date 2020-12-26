const EOF = Symbol("EOF");
let currentToken = null

function emit(token){
    console.log(token)
}


function data(c){
    if(c === '<'){
        return tagOpen
    } else if (c === EOF){
        emit({
            type:'EOF',
            content:"",
        })
        return 
    } else {
        // emit({
        //     type:'text_tag',
        //     content:"",
        // })
        return data
    }
}

// <html
// </html 
function tagOpen (c){
    if(c === '/'){
        return endTagOpen
    }else if(c.match(/^[a-zA-Z]$/)){
        currentToken = {
            type:'startTag',
            tagName:"",
        }
        return tagName(c)
    }else {
        return
    }
}

function endTagOpen (c){
    if(c.match(/^[a-zA-Z]$/)){
        currentToken = {
            type:'endTag',
            tagName:"",
        }
        return tagName(c)
    }else{
        return tagEnd
    }
}

function tagName(c){
    // 匹配到空格
    if(c.match(/^[\t\n\f ]$/)){
        return beforeAttributeName
    }else if (c === ">"){
        emit(currentToken)
        return data
        // 匹配到
    }else if (c === "/"){
        return selfClosingStratTag
    }else if (c.match(/^[a-zA-Z]$/)){
        currentToken.tagName += c;
        return tagName
    }else {
        return 
    }
}

function beforeAttributeName (c) {
    if(c.match(/^[\t\n\f ]$/)){
        return beforeAttributeName
    }else if( c === '/' || c ===EOF ){
        return selfClosingStratTag
    }else if (c === '='){
        return beforeAttributeName
    }else if(c === '>') {
        emit(currentToken)
        return data
    }else {
        return beforeAttributeName
    }
}

function selfClosingStratTag (c) {
    if(c === ">"){
        currentToken.isSelfClosing = true
        emit(currentToken)
        return data
    }else if (c === EOF) {
        return
    }else {
        return
    }
}


module.exports.parserHTML = function parserHTML (html){
    console.log(html)
    let state = data
    for(let c of html) {
        state = state(c)
    }
    state = state(EOF)

}