import { Fragment, Suspense, useState } from 'react'
import Adminpage from './pages/Adminpage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultLayout from './layout/DefaultLayout'
import Dashboard from './pages/dashboard/dashboard'
import Loader from './components/Loader'
import Postjob from './pages/job/postjob'
import Joblist from './pages/job/Joblist'
import JobUpdate from './pages/job/JobUpdate'
import Events from './pages/event/Events'
import Createevent from './pages/event/Createevent'
import SignIn from './pages/Authentication/SignIn'
import ResetPassword from './pages/Authentication/ResetPassword'
import AddAlumni from './pages/user/AddAlumni'
import Alumnis from './pages/user/Alumnis'
import Students from './pages/user/Students'

function App() {


  return (
    <Fragment>
      <BrowserRouter>
        <Routes>

          <Route path="/auth/signin" element={<SignIn />} />
          <Route path="/resetpass" element={<ResetPassword />} />
          <Route element={<DefaultLayout />} >
            <Route index element={< Dashboard />} />
            <Route
              path="/job/postjob"
              element={
                <Suspense fallback={<Loader />}>
                  <Postjob />
                </Suspense>
              }
            />
            <Route
              path="/job/joblist"
              element={
                <Suspense fallback={<Loader />}>
                  <Joblist />
                </Suspense>
              }
            />
            <Route
              path="/job/jobupdate"
              element={
                <Suspense fallback={<Loader />}>
                  <JobUpdate />
                </Suspense>
              }
            />
            <Route
              path="/event/eventlist"
              element={
                <Suspense fallback={<Loader />}>
                  <Events />
                </Suspense>
              }
            />
            <Route
              path="/event/eventcreate"
              element={
                <Suspense fallback={<Loader />}>
                  <Createevent />
                </Suspense>
              }
            />
              <Route
              path="/users/addalumni"
              element={
                <Suspense fallback={<Loader />}>
                  <AddAlumni />
                </Suspense>
              }
            />
            <Route
              path="/users/alumni"
              element={
                <Suspense fallback={<Loader />}>
                  <Alumnis />
                </Suspense>
              }
            />
             <Route
              path="/users/students"
              element={
                <Suspense fallback={<Loader />}>
                  <Students />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}

export default App