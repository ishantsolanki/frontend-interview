import React from "react";
import SingleApplication from "./SingleApplication";
import styles from "./Applications.module.css";
import { useApplications } from "./network/applications";

const Applications = () => {
  const { data } = useApplications(1, 10);
  return (
    <div className={styles.Applications}>
      {data?.map((application) => (
        <SingleApplication key={application.guid} application={application} />
      ))}
    </div>
  );
};

export default Applications;
