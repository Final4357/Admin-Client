import React, { Fragment, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { store } from '../../redux/store/store'
import Loader from '../Loader'
import { adminListRequest, deleteUserById } from '../../apiRequest/userRequest'
import ReactPaginate from 'react-paginate'
import { setID } from '../../redux/state/userSlice'

const AdminList = ({ setShowModal }) => {
  const [pageNo, setPageNo] = useState(0);
  const admin = useSelector((state) => state.user.admin)
  const totaladmin = useSelector((state) => state.user.totalAdmin)
  const loading = useSelector((state) => state.user.loading)

  const handlePageClick = async (e) => {
    setPageNo(e.selected)
  };

  const onView = (id) => {
    store.dispatch(setID(id))
    setShowModal(true)
  }

  useEffect(() => {
    adminListRequest(pageNo + 1, 5, "0")
  }, [pageNo])


  return (
    <Fragment>
      {
          loading ?
          <Loader />
          :
          <>
          <div className="max-w-full overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-2 text-left dark:bg-meta-4">
                  <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                    Image
                  </th>
                  <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                    Name
                  </th>
                  <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                    Email
                  </th>

                  <th className="py-4 px-4 font-medium text-black dark:text-white">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  admin.map((item, i) =>
                    <tr key={i} className='h-fit'>
                      <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                        <div className="h-12.5 w-15 rounded-md">
                          <img src={item.photo?.url} alt="Alumni" />
                        </div>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white">
                          {item.firstname + " " + item.lastname}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white">
                          {item.email}
                        </p>
                      </td>

                      <td className="h-fit border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <div className="flex items-center space-x-3.5">
                          <button onClick={() => onView(item._id)} className="hover:text-primary">

                            <svg
                              className="fill-current"
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z"
                                fill=""
                              />
                              <path
                                d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z"
                                fill=""
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  )}
              </tbody>
            </table>
          </div>
          <div className='flex w-full justify-center py-8 '>
            <nav aria-label="Page navigation example" style={{ display: 'flex', justifyContent: 'center' }}>
              <ReactPaginate className='pagination gap-2'
                previousLabel="<"
                nextLabel=">"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                pageCount={Math.ceil(totaladmin / 5)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName="pagination"
                activeClassName="actives"
              />
            </nav>
          </div>
        </>
      }
    </Fragment>
  )
}

export default AdminList
