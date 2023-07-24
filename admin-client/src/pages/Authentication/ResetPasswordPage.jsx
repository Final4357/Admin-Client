import { Fragment } from 'react';
import ResetPassword from '../../components/authentication/ResetPassword';

const ResetPasswordPage = () => {
  return (
    <Fragment>
    <main class="main bg-white px-2 md:py-6 rounded-sm border border-stroke shadow-default dark:border-strokedark dark:bg-boxdark">
        <ResetPassword/>
    </main>
</Fragment>
  );
};

export default ResetPasswordPage;
