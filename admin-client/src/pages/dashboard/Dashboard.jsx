import React, { Fragment, useEffect } from 'react'
import CardOne from '../../components/dashboard/CardOne'
import CardTwo from '../../components/dashboard/CardTwo'
import CardThree from '../../components/dashboard/CardThree'
import CardFour from '../../components/dashboard/CardFour'
import Userlist from '../../components/dashboard/Userlist'
import Chats from '../../components/dashboard/Chats'
import { alumninfoReq } from '../../api/apiReq'

const Dashboard = () => {

  useEffect(()=>{
 alumninfoReq()


  },[])
  return (
    <Fragment>
       

       <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
       <CardOne/>
       <CardTwo/>
       <CardThree/>
       <CardFour/>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
       
        <div className="col-span-12 xl:col-span-8">
          <Userlist/>
        </div>
        <Chats/>
        </div>
    </Fragment>

  )
}

export default Dashboard