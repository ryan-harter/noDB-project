const data = require('../data.json')
let requestId = data.length + 1


module.exports ={
  getRequests: (req,res) => {

    let info = data

    if(!req.query){
      res.status(200).send(info)
    }

    if(req.query.name){
      let nameQuery = info.filter(e => e.name.toLowerCase().includes(req.query.name.toLowerCase()))
      console.log(nameQuery)
      return res.status(200).send(nameQuery)
    }

    if(req.query.companyName){
      let companyNameQuery = info.filter(e => e.companyName.toLowerCase().includes(req.query.companyName.toLowerCase()))
      console.log(companyNameQuery)
      return res.status(200).send(companyNameQuery)
    }

    if(req.query.phone){
      let phoneQuery = info.filter(e => e.phone.includes(req.query.phone))
      console.log(phoneQuery)
      return res.status(200).send(phoneQuery)
    }

    if(req.query.email){
      let emailQuery = info.filter(e => e.email.toLowerCase().includes(req.query.email.toLowerCase()))
      console.log(emailQuery)
      return res.status(200).send(emailQuery)
    }

    if(req.query.shipTo){
      let shipToQuery = info.filter(e => e.shipTo.toLowerCase().includes(req.query.shipTo.toLowerCase()))
      console.log(shipToQuery)
      return res.status(200).send(shipToQuery)
    }

    if(req.query.requestApproved === 'approved'){

      let statusApproved = info.filter(e => e.requestApproved === true)
      console.log(statusApproved)
      res.status(200).send(statusApproved)
    }else if (req.query.requestApproved === 'pending'){
      let statusPending = info.filter(e => e.requestApproved === false)
      console.log(statusPending)
      res.status(200).send(statusPending)
    }else{
      res.status(200).send(info)
    }

    // if(req.query.pupCode){
    //   let codeQuery = info.filter(e => e.pupCode.includes(+req.query.pupCode))
    //   console.log(codeQuery)
    //   res.status(200).send(codeQuery)
    // }else{
    //   res.status(200).send(info)
    // }//WTAF???????????????

  },//if query filter for each property

  addRequest: (req,res) => {
    const{name, companyName, phone, email, shipTo, requestApproved, pupCode} = req.body

    const body = {
      requestId,
      name,
      companyName,
      phone,
      email,
      shipTo,
      requestApproved: false,
      pupCode: 0,
    }

    data.push(body)
    requestId++
    res.status(200).send(data)
  },
  updateRequest: (req,res) => {

    const {id} = req.params
    const {name, companyName, phone, email, shipTo, requestApproved, pupCode} = req.body
    
    console.log(id)
    let foundIndex = data.findIndex(e => e.requestId === +id)
    console.log(foundIndex, req.body)
    if(foundIndex === -1){
      return res.status(404).send('No PUP request with that ID')
      
    }

    

    let updatedRequest = {
      requestId: +id,
      name: name || data[foundIndex].name,
      companyName: companyName || data[foundIndex].companyName,
      phone: phone || data[foundIndex].phone, 
      email: email || data[foundIndex].email, 
      shipTo: shipTo || data[foundIndex].shipTo, 
      requestApproved: requestApproved,
      pupCode: +pupCode || data[foundIndex].pupCode
    }

    data[foundIndex] = updatedRequest
    console.log(data[foundIndex])
    res.status(200).send(data)
  },
  deleteRequest: (req,res) =>{
    const {id} = req.params

    let index = data.findIndex(e => e.requestId === +id)

    if(index === -1){
      res.status(404).send('No PUP request with that ID')
    }

    data.splice(index, 1)
    res.status(200).send(data)
  }
}