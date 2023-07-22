import React, { Fragment, useState } from 'react'
import EventList from '../../components/event/EventList';
import Breadcrumb from '../../components/Breadcrumb';
import EventInfoModel from '../../components/event/EventInfoModel';
import EventUpdateModel from '../../components/event/EventUpdateModel';

const EventListPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    
    return (
        <Fragment>
            <Breadcrumb pageName="Event list" />
            <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
                <EventList setShowModal={setShowModal} setShowUpdateModal={setShowUpdateModal}/>
            </div>
            {showModal && <EventInfoModel setShowModal={setShowModal} />}
            {showUpdateModal && <EventUpdateModel setShowUpdateModal={setShowUpdateModal} />}
        </Fragment>
    );
}

export default EventListPage
