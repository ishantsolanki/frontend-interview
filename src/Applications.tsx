import React from "react";
import SingleApplication from "./SingleApplication";
import styles from "./Applications.module.css";
import { useApplications } from "./network/applications";
import { Loading } from "./components/Loading/Loading";

const Applications = () => {
  const { data, isLoading } = useApplications(1, 10);
  return (
    <div className={styles.Applications}>
      {isLoading ? (
        <Loading />
      ) : (
        data?.map((application) => (
          <SingleApplication key={application.guid} application={application} />
        ))
      )}
    </div>
  );
};

export default Applications;
