import { Fragment, Suspense, lazy, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultLayout from './layout/DefaultLayout'
import "../src/assets/css/style.css"
import Loader from './components/Loader'
import Dashboard from './pages/dashboard/Dashboard'
import { Toaster } from 'react-hot-toast'
import SignInPage from './pages/Authentication/SignInPage'
import ResetPasswordPage from './pages/Authentication/ResetPasswordPage'
import ProfilePage from './pages/profile/ProfilePage'
const CreateJobpage = lazy(() => import('./pages/job/CreateJobpage'))
const JoblistPage = lazy(() => import('./pages/job/JoblistPage'))
const CreateEventPage = lazy(() => import('./pages/event/CreateEventPage'))
const EventListPage = lazy(() => import('./pages/event/EventListPage'))
const AddAlumniPage = lazy(() => import('./pages/user/AddAlumniPage'))
const AlumniListPage = lazy(() => import('./pages/user/AlumniListPage'))
const StudentListPage = lazy(() => import('./pages/user/StudentListPage'))
const ChangePasswordPage = lazy(() => import('./pages/ChangePasswordPage'))
const NewsListPage = lazy(() => import('./pages/news/NewsListPage'))
const CreateNewsPage = lazy(() => import('./pages/news/CreateNewsPage'))

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/auth/signin" element={<SignInPage/>} />
          <Route path="/resetpass" element={<ResetPasswordPage />} />
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
              path="/news/newslist"
              element={
                <Suspense fallback={<Loader />}>
                  <NewsListPage />
                </Suspense>
              }
            />
            <Route
              path="/news/newscreate"
              element={
                <Suspense fallback={<Loader />}>
                  <CreateNewsPage />
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
             <Route
              path="/profile"
              element={
                <Suspense fallback={<Loader />}>
                  <ProfilePage />
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