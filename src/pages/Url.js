import React from 'react';
import { Link } from 'react-router-dom';

const Url = () => {
  return (
    <div id="app">
        <h2> Url is: <a href="https://us-east-1.console.aws.amazon.com/s3/buckets/minor2-hiringhive?region=us-east-1&bucketType=general&tab=objects">Link to View Resumes</a></h2>
        <br />
        Save it for future purposes.
        <br />
        <strong>Disclaimer: Mandatory to have an AWS Account for viewing the resumes</strong>
        <br />
        <button className='btn'><Link to="/home">Return to Home</Link></button>
    </div>
  );
};

export default Url;