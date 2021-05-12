new Promise(resolve => {
    resolve()
  })
    .then(const fn1 = () => {
                    new Promise(resolve => {
                        resolve()
                    })
                        .then(const fn2 = () => {
                        console.log(1)
                        })
                        .then(const fn3 = () => {
                        console.log(2)
                        })
                        .then(const fn4 = () => {
                        console.log(3.1)
                        })
    })
    .then(const fn5 = () => {
                    console.log(1.1)
                    new Promise((resolve => {
                        resolve()
                    }))
                        .then(const fn6 = () => {
                                new Promise(resolve => {
                                    resolve()
                                })
                                            .then(const fn7 = () => {
                                            console.log(4)
                                            })
                                            .then(const fn8 = () => {
                                            console.log(6)
                                            })
                        })
                        .then(const fn9 = () => {
                        console.log(5)
                        })
    })
    .then(const fn10 = () => {
                    console.log(3)
    })
  console.log(0)



  const p1 = new Promise((resolve) => {
    resolve()
  }).then(function f1() {
                console.log(1)
                const p2 = new Promise(resolve => {
                    resolve()
                    }).then(function f3() {
                    console.log(2)
                    }).then(function f4() {
                    console.log(4)
                    })
  }).then(function (f2) {
                console.log(3)
  })
  
  console.log(0)