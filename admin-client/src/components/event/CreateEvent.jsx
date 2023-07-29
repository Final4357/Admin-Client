import React, { Fragment, useRef, useState } from 'react'
import Checkbox from '../Checkbox'
import JoditEditor from 'jodit-react';
import { ErrorToast, IsEmpty } from '../../helper/formHelper';
import { useNavigate, useParams } from 'react-router-dom';
import { eventCreateRequest } from '../../apiRequest/eventRequest';

const CreateEvent = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [checked, setChecked] = useState([])
    const openFor = ["Alumni", "Student", "Member", "Staff", "Faculty"]
    let titleRef, topicRef, venueRef, linkRef, dateRef, startTimeRef, endTimeRef, eventWebsiteRef= useRef()
    const navigate = useNavigate()
    let params = useParams()

    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...checked, event.target.value];
        } else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
    };

    const onSave = async () => {
        if (IsEmpty(titleRef.value)) {
            ErrorToast("Title required!");
        } else if (IsEmpty(topicRef.value)) {
            ErrorToast("Topic required!");
        } else if (IsEmpty(venueRef.value)) {
            ErrorToast("Venue required!");
        } else if (IsEmpty(dateRef.value)) {
            ErrorToast("Date required!");
        } else if (IsEmpty(startTimeRef.value)) {
            ErrorToast("Start Time required!");
        } else if (IsEmpty(endTimeRef.value)) {
            ErrorToast("End Time required!");
        } else if (IsEmpty(eventWebsiteRef.value)) {
            ErrorToast("Event Website Link required!");
        } else {
            const data = {
                title: titleRef.value,
                topic: topicRef.value,
                venue: venueRef.value,
                date: new Date(dateRef.value),
                startTime: startTimeRef.value,
                endTime: endTimeRef.value,
                openTo: checked,
                link: linkRef.value,
                ventWebsite: eventWebsiteRef.value,
                desc: content
            }
            const result = await eventCreateRequest(data)
            if(result) navigate('/event/eventlist')
        }
    }

    const onUpdate = async () => {
        if (IsEmpty(titleRef.value)) {
            ErrorToast("Title required!");
        } else if (IsEmpty(topicRef.value)) {
            ErrorToast("Topic required!");
        } else if (IsEmpty(venueRef.value)) {
            ErrorToast("Venue required!");
        } else if (IsEmpty(dateRef.value)) {
            ErrorToast("Date required!");
        } else if (IsEmpty(startTimeRef.value)) {
            ErrorToast("Start Time required!");
        } else if (IsEmpty(endTimeRef.value)) {
            ErrorToast("End Time required!");
        } else if (IsEmpty(eventWebsiteRef.value)) {
            ErrorToast("Event Website Link required!");
        } else {
            const data = {
                title: titleRef.value,
                topic: topicRef.value,
                venue: venueRef.value,
                date: new Date(dateRef.value),
                startTime: startTimeRef.value,
                endTime: endTimeRef.value,
                openTo: checked,
                link: linkRef.value,
                ventWebsite: eventWebsiteRef.value,
                desc: content
            }
            const result = await updateEvent(data, params.id)
            if(result) navigate('/event/eventlist')
        }
    }

    return (
        <Fragment>
            <div class="w-full max-w-xl mx-auto">
                <div className='space-y-4'>
                    <h1 class="text-xl font-semibold text-black dark:text-white">
                    {params.id ? "Update Event" : "Create New Event"}
                    </h1>

                    <div class="space-y-4">
                        <div className="flex justify-between gap-4 ">
                            <div class=" w-full">
                                <label
                                    class="mb-3 block text-black dark:text-white"
                                    for="job-title"
                                >
                                    Title
                                </label>
                                <input
                                    ref={(input) => (titleRef = input)}
                                    class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    type="text"
                                    id="Event-title"
                                    name="Event-title"
                                    placeholder="ex: Junior Programming Contest "
                                    autoFocus
                                />
                            </div>
                        </div>
                        <div className="flex justify-between gap-4 ">
                            <div class=" w-full">
                                <label
                                    class="mb-3 block text-black dark:text-white"
                                    for="job-title"
                                >
                                    Topic
                                </label>
                                <input
                                    ref={(input) => (topicRef = input)}
                                    class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    type="text"
                                    id="Event-topic"
                                    name="Event-topic"
                                    placeholder="ex: Programing contest / Presentation / ......"
                                    autofocus
                                />
                            </div>
                        </div>
                        <div className="flex justify-between gap-4 ">
                            <div class=" w-full">
                                <label
                                    class="mb-3 block text-black dark:text-white"
                                    for="job-title"
                                >
                                    Venue
                                </label>
                                <input
                                    ref={(input) => (venueRef = input)}
                                    class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    type="text"
                                    id="Event-venue"
                                    name="Event-venue"
                                    placeholder="ex: At central library of IIUC "
                                    autofocus
                                />
                            </div>
                        </div>
                        <div className="flex justify-between gap-4 ">
                            <div class=" w-full">
                                <label
                                    class="mb-3 block text-black dark:text-white"
                                    for="apply-link"
                                >
                                    Link (optional)
                                </label>
                                <input
                                    ref={(input) => (linkRef = input)}
                                    class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    type="text"
                                    id="apply-link"
                                    name="apply-link"
                                    placeholder="e.g. Registration link and etc"
                                />
                            </div>
                            <div class=" w-full">
                                <label
                                    class="mb-3 block text-black dark:text-white"
                                    for="apply-link"
                                >
                                    Date
                                </label>
                                <input
                                    ref={(input) => (dateRef = input)}
                                    class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    type="date"
                                    id="event-date"
                                    name="event-date"
                                />
                            </div>
                        </div>
                        <div class="flex w-full justify-between  gap-4 ">
                            <div class="w-full md:w-1/2   md:mb-0 ">
                                <label for="company" class="mb-3 block text-black dark:text-white">
                                    Starting Time
                                </label>
                                <input
                                    ref={(input) => (startTimeRef = input)}
                                    type="time"
                                    class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    id="company"
                                    name="company"
                                    placeholder="ex: 10 AM"
                                />
                            </div>
                            <div class="w-full md:w-1/2   md:mb-0 ">
                                <label for="company" class="mb-3 block text-black dark:text-white">
                                    Ending Time
                                </label>
                                <input
                                    ref={(input) => (endTimeRef = input)}
                                    type="time"
                                    class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    id="company"
                                    name="company"
                                    placeholder="ex: 1 PM"
                                />
                            </div>

                        </div>
                        <div class=" w-full">
                            <label
                                class="mb-3 block text-black dark:text-white"
                                for="apply-link"
                            >
                                Event website
                            </label>
                            <input
                                ref={(input) => (eventWebsiteRef = input)}
                                class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                type="text"
                                id="apply-link"
                                name="apply-link"
                                placeholder="https://www.djangoproject.com/event"
                            />
                        </div>
                        <div class=" w-full">
                            <label
                                class="mb-3 block text-black dark:text-white"
                                for="apply-link"
                            >
                                Open for
                            </label>
                            <div class="flex items-center gap-3 flex-wrap">
                                {
                                    openFor.map((item, i) =>
                                        <Checkbox key={i} handleCheck={handleCheck} label={item} />
                                    )
                                }
                            </div>
                        </div>
                        <div>
                            <label
                                for="desc"
                                class="mb-3 block text-black dark:text-white"
                            >
                                Description
                            </label>
                            <JoditEditor
                                ref={editor}
                                value={content}
                                // config={config} 
                                tabIndex={1}
                                onBlur={newContent => setContent(newContent)}
                                onChange={newContent => setContent(newContent)}
                            />
                        </div>
                        <button onClick={ params.id ? onUpdate : onSave} className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                             {params.id ? "Save" : "Create"}
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default CreateEvent