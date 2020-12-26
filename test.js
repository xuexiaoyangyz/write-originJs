/**
 * 传参 ip地址 子网掩码
 * 返回   网络地址  广播地址  ip范围
 * 1. 将ip地址转换为2进制  将子网掩码转换为2进制
 * 2. 进行与运算 -> 转为10进制 网络地址
 * 3. 主机地址都变为1  ->转10进制  广播地址
 * 拿到网络地址和广播地址
 * ip返回 网络地址 +1  ~ 广播地址 - 1
 */


function getIpInfos(ipAddress,subnetMask){
    
    ipList = Ip2Array(ipAddress)
    subnetMaskList = getsubnetMaskIp(subnetMask)
    
    const networkIp = [] // 网络地址
    
    
    for (let i = 0;i<4;i++){
        networkIp[i] = ipList[i]&subnetMaskList[i]
    }

    // 广播地址
    let broadcastIp = getBroadcastIp(networkIp,subnetMask)
    console.log('networkIp:',networkIp)
    console.log('broadcastIp:',broadcastIp)
    return getIpRange(networkIp,broadcastIp)
}

function getIpRange(networkIp,broadcastIp){
    const netIpList = networkIp
    const broadcastIpList = broadcastIp

    // 先以192.168 来写
    if(netIpList[3]!==255){
        netIpList[3] ++
    }else if(netIpList[3] === 255){
        netIpList[3] = 0
        netIpList[2] ++
    }

    if(broadcastIpList[3] !== 0){
        broadcastIpList[3] --
    }else if (broadcastIpList[3] === 0){
        // 好像没有这种情况
    }

    return [netIpList,broadcastIpList]
}

console.log(getIpInfos('192.168.0.0',21))

// get广播地址
function getBroadcastIp(networkIp,subnetMask){
    const hostBit = 32 - Number(subnetMask) // 主机位
    const broadcastIpStr = Array2String(Ip2Binary(networkIp))

    const str = broadcastIpStr.substring(0,subnetMask)
    // console.log(str)
    const addZero = getZeroStr(hostBit)
    // todo 这里拿到了 广播地址的2进制 之后转化为整整的ip地址
    adsStr = str.concat(addZero)
    return binaryString2Ip(adsStr)
}

function getZeroStr(num){
    const list = Array(num).fill(1)
    return Array2String(list)
}

function getsubnetMaskIp(value){
    const list = Array(32).fill(0)
    for( let i = 0 ; i<value ; i++ ){
        list[i] = 1
    }
    
    let maskip = list.join("")
    return binaryString2Ip(maskip)
}

// 2进制字符串ip转 正常ip
function binaryString2Ip(binaryIp){
    let _binaryIp = binaryIp.replace(/\s/g,'').replace(/(.{8})/g,"$1.")
    _binaryIp = _binaryIp.substring(0,_binaryIp.length-1)
    return _binaryIp.split('.').map(e=>(binary2Decimal(e)))
}
// console.log(getsubnetMaskIp(27))

function Ip2Array(address){
    const list = address.split('.')
    return list
}

function Array2String(value){
    const str = value.join('')
    // console.log('55'+str)
    return str
}

function Ip2Binary(address){
    let list = null
    if( typeof address === 'object'){
        list = address
    }else{
        list = address.split('.')
    }
    
    const binaryList = list.map(e=>(toBinary(e)))
    return binaryList
}

function toBinary(number){
    const str = ('00000000'+ parseInt(number,10).toString(2)).slice(-8);
    return str
}

function binary2Decimal(value){
    const str = parseInt(value,2).toString(10)
    return Number(str)
}



// Ip2Binary('192.168.1.0')
// console.log(parseInt('192',10).toString(2))


// console.log(172&192)
// console.log(binary2Decimal('11111111'))


// 传入多个ip范围，判断可用ip段有没有交集
