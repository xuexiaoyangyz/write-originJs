const rules = {'key1':12,'key2':32,'key3':43,'key4':35}

const arr = ['key1','key2','key3','key4']

arr.forEach(item=>{
    rules[item] = [{require:true}]
})

console.log(Object.keys(rules))