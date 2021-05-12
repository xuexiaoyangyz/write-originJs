

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const subFlow = createFlow([() => delay(1000).then(() => console.log("c"))]);

createFlow([
  () => console.log("a"),
  () => console.log("b"),
  subFlow,
  [() => delay(1000).then(() => console.log("d")), () => console.log("e")],
]).run(() => {
  console.log("done");
});

// 需要按照 a,b,延迟1秒,c,延迟1秒,d,e, done 的顺序打印

function createFlow(effects){
  return {
    isFlow:true,
    run(cb=()=>{}){
      return [...effects,cb].reduce(
        (promise,effect)=>{
          return promise.then(()=>
            typeof effect === 'function' 
              ? effect()
              : Array.isArray(effect) 
              ? createFlow(effect).run()
              : effect.isFlow && typeof effect.run === 'function' 
              ? effect.run()
              : void 0
          )
        },
        Promise.resolve()
      )
    }
  }
}

