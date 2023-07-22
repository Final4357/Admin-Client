import { Fragment, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultLayout from './layout/DefaultLayout'
import "../src/assets/css/style.css"
import Loader from './components/Loader'
import SignIn from './pages/Authentication/SignIn'
import ResetPassword from './pages/Authentication/ResetPassword'
import CreateJobpage from './pages/job/CreateJobpage'
import JoblistPage from './pages/job/JoblistPage'
import CreateEventPage from './pages/event/CreateEventPage'
import EventListPage from './pages/event/EventListPage'
import AddAlumniPage from './pages/user/AddAlumniPage'
import AlumniListPage from './pages/user/AlumniListPage'
import StudentListPage from './pages/user/StudentListPage'
import ChangePasswordPage from './pages/ChangePasswordPage'
import Dashboard from './pages/dashboard/Dashboard'
import { Toaster } from 'react-hot-toast'

function App() {


  return (
    <Fragment>
      <BrowserRouter>
        <Routes>

          <Route path="/auth/signin" element={<SignIn />} />
          <Route path="/resetpass" element={<ResetPassword />} />
          <Route element={<DefaultLayout />} >
            <Route index element={< Dashboard />} />
            <Route path='/calendar' element={< Loader />} />
            <Route
              path="/job/postjob"
              element={
                <Suspense fallback={<Loader />}>
                  <CreateJobpage />
                </Suspense>
              }
            />
            <Route
              path="/job/joblist"
              element={
                <Suspense fallback={<Loader />}>
                  <JoblistPage />
                </Suspense>
              }
            />
            <Route
              path="/event/eventlist"
              element={
                <Suspense fallback={<Loader />}>
                  <EventListPage />
                </Suspense>
              }
            />
            <Route
              path="/event/eventcreate"
              element={
                <Suspense fallback={<Loader />}>
                  <CreateEventPage />
                </Suspense>
              }
            />
              <Route
              path="/users/addalumni"
              element={
                <Suspense fallback={<Loader />}>
                  <AddAlumniPage />
                </Suspense>
              }
            />
            <Route
              path="/users/alumni/:id"
              element={
                <Suspense fallback={<Loader />}>
                  <AddAlumniPage />
                </Suspense>
              }
            />
            <Route
              path="/users/alumni"
              element={
                <Suspense fallback={<Loader />}>
                  <AlumniListPage />
                </Suspense>
              }
            />
             <Route
              path="/users/students"
              element={
                <Suspense fallback={<Loader />}>
                  <StudentListPage />
                </Suspense>
              }
            />
            <Route
              path="/changePassword"
              element={
                <Suspense fallback={<Loader />}>
                  <ChangePasswordPage />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" reverseOrder={false} />
    </Fragment>
  )
}

export default App