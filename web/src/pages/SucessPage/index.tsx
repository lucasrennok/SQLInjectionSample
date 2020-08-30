import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import PageFooter from '../../components/PageFooter/PageFooter';

import './styles.css'
import { Link } from 'react-router-dom';

interface SuccessPageProps{
  success: any
}

const SuccessPage: React.FC<SuccessPageProps> = ({success}) => {

  if(success!==undefined){
    success=success.success;
  }

  return (
    <div className="page-success">
      <PageHeader />

        {success? 
        <div className="content">
          <h1>WELCOME!</h1>
          <h2>The site is no more secure.</h2>
          <p>You could bypass the login page.</p>
        </div>
        :
        <div className="content">
          <h1>ERROR: 404</h1> 
          <h2>Something went wrong.</h2>
          <Link to="/">
            <p>Go back to the login page and try again.</p>
          </Link>
        </div>
        }

      <PageFooter />
    </div>
  );
}

export default SuccessPage;
