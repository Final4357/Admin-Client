import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import StudendList from '../../components/user/StudendList'
import Breadcrumb from '../../components/Breadcrumb'

const StudentListPage = () => {
  return (
    <Fragment>
            <Breadcrumb pageName="Students list" />
            <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
                <StudendList />
            </div>
        </Fragment>
  )
}

export default StudentListPage