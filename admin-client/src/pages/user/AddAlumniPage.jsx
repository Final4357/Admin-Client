import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Breadcrumb from '../../components/Breadcrumb';
import AddAlumni from '../../components/user/AddAlumni';

const AddAlumniPage = () => {

    return (
        <Fragment>
            <Breadcrumb pageName="Alumni" />
            <main class="main bg-white px-2 md:py-6 rounded-sm border border-stroke shadow-default dark:border-strokedark dark:bg-boxdark">
                <AddAlumni />
            </main>
        </Fragment>
    )
}

export default AddAlumniPage