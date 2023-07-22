import React, { Fragment } from 'react'
import CreateEvent from '../../components/event/CreateEvent'
import Breadcrumb from '../../components/Breadcrumb'

const CreateEventPage = () => {
  return (
    <Fragment>
        <Breadcrumb pageName="Create event" />
    <main class="main bg-white px-2 md:py-6 rounded-sm border border-stroke shadow-default dark:border-strokedark dark:bg-boxdark">
        <CreateEvent />
    </main>
</Fragment>
  )
}

export default CreateEventPage